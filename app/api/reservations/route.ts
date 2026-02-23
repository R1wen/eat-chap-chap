import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const clientId = searchParams.get("clientId");

        const res = await prisma.reservation.findMany({
            where: clientId ? { id_client: parseInt(clientId) } : undefined,
            include: { client: true, tables: true },
            orderBy: { date_heure: 'asc' }
        });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
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
    }
}
