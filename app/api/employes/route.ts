import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
    try {
        const employes = await prisma.employe.findMany();
        return NextResponse.json(employes);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nom, prenom, role } = body;
        const employe = await prisma.employe.create({
            data: { nom, prenom, role }
        });
        return NextResponse.json(employe);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create employee" }, { status: 500 });
    }
}
