/*
  Warnings:

  - You are about to drop the column `nome_barbeiro` on the `cortes_cabelos` table. All the data in the column will be lost.
  - You are about to drop the column `usuariosId_usuario` on the `cortes_cabelos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cortes_cabelos` DROP FOREIGN KEY `cortes_cabelos_usuariosId_usuario_fkey`;

-- AlterTable
ALTER TABLE `cortes_cabelos` DROP COLUMN `nome_barbeiro`,
    DROP COLUMN `usuariosId_usuario`;

-- CreateTable
CREATE TABLE `UsuarioCorteCabelo` (
    `id` VARCHAR(191) NOT NULL,
    `usuariosId_usuario` VARCHAR(191) NOT NULL,
    `cortes_cabelosId_corte_cabelo` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UsuarioCorteCabelo` ADD CONSTRAINT `UsuarioCorteCabelo_usuariosId_usuario_fkey` FOREIGN KEY (`usuariosId_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioCorteCabelo` ADD CONSTRAINT `UsuarioCorteCabelo_cortes_cabelosId_corte_cabelo_fkey` FOREIGN KEY (`cortes_cabelosId_corte_cabelo`) REFERENCES `cortes_cabelos`(`id_corte_cabelo`) ON DELETE RESTRICT ON UPDATE CASCADE;
