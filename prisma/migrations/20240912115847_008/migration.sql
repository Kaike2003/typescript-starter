/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `codigo` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_codigo_key` ON `usuarios`(`codigo`);
