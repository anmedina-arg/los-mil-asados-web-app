import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Ruta al archivo donde defines authOptions

export async function GET() {
  try {
    // Obtener la sesión actual
    const session = await getServerSession(authOptions);

    // Verificar si hay una sesión activa
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "No estás autenticado" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    // Buscar el usuario en la base de datos por email
    const usuario = await prisma.usuario.findUnique({
      where: { correo: email },
    });

    // Verificar si el usuario existe
    if (!usuario) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    // Devolver los datos del usuario
    return NextResponse.json(usuario);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener el usuario" },
      { status: 500 }
    );
  }
}
