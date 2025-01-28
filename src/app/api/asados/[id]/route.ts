import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id || isNaN(Number(params.id))) {
    return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
  }

  const asadoId = parseInt(params.id, 10);

  try {
    const asado = await prisma.asado.findUnique({
      where: { id: asadoId },
      include: {
        eventos: {
          include: {
            participantes: true,
            gastos: {
              include: {
                tipoGasto: true,
              },
            },
          },
        },
      },
    });

    if (!asado) {
      return NextResponse.json({ message: 'Asado no encontrado' }, { status: 404 });
    }

    const totalGasto = asado.eventos?.reduce((total, evento) => {
      return total + (evento.gastos?.reduce((subTotal, gasto) => subTotal + (gasto.monto || 0), 0) || 0);
    }, 0) || 0;

    const totalParticipantes = asado.eventos?.[0]?.participantes?.length || 0;
    const montoPorParticipante = totalParticipantes > 0 ? totalGasto / totalParticipantes : 0;

    const response = {
      asado: {
        id: asado.id,
        fecha: asado.eventos[0]?.fecha,
      },
      participantes: asado.eventos[0]?.participantes?.map((participante) => ({
        nombre: participante.nombre,
        gastos: asado.eventos[0]?.gastos
          ?.filter((gasto) => gasto.tipoGasto?.nombre)
          ?.map((gasto) => ({
            tipo: gasto.tipoGasto?.nombre,
            monto: gasto.monto,
          })),
        montoDeberiaPagar: montoPorParticipante,
      })),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error en el handler GET de /api/asados/[id]:', error);
    return NextResponse.json({ message: 'Error al consultar el asado', error: 'error.message' }, { status: 500 });
  }
}
