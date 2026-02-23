import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const resId = Number(id);

        // 1. Fetch reservation with tables
        const reservation = await prisma.reservation.findUnique({
            where: { id_reservation: resId },
            include: { tables: true }
        });

        if (!reservation) {
            return NextResponse.json({ error: "Reservation not found" }, { status: 404 });
        }

        // 2. Create the Order (Commande)
        // We use the first table assigned to the reservation, or none if not assigned
        const commande = await prisma.commande.create({
            data: {
                id_reservation: resId,
                id_client: reservation.id_client,
                id_employe: 1, // Defaulting to Admin/Manager for now
                type_cmd: "Sur place",
                statut_cuisine: "En attente",
                tables: {
                    connect: reservation.tables.map((t: (typeof reservation.tables)[number]) => ({ id_table: t.id_table }))
                }
            }
        });

        // 3. Update reservation status to Honorée
        await prisma.reservation.update({
            where: { id_reservation: resId },
            data: { statut: "Honorée" }
        });

        return NextResponse.json(commande);
    } catch (error) {
        console.error("Conversion Error:", error);
        return NextResponse.json({ error: "Failed to convert reservation" }, { status: 500 });
    }
}
