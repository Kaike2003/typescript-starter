import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from '../global/prisma/prisma.service';
import { BcryptService } from '../global/bcrypt/bcrypt.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
