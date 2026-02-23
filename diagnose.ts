import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const counts = {
        clients: await prisma.client.count(),
        plats: await prisma.plat.count(),
        tables: await prisma.table_Restaurant.count(),
        staff: await prisma.employe.count(),
        commandes: await prisma.commande.count()
    };
    console.log("DB STATS:", JSON.stringify(counts, null, 2));
}

main().finally(() => prisma.$disconnect());
