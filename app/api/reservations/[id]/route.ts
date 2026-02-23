import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const res = await prisma.reservation.findUnique({
            where: { id_reservation: Number(params.id) },
            include: { client: true, tables: true }
        });
        if (!res) return NextResponse.json({ error: "Reservation not found" }, { status: 404 });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { statut } = body;
        const res = await prisma.reservation.update({
            where: { id_reservation: Number(params.id) },
            data: { statut }
        });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
