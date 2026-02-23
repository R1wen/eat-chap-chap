import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  const url = process.env.DATABASE_URL ||
    "postgresql://postgres.gtouaxevpmcxdmolqhan:VYZYvBG7hSRkwFj4@aws-1-eu-central-1.pooler.supabase.com:5432/postgres?sslmode=require";

  return new PrismaClient({
    datasources: {
      db: {
        url,
      },
    },
  });
}

const prisma = globalThis.prisma ?? createPrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
