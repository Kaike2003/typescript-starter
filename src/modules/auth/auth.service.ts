import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const usuario = await this.prismaService.usuarios.findUnique({
      where: { email: email },
    });
    const verificar = await this.bcyprtService.comparar(
      senhaAtual,
      usuario.senha,
    );

    if (verificar === false || usuario.tipo_usuario !== 'ADMIN') {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuario.id_usuario, nome: usuario.nome_usuario };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
