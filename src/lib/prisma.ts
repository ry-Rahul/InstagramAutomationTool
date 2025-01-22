import { PrismaClient } from '@prisma/client';

declare global {
    var prisma : PrismaClient | undefined;
}

export const client = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;


// what is prisma client
// Prisma Client is an auto-generated and type-safe query builder that's tailored to your database schema. It's an alternative to traditional ORMs and SQL query builders. Prisma Client is used to access your database in your application code.