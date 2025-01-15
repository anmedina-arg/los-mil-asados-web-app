import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const usuarios = await prisma.usuario.findMany(); // Traer todos los usuarios
  return NextResponse.json(usuarios);
}