import { NextResponse } from "next/server";
import prisma from "@/lib/db";

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
        const table = await prisma.table_Restaurant.create({
            data: { numero, capacite, zone }
        });
        return NextResponse.json(table);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create table" }, { status: 500 });
    }
}
