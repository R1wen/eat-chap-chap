import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const plats = await prisma.plat.findMany({
            include: {
                categorie: true
            }
        });
        return NextResponse.json(plats);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { libelle, prix_actuel, disponible, id_categorie } = body;
        const plat = await prisma.plat.create({
            data: {
                libelle,
                prix_actuel,
                disponible: disponible ?? true,
                id_categorie
            }
        });
        return NextResponse.json(plat);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create plat" }, { status: 500 });
    }
}
