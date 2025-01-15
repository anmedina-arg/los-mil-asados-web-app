/*
  Warnings:

  - Added the required column `sede` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "sede" VARCHAR(255) NOT NULL;
