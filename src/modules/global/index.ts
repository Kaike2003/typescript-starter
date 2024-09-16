import { ConfigModule } from '@nestjs/config';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { PrismaModule } from './prisma/prisma.module';
import { CryptoModule } from './crypto/crypto.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

export const todosModulesGlobais = [
  PrismaModule,
  NodemailerModule,
  CryptoModule,
  BcryptModule,
  ConfigModule.forRoot(),
];
