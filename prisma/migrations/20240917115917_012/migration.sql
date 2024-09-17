/*
  Warnings:

  - You are about to drop the column `cortes_cabelosId_corte_cabelo` on the `usuariocortecabelo` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `usuariocortecabelo` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `usuariocortecabelo` table. All the data in the column will be lost.
  - You are about to drop the column `usuariosId_usuario` on the `usuariocortecabelo` table. All the data in the column will be lost.
  - You are about to drop the `cortes_cabelos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `corteCabeloId` to the `UsuarioCorteCabelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `UsuarioCorteCabelo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuariocortecabelo` DROP FOREIGN KEY `UsuarioCorteCabelo_cortes_cabelosId_corte_cabelo_fkey`;

-- DropForeignKey
ALTER TABLE `usuariocortecabelo` DROP FOREIGN KEY `UsuarioCorteCabelo_usuariosId_usuario_fkey`;

-- AlterTable
ALTER TABLE `usuariocortecabelo` DROP COLUMN `cortes_cabelosId_corte_cabelo`,
    DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `usuariosId_usuario`,
    ADD COLUMN `corteCabeloId` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `cortes_cabelos`;

-- DropTable
DROP TABLE `usuarios`;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `tipo` ENUM('ADMIN', 'BARBEIRO', 'NORMAL') NOT NULL,
    `ocupado` BOOLEAN NOT NULL DEFAULT false,
    `autenticado` BOOLEAN NOT NULL DEFAULT false,
    `banido` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    UNIQUE INDEX `usuario_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cortedecabelo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `tipoCabeloId` VARCHAR(191) NOT NULL,
    `marcacaoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipodecabelo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marcacao` (
    `id` VARCHAR(191) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cortedecabelo` ADD CONSTRAINT `cortedecabelo_tipoCabeloId_fkey` FOREIGN KEY (`tipoCabeloId`) REFERENCES `tipodecabelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cortedecabelo` ADD CONSTRAINT `cortedecabelo_marcacaoId_fkey` FOREIGN KEY (`marcacaoId`) REFERENCES `Marcacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioCorteCabelo` ADD CONSTRAINT `UsuarioCorteCabelo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioCorteCabelo` ADD CONSTRAINT `UsuarioCorteCabelo_corteCabeloId_fkey` FOREIGN KEY (`corteCabeloId`) REFERENCES `cortedecabelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
