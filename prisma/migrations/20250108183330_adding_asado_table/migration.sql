/*
  Warnings:

  - You are about to drop the column `fecha` on the `Asado` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Asado` table. All the data in the column will be lost.
  - Added the required column `date` to the `Asado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Asado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asado" DROP COLUMN "fecha",
DROP COLUMN "nombre",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
