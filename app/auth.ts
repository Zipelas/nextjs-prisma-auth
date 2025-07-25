import { db } from '@/prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';


export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql', // or "mysql", "postgresql", ...etc
  }),
  socialProviders: { 
      github: { 
         clientId: process.env.GITHUB_CLIENT_ID as string, 
         clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
      }
  }
});
