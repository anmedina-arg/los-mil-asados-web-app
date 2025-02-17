import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'pirulo' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.usuario.findUnique({
          where: {
            correo: credentials?.email,
          },
        });

        if (!userFound) throw new Error('user not found');

        const matchPassword = credentials?.password === userFound.password;

        if (!matchPassword) throw new Error('wrong passpord');

        return {
          id: userFound.id.toString(),
          name: userFound.nombre,
          email: userFound.correo,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: any;
      account: any;
      profile?: any;
    }) {
      if (account.provider === 'google') {
        try {
          // Verificar si el usuario ya existe en la base de datos
          const existingUser = await prisma.usuario.findUnique({
            where: { correo: user.email || '' },
          });

          // Si no existe, crearlo en la base de datos
          if (!existingUser) {
            await prisma.usuario.create({
              data: {
                nombre: profile?.name || 'Google User',
                correo: user.email || '',
                Role: 'user',
                image: user.image || '', // Guardar la foto de perfil
              },
            });
          }
        } catch (error) {
          console.error('Error al manejar el registro con Google:', error);
          return false; // Si ocurre un error, evitar que el usuario acceda
        }
      }

      return true; // Permitir el acceso del usuario
    },
    async session({ session, user }: { session: any; user: any }) {
      if (session?.user?.email) {
        const dbUser = await prisma.usuario.findUnique({
          where: { correo: session.user.email },
          select: { Role: true },
        });

        if (dbUser) {
          session.user.role = dbUser.Role; // Agregar el rol a la sesión
        }
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
