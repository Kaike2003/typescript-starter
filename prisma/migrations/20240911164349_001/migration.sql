-- CreateTable
CREATE TABLE `Usuario` (
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

-- CreateTable
CREATE TABLE `CORTES_CABELOS` (
    `id_corte_cabelo` VARCHAR(191) NOT NULL,
    `nome_corte` VARCHAR(191) NOT NULL,
    `nome_barbeiro` VARCHAR(191) NOT NULL,
    `duracao` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_corte_cabelo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
