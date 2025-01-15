-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "asadoId" INTEGER;

-- CreateTable
CREATE TABLE "Asado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Asado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_asadoId_fkey" FOREIGN KEY ("asadoId") REFERENCES "Asado"("id") ON DELETE SET NULL ON UPDATE CASCADE;
