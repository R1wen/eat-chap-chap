import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

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
        console.log("POST /api/clients - Body:", body);
        const { nom, telephone, email } = body;
        const client = await prisma.client.create({
            data: { nom, telephone, email }
        });
        console.log("POST /api/clients - Created:", client);
        return NextResponse.json(client);
    } catch (error: any) {
        console.error("POST /api/clients - Error:", error);
        return NextResponse.json({ error: "Failed to create client", details: error.message }, { status: 500 });
    }
}
