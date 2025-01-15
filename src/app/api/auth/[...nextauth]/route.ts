// import { handlers } from "../../../../../auth" // Referring to the auth.ts we just created
// export const { GET, POST } = handlers

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {prisma} from '@/lib/prisma'
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
  providers: [
    GoogleProvider({
		clientId: process.env.GOOGLE_CLIENT_ID as string,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
	}),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type:"text", placeholder:"pirulo" },
        password: { label:"Password", type:"password"}
      },
      async authorize(credentials, req) {
        const userFound = await prisma.usuario.findUnique({
          where: {
            correo: credentials?.email
          }
        })

        if (!userFound) throw new Error("user not found")
        
        const matchPassword = credentials?.password === userFound.password

        if (!matchPassword) throw new Error("wrong passpord")
        
        console.log("tipo de dato", typeof userFound.id)

        return {
          id: userFound.id.toString(),
          name: userFound.nombre,
          email: userFound.correo
        }
      }
  })
  ],
  pages: {
    signIn: "/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
