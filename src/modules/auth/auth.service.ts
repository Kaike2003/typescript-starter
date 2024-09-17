import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../global/prisma/prisma.service';
import { BcryptService } from '../global/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly bcyprtService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async adminLogin(
    email: string,
    senhaAtual: string,
  ): Promise<{ access_token: string }> {
    const usuario = await this.prismaService.usuario.findUnique({
      where: { email: email },
    });

    if (usuario === null) {
      throw new HttpException('Email ou senha incorrectos', 400);
    }

    const verificar = await this.bcyprtService.comparar(
      senhaAtual,
      usuario.senha,
    );

    if (verificar === false || usuario.tipo !== 'ADMIN') {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id, nome: usuario.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async barbeiroLogin(
    email: string,
    senhaAtual: string,
  ): Promise<{ access_token: string }> {
    const usuario = await this.prismaService.usuario.findUnique({
      where: { email: email },
    });

    if (usuario === null) {
      throw new HttpException('Email ou senha incorrectos', 400);
    }

    const verificar = await this.bcyprtService.comparar(
      senhaAtual,
      usuario?.senha,
    );

    if (verificar === false || usuario.tipo !== 'BARBEIRO') {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id, nome: usuario.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
