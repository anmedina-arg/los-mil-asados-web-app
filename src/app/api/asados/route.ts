import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const allAsados = await prisma.asado.findMany(); // Traer todos los asados
  return NextResponse.json(allAsados);
}