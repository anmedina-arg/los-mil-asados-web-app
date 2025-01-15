-- CreateEnum
CREATE TYPE "Role" AS ENUM ('juanchila', 'user');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "Role" "Role" NOT NULL DEFAULT 'user';
