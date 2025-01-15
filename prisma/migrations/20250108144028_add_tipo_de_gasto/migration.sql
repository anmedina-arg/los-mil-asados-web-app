/*
  Warnings:

  - You are about to drop the column `usuarioid` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `eventoid` on the `Participante` table. All the data in the column will be lost.
  - You are about to drop the column `apellido` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventoId` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "fk_usuario";

-- DropForeignKey
ALTER TABLE "Participante" DROP CONSTRAINT "fk_evento";

-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "usuarioid",
ADD COLUMN     "usuarioId" INTEGER NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "fecha" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "sede" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Participante" DROP COLUMN "eventoid",
ADD COLUMN     "eventoId" INTEGER NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "apellido",
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "correo" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Gasto" (
    "id" SERIAL NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipoGastoId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,

    CONSTRAINT "Gasto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoGasto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoGasto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_tipoGastoId_fkey" FOREIGN KEY ("tipoGastoId") REFERENCES "TipoGasto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
