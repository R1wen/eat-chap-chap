import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const now = new Date();
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const tonightStart = new Date();
        tonightStart.setHours(18, 0, 0, 0);
        const tonightEnd = new Date();
        tonightEnd.setHours(23, 59, 59, 999);

        // 1. Total Revenue
        const revenue = await prisma.paiement.aggregate({
            _sum: { montant: true },
        });

        // 2. Active Orders (unpaid)
        const activeOrdersCount = await prisma.commande.count({
            where: { paiements: { none: {} } }
        });

        // 3. Table Occupancy
        const totalTables = await prisma.table_Restaurant.count();
        const occupiedTables = await prisma.table_Restaurant.count({
            where: {
                commandes: {
                    some: { paiements: { none: {} } }
                }
            }
        });

        // 4. Revenue Trend (Last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const payments = await prisma.paiement.findMany({
            where: { date_paiement: { gte: sevenDaysAgo } },
            select: { montant: true, date_paiement: true }
        });

        const trend = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (6 - i));
            const dayStr = date.toLocaleDateString("fr-FR", { weekday: "short" });
            const dayTotal = payments
                .filter((p: (typeof payments)[number]) => new Date(p.date_paiement).toDateString() === date.toDateString())
                .reduce((acc: number, curr: (typeof payments)[number]) => acc + Number(curr.montant), 0);
            return { day: dayStr, total: dayTotal };
        });

        // 5. Recent Reservations (next 5 upcoming)
        const recentReservations = await prisma.reservation.findMany({
            take: 5,
            where: { date_heure: { gte: now } },
            orderBy: { date_heure: "asc" },
            include: { client: true }
        });

        // 6. Top 5 plats by order count
        const topPlatsRaw = await prisma.plat.findMany({
            include: {
                _count: { select: { lignes_cmd: true } }
            },
            orderBy: {
                lignes_cmd: { _count: "desc" }
            },
            take: 5
        });

        const topPlats = topPlatsRaw.map((p: (typeof topPlatsRaw)[number]) => ({
            libelle: p.libelle,
            count: p._count.lignes_cmd
        }));

        // 7. Tonight reservations count
        const tonightReservations = await prisma.reservation.count({
            where: {
                date_heure: { gte: tonightStart, lte: tonightEnd },
                statut: { not: "Annulée" }
            }
        });

        return NextResponse.json({
            revenue: Number(revenue._sum.montant || 0),
            activeOrders: activeOrdersCount,
            occupancy: totalTables > 0 ? Math.round((occupiedTables / totalTables) * 100) : 0,
            occupiedTables,
            totalTables,
            trend,
            recentReservations,
            topPlats,
            tonightReservations
        });
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
