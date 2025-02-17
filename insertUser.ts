import { PrismaClient } from '@prisma/client';

// Instancia de Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // Inserta un usuario en la tabla Usuario
    const newUser = await prisma.usuario.create({
      data: {
        nombre: 'Juan',
        correo: 'juan@example.com',
        eventos: {
          create: [
            {
              nombre: 'Evento de Prueba',
              fecha: new Date(),
              sede: 'Sede de Prueba',
              participantes: {
                create: [
                  { nombre: 'Participante 1' },
                  { nombre: 'Participante 2' },
                ],
              },
            },
          ],
        },
      },
    });

    // console.log('Usuario creado:', newUser);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  } finally {
    // Cierra la conexión con la base de datos
    await prisma.$disconnect();
  }
}

main();
