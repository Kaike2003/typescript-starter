/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `usuarios_codigo_key` ON `usuarios`(`codigo`);
