import { Module } from '@nestjs/common';
import { BarbeiroController } from './barbeiro.controller';
import { BarbeiroService } from './barbeiro.service';
import { PrismaService } from '../global/prisma/prisma.service';
import { BcryptService } from '../global/bcrypt/bcrypt.service';

import { CryptoService } from '../global/crypto/crypto.service';
import { BarbeiroRepository } from './repository/barbeiro.repository';
import { NodemailerService } from '../global/nodemailer/nodemailer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [BarbeiroController],
  providers: [
    BarbeiroService,
    BarbeiroRepository,
    PrismaService,
    NodemailerService,
    BcryptService,
    CryptoService,
  ],
  exports: [BarbeiroService],
})
export class BarbeiroModule {}
