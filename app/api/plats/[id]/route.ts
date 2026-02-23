import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const plat = await prisma.plat.findUnique({
            where: { id_plat: Number(id) },
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

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await request.json();
        const plat = await prisma.plat.update({
            where: { id_plat: Number(id) },
            data: body
        });
        return NextResponse.json(plat);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        await prisma.plat.delete({
            where: { id_plat: Number(id) }
        });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
