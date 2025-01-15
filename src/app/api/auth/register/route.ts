import { NextResponse, NextRequest } from "next/server";
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
	try {
		
		const data = await request.json()
	
		const foundUser = await prisma.usuario.findUnique({
			where: {
				correo: data.email
			}
		})
	
		if (foundUser) return NextResponse.json({
			message: "el correo ya está registrado con otro usuario"
		})
	
	const newUser = await prisma.usuario.create({
		data: {
			nombre: data.userName,
			correo: data.email,
			password: data.password
		}
	})
		
		console.log(newUser)
		
		const {password: _, ...user} = newUser
	
		return NextResponse.json(user)
	} catch (error) {
		return NextResponse.json(
			{
			message: error.message
			}, {
				status: 500
			}
		)
	}
	
}