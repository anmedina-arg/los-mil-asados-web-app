import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { nombre, fecha, sede, usuarioId, asadoId } = await request.json();

    if (!nombre || !fecha || !sede || !usuarioId) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const evento = await prisma.evento.create({
      data: {
        nombre,
        fecha: new Date(fecha),
        sede,
        usuarioId,
        asadoId,
      },
    });

    return NextResponse.json(evento, { status: 201 });
  } catch (error) {
    console.error('Error al crear el evento:', error);
    return NextResponse.json(
      { message: 'Error al crear evento' },
      { status: 500 }
    );
  }
}
