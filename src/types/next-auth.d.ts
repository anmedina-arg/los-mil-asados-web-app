import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      role?: string;
    } & DefaultSession['user'];
  }

  interface User {
    role?: string;
    id?: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}
