import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const tables = await prisma.table_Restaurant.findMany({
            include: {
                reservations: {
                    where: { statut: "En attente" }
                },
                commandes: {
                    where: {
                        NOT: {
                            paiements: {
                                some: {}
                            }
                        }
                    }
                }
            }
        });
        return NextResponse.json(tables);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch tables" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { numero, capacite, zone } = body;

        if (!numero || isNaN(Number(numero))) {
            return NextResponse.json({ error: "Numéro de table invalide" }, { status: 400 });
        }

        // Check for duplicate numero
        const existing = await prisma.table_Restaurant.findUnique({
            where: { numero: Number(numero) }
        });
        if (existing) {
            return NextResponse.json({ error: `La table n°${numero} existe déjà` }, { status: 409 });
        }

        const table = await prisma.table_Restaurant.create({
            data: {
                numero: Number(numero),
                capacite: Number(capacite) || 2,
                zone: zone || "Salle Centrale"
            }
        });
        return NextResponse.json(table);
    } catch (error) {
        console.error("POST /api/tables error:", error);
        return NextResponse.json({ error: "Échec de la création de la table" }, { status: 500 });
    }
}
