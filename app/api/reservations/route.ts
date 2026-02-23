import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const res = await prisma.reservation.findMany({
            include: { client: true, tables: true },
            orderBy: { date_heure: 'asc' }
        });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id_client, date_heure, nb_personnes } = body;
        const res = await prisma.reservation.create({
            data: {
                id_client,
                date_heure: new Date(date_heure),
                nb_personnes,
                statut: "En attente"
            }
        });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
