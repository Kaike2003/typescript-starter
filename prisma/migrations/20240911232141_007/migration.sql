/*
  Warnings:

  - You are about to drop the column `codigo` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `usuarios_codigo_key` ON `usuarios`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `codigo`;
