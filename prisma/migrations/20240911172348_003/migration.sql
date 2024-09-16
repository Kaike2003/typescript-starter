/*
  Warnings:

  - Added the required column `marcacao` to the `cortes_cabelos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuariosId_usuario` to the `cortes_cabelos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cortes_cabelos` ADD COLUMN `marcacao` DATETIME(3) NOT NULL,
    ADD COLUMN `usuariosId_usuario` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `cortes_cabelos` ADD CONSTRAINT `cortes_cabelos_usuariosId_usuario_fkey` FOREIGN KEY (`usuariosId_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
