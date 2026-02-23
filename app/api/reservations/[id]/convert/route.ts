import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, { params }: { params: { id: string } }) {
    try {
        const resId = Number(params.id);

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
                    connect: reservation.tables.map(t => ({ id_table: t.id_table }))
                }
            }
        });

        // 3. Update reservation status to Honorée
        await prisma.reservation.update({
            where: { id_reservation: resId },
            data: { statut: "Honorée" }
        });

        return NextResponse.json(commande);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
