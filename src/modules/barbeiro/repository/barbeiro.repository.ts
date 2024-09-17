import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { CriarBarbeiroDto } from '../dtos/barbeiro.dto';
import { BcryptService } from 'src/modules/global/bcrypt/bcrypt.service';
import { NodemailerService } from 'src/modules/global/nodemailer/nodemailer.service';
import { CryptoService } from 'src/modules/global/crypto/crypto.service';

@Injectable()
export class BarbeiroRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly bcryptService: BcryptService,
    private readonly nodeMailerService: NodemailerService,
    private readonly cryptoService: CryptoService,
  ) {}

  private async existeEmail(email: string) {
    const asBarbeiro = await this.prismaService.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (asBarbeiro?.email === email) {
      return true;
    }

    return false;
  }

  private async existeCodigo(codigo: string) {
    const asBarbeiro = await this.prismaService.usuario.findUnique({
      where: {
        codigo: codigo,
      },
    });

    if (asBarbeiro?.codigo === codigo) {
      return true;
    }

    return false;
  }

  public async criar(data: CriarBarbeiroDto) {
    const codigo = await this.cryptoService.gerarString();
    const existeEmail = await this.existeEmail(data.email);
    const existeCodigo = await this.existeCodigo(codigo);

    if (existeEmail === true) {
      throw new HttpException('Esse email já está sendo usado', 400);
    }

    if (existeCodigo === true) {
      throw new HttpException('Código de autenticacao inválido', 400);
    }

    return await this.prismaService.usuario
      .create({
        data: {
          nome: data.nome,
          email: data.email,
          tipo: 'BARBEIRO',
          senha: await this.bcryptService.encriptar(data.senha),
          codigo: codigo,
          autenticado: true,
        },
      })
      .then(async (sucesso) => {
        const res = {
          email: sucesso.email,
          senha: data.senha,
          nome: sucesso.nome,
        };
        await this.nodeMailerService.criarContaBarbeiro(res);
        return 'Conta criada com sucesso';
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }
}
