import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUserFromDb } from './app/lib/data';
import { users } from '@prisma/client';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<users|null> {
    try {
      const user = await getUserFromDb(email);
      return user;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (user){
                const passwordsMatch = await bcrypt.compare(password, user.pass);
                // Creo tipo nextUser porque es el tipo que devuelve esta función
                const nextUser:User={email: user.email, name: user.user}
                if (passwordsMatch) return nextUser;
            }
 
            if (!user) return null;
          }
   
          return null;
      },
    }),
  ],
});