import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 1. Total Revenue (Paid orders)
        const revenue = await prisma.paiement.aggregate({
            _sum: { montant: true },
        });

        // 2. Active Orders (Not yet paid)
        const activeOrdersCount = await prisma.commande.count({
            where: {
                paiements: { none: {} }
            }
        });

        // 3. Table Occupancy
        const totalTables = await prisma.table_Restaurant.count();
        const occupiedTables = await prisma.table_Restaurant.count({
            where: {
                commandes: {
                    some: {
                        paiements: { none: {} }
                    }
                }
            }
        });

        // 4. Revenue Trend (Last 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const payments = await prisma.paiement.findMany({
            where: {
                date_paiement: { gte: sevenDaysAgo }
            },
            select: {
                montant: true,
                date_paiement: true
            }
        });

        const trend = Array.from({ length: 7 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (6 - i));
            const dayStr = date.toLocaleDateString('fr-FR', { weekday: 'short' });
            const dayTotal = payments
                .filter((p: (typeof payments)[number]) => new Date(p.date_paiement).toDateString() === date.toDateString())
                .reduce((acc: number, curr: (typeof payments)[number]) => acc + Number(curr.montant), 0);
            return { day: dayStr, total: dayTotal };
        });

        // 5. Recent Reservations
        const recentReservations = await prisma.reservation.findMany({
            take: 5,
            orderBy: { date_heure: 'desc' },
            include: { client: true }
        });

        return NextResponse.json({
            revenue: Number(revenue._sum.montant || 0),
            activeOrders: activeOrdersCount,
            occupancy: totalTables > 0 ? Math.round((occupiedTables / totalTables) * 100) : 0,
            occupiedTables,
            totalTables,
            trend,
            recentReservations
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
