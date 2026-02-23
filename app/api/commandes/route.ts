import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            id_client,
            id_employe,
            id_reservation,
            type_cmd = "Sur place",
            items, // [{ id_plat, quantity, note, price }]
            is_paid = false,
            payment_method = "CARTE"
        } = body;

        // Validate if items exist
        if (!items || items.length === 0) {
            return NextResponse.json({ error: "Aucun article dans la commande" }, { status: 400 });
        }

        // 1. Create the Order
        const commande = await prisma.commande.create({
            data: {
                id_client: id_client ? Number(id_client) : null,
                id_employe: id_employe ? Number(id_employe) : 1, // Default to first employee if not provided
                id_reservation: id_reservation ? Number(id_reservation) : null,
                type_cmd,
                statut_cuisine: "En attente",
                // Connect to table if provided in body or context
                // tables: { connect: { id_table: tableId } }
            }
        });

        // 2. Create Line Items (Contient)
        const lineItems = items.map((item: any) => ({
            id_commande: commande.id_commande,
            id_plat: Number(item.id_plat),
            quantite: Number(item.quantity),
            prix_moment: item.price,
            note_cuisson: item.note || null
        }));

        await prisma.ligne_Commande.createMany({
            data: lineItems
        });

        // 3. Optional Payment
        if (is_paid) {
            const total = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
            await prisma.paiement.create({
                data: {
                    id_commande: commande.id_commande,
                    montant: total,
                    methode: payment_method,
                }
            });
        }

        return NextResponse.json({
            success: true,
            id_commande: commande.id_commande,
            message: "Commande enregistrée avec succès"
        });

    } catch (error) {
        console.error("Order API Error:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const clientId = searchParams.get("clientId");

        const orders = await prisma.commande.findMany({
            where: clientId ? { id_client: parseInt(clientId) } : undefined,
            include: {
                client: true,
                employe: true,
                tables: true,
                lignes: {
                    include: { plat: true }
                },
                paiements: true
            },
            orderBy: { date_creation: 'desc' }
        });
        return NextResponse.json(orders);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
