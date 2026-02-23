import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const commande = await prisma.commande.findUnique({
            where: { id_commande: parseInt(params.id) },
            include: {
                lignes: { include: { plat: true } },
                tables: true,
                paiements: true,
                client: true,
                employe: true,
            },
        });
        return NextResponse.json(commande);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const { statut_cuisine } = body;

        const commande = await prisma.commande.update({
            where: { id_commande: parseInt(params.id) },
            data: { statut_cuisine },
        });

        return NextResponse.json(commande);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
    }
}
