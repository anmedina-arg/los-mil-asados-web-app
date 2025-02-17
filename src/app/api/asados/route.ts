import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Obtener parámetros de la URL (page y limit)
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const offset = (page - 1) * limit;

  // 🔹 1️⃣ Encontrar el próximo asado (el más cercano al jueves siguiente)
  const today = new Date();
  const nextThursday = new Date();

  // Buscar el próximo jueves
  nextThursday.setDate(today.getDate() + ((4 - today.getDay() + 7) % 7 || 7)); // 4 = Jueves

  // Obtener la posición del próximo asado
  const nextAsado = await prisma.asado.findFirst({
    where: { date: { gte: nextThursday } }, // Buscar el asado más cercano al jueves próximo
    orderBy: { date: 'asc' },
  });

  let defaultPage = 1;

  if (nextAsado) {
    const index = await prisma.asado.count({
      where: { date: { lt: nextAsado.date } }, // Contar los asados anteriores
    });

    defaultPage = Math.floor(index / limit) + 1; // Calcular en qué página está el próximo asado
  }

  // 🔹 2️⃣ Obtener asados paginados y el total de registros
  const [asados, total] = await prisma.$transaction([
    prisma.asado.findMany({
      skip: offset,
      take: limit,
      orderBy: { date: 'asc' },
    }),
    prisma.asado.count(),
  ]);

  // 🔹 3️⃣ Responder con JSON incluyendo la página sugerida
  return NextResponse.json({
    data: asados,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    defaultPage, // Enviar la página en la que se encuentra el próximo asado
  });
}
