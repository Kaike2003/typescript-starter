import { Module } from '@nestjs/common';
import { NormalController } from './normal.controller';
import { NormalService } from './normal.service';
import { NormalRepository } from './repository/normal.repository';
import { NodemailerService } from '../global/nodemailer/nodemailer.service';
import { PrismaService } from '../global/prisma/prisma.service';
import { CryptoService } from '../global/crypto/crypto.service';
import { BcryptService } from '../global/bcrypt/bcrypt.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [NormalController],
  providers: [
    NormalService,
    NormalRepository,
    NodemailerService,
    PrismaService,
    CryptoService,
    BcryptService,
  ],
  exports: [],
})
export class NormalModule {}
