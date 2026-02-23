import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const commande = await prisma.commande.findUnique({
            where: { id_commande: parseInt(id) },
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
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const { statut_cuisine } = body;

        const commande = await prisma.commande.update({
            where: { id_commande: parseInt(id) },
            data: { statut_cuisine },
        });

        return NextResponse.json(commande);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
    }
}
