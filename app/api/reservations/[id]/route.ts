import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const res = await prisma.reservation.findUnique({
            where: { id_reservation: Number(id) },
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

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const { statut } = body;
        const res = await prisma.reservation.update({
            where: { id_reservation: Number(id) },
            data: { statut }
        });
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
