// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'; // Asegúrate de tener correctamente configurado el prisma

// // Ruta GET para obtener detalles de un asado específico
// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   const asadoId = parseInt(params.id); // Obtener el id del asado desde los parámetros de la URL

//   try {
//     // Consultar los datos del asado, incluyendo la fecha, los participantes, los gastos y los detalles de cada gasto
//     const asado = await prisma.asado.findUnique({
//       where: { id: asadoId },
//       include: {
//         eventos: {
//           include: {
//             participantes: true,
//             gastos: {
//               include: {
//                 tipoGasto: true, // Traemos los tipos de gasto (carne, pan, bebidas)
//               },
//             },
//           },
//         },
//       },
//     });

//     if (!asado) {
//       return NextResponse.json({ message: 'Asado no encontrado' }, { status: 404 });
//     }

//     // Calcular el monto total y dividir entre los participantes
//     const totalGasto = asado.eventos.reduce((total, evento) => {
//       return total + evento.gastos.reduce((subTotal, gasto) => subTotal + gasto.monto, 0);
//     }, 0);

//     const totalParticipantes = asado.eventos[0]?.participantes.length || 0;
//     const montoPorParticipante = totalParticipantes > 0 ? totalGasto / totalParticipantes : 0;

//     // Crear la respuesta con los detalles que necesitas
//     const response = {
//       asado: {
//         id: asado.id,
//         fecha: asado.eventos[0]?.fecha,
//       },
//       participantes: asado.eventos[0]?.participantes.map((participante: any) => ({
//         nombre: participante.nombre,
//         gastos: asado.eventos[0]?.gastos.filter((gasto: any) => gasto.tipoGasto.nombre).map((gasto: any) => ({
//           tipo: gasto.tipoGasto.nombre,
//           monto: gasto.monto,
//         })),
//         montoDeberiaPagar: montoPorParticipante,
//       })),
//     };

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: 'Error al consultar el asado' }, { status: 500 });
//   }
// }
