const { PrismaClient } = require("@prisma/client");

async function main() {
    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: "postgresql://postgres.gtouaxevpmcxdmolqhan:VYZYvBG7hSRkwFj4@aws-1-eu-central-1.pooler.supabase.com:6543/postgres"
            }
        }
    });

    try {
        console.log("Testing connection...");
        const count = await prisma.client.count();
        console.log("Connection successful! Client count:", count);
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
