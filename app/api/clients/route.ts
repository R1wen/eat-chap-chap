import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const clients = await prisma.client.findMany({
            include: {
                _count: {
                    select: { reservations: true, commandes: true }
                }
            }
        });
        return NextResponse.json(clients);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nom, telephone, email } = body;
        const client = await prisma.client.create({
            data: { nom, telephone, email }
        });
        return NextResponse.json(client);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
    }
}
