import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id_commande, montant, methode } = body;

        const paiement = await prisma.paiement.create({
            data: {
                id_commande,
                montant,
                methode,
            },
        });

        return NextResponse.json(paiement);
    } catch (error) {
        console.error("Payment API Error:", error);
        return NextResponse.json({ error: "Failed to process payment" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id_commande = searchParams.get("id_commande");

        if (!id_commande) {
            const paiements = await prisma.paiement.findMany({
                orderBy: { date_paiement: "desc" }
            });
            return NextResponse.json(paiements);
        }

        const paiements = await prisma.paiement.findMany({
            where: { id_commande: parseInt(id_commande) },
            orderBy: { date_paiement: "desc" }
        });

        return NextResponse.json(paiements);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch payments" }, { status: 500 });
    }
}
