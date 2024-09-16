/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `usuario`;

-- CreateTable
CREATE TABLE `usuarios` (
    `id_usuario` VARCHAR(191) NOT NULL,
    `nome_usuario` ENUM('ADMIN', 'BARBEIRO', 'NORMAL') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `ocupado` BOOLEAN NOT NULL DEFAULT false,
    `autenticado` BOOLEAN NOT NULL DEFAULT false,
    `banido` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
