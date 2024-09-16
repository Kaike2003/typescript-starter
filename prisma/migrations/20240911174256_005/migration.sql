/*
  Warnings:

  - You are about to alter the column `nome_usuario` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `tipo_usuario` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `tipo_usuario` ENUM('ADMIN', 'BARBEIRO', 'NORMAL') NOT NULL,
    MODIFY `nome_usuario` VARCHAR(191) NOT NULL;
