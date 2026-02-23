import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const [revenueByCat, topPlats, totalRevenue] = await Promise.all([
            prisma.categorie.findMany({
                include: {
                    plats: {
                        include: {
                            lignes_cmd: true
                        }
                    }
                }
            }),
            prisma.plat.findMany({
                include: {
                    _count: {
                        select: { lignes_cmd: true }
                    }
                },
                orderBy: {
                    lignes_cmd: { _count: "desc" }
                },
                take: 5
            }),
            prisma.paiement.aggregate({
                _sum: { montant: true }
            })
        ]);

        // Simple transformation for operational efficiency
        const stats = {
            totalRevenue: Number(totalRevenue._sum.montant || 0),
            topPlats: topPlats.map(p => ({
                libelle: p.libelle,
                count: p._count.lignes_cmd
            })),
            revenueByCategory: revenueByCat.map(c => ({
                category: c.libelle,
                revenue: c.plats.reduce((acc, p) => acc + p.lignes_cmd.reduce((lAcc, l) => lAcc + Number(l.prix_moment) * l.quantite, 0), 0)
            }))
        };

        return NextResponse.json(stats);
    } catch (error) {
        console.error("Analytics API Error:", error);
        return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
    }
}
