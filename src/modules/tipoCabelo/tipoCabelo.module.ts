import { Module } from '@nestjs/common';
import { TipoCabeloController } from './tipoCabelo.controller';
import { TipoCabeloService } from './tipoCabelo.service';
import { TipoCabeloRepository } from './repository/tipoCabelo.repository';
import { PrismaService } from '../global/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TipoCabeloController],
  providers: [TipoCabeloService, TipoCabeloRepository, PrismaService],
  exports: [],
})
export class TipoCabeloModule {}
