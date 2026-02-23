import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const plat = await prisma.plat.findUnique({
            where: { id_plat: Number(params.id) },
            include: { categorie: true }
        });
        if (!plat) return NextResponse.json({ error: "Plat not found" }, { status: 404 });
        return NextResponse.json(plat);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const plat = await prisma.plat.update({
            where: { id_plat: Number(params.id) },
            data: body
        });
        return NextResponse.json(plat);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.plat.delete({
            where: { id_plat: Number(params.id) }
        });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
