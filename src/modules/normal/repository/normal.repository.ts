import { HttpException, Injectable } from '@nestjs/common';
import { BcryptService } from 'src/modules/global/bcrypt/bcrypt.service';
import { CryptoService } from 'src/modules/global/crypto/crypto.service';
import { NodemailerService } from 'src/modules/global/nodemailer/nodemailer.service';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { AutenticarNormalDto, CriarContaNormalDto } from '../dtos/normal.dto';
import { Resumo } from 'src/util/data';

@Injectable()
export class NormalRepository {
  constructor(
    private readonly nodeMailerService: NodemailerService,
    private readonly prismaService: PrismaService,
    private readonly bcryptService: BcryptService,
    private readonly cryptoService: CryptoService,
  ) {}

  private async existeCodigo(codigo: string) {
    const res = await this.prismaService.usuario.findUnique({
      where: {
        codigo: codigo,
      },
    });

    if (res?.codigo === codigo) {
      return true;
    }

    return false;
  }

  private async existeEmail(email: string) {
    const res = await this.prismaService.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (res?.email === email) {
      return true;
    }

    return false;
  }

  private async existeAutenticado(codigo: string): Promise<boolean> {
    const asAdmin = await this.prismaService.usuario.findUnique({
      where: {
        codigo: codigo,
      },
    });

    if (asAdmin?.autenticado === true) {
      return true;
    }

    return false;
  }

  public async criar(data: CriarContaNormalDto) {
    const { email, nome } = data;
    const codigo = await this.cryptoService.gerarString();
    const existeCodigo = await this.existeCodigo(codigo);
    const existeEmail = await this.existeEmail(email);

    if (existeCodigo === true) {
      throw new HttpException(
        Resumo.codigo.error.mensagem,
        Resumo.codigo.error.status,
      );
    }

    if (existeEmail === true) {
      throw new HttpException(
        Resumo.conta.criar.email.error.mensagem,
        Resumo.conta.criar.email.error.status,
      );
    }

    return await this.prismaService.usuario
      .create({
        data: {
          email: data.email,
          nome: nome.toLocaleLowerCase(),
          codigo: codigo,
          senha: await this.bcryptService.encriptar(data.senha),
          tipo: 'NORMAL',
        },
      })
      .then(async (sucesso) => {
        const res = {
          email: data.email,
          nome: data.nome,
          codigo: sucesso.codigo,
        };
        await this.nodeMailerService.criarConta(res);
        return Resumo.conta.criar.email.sucesso;
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }

  async autenticar(data: AutenticarNormalDto) {
    const { codigo } = data;
    const verificarCodigo = await this.existeCodigo(codigo);
    const verificarAutenticado = await this.existeAutenticado(codigo);

    if (verificarCodigo === false) {
      throw new HttpException(
        Resumo.codigo.error.mensagem,
        Resumo.codigo.error.status,
      );
    }

    if (verificarAutenticado === true) {
      throw new HttpException(
        Resumo.codigo.error.mensagem,
        Resumo.codigo.error.status,
      );
    }

    return await this.prismaService.usuario
      .update({
        where: {
          codigo: codigo,
        },
        data: {
          autenticado: true,
        },
      })
      .then(async () => {
        return Resumo.conta.autenticar.sucesso;
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }
}
