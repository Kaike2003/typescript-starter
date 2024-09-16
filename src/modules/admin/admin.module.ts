import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from './repository/admin.repository';
import { NodemailerService } from '../global/nodemailer/nodemailer.service';
import { ConfigModule } from '@nestjs/config';
import { CryptoService } from '../global/crypto/crypto.service';
import { BcryptService } from '../global/bcrypt/bcrypt.service';

@Module({
  imports: [ConfigModule],
  controllers: [AdminController],
  providers: [
    AdminService,
    AdminRepository,
    NodemailerService,
    CryptoService,
    BcryptService,
  ],
  exports: [AdminService],
})
export class AdminModule {}
