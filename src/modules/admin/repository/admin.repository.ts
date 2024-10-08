import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import { AutenticarAdminDto, CreateAdminDto } from '../dto/admin.dto';
import { NodemailerService } from 'src/modules/global/nodemailer/nodemailer.service';
import { CryptoService } from 'src/modules/global/crypto/crypto.service';
import { BcryptService } from 'src/modules/global/bcrypt/bcrypt.service';

@Injectable()
export class AdminRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly nodemailerService: NodemailerService,
    private readonly cryptoService: CryptoService,
    private readonly bcryptService: BcryptService,
  ) {}

  private async existeAdmin(email: string): Promise<boolean> {
    const asAdmin = await this.prismaService.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (asAdmin?.email === email) {
      return true;
    } else {
      return false;
    }
  }

  private async existeCodigo(codigo: string): Promise<boolean> {
    const asAdmin = await this.prismaService.usuario.findUnique({
      where: {
        codigo: codigo,
      },
    });

    if (asAdmin?.codigo === codigo) {
      return true;
    } else {
      return false;
    }
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

  async criar(data: CreateAdminDto) {
    const codigo = await this.cryptoService.gerarString();
    const verificarConta = await this.existeAdmin(data.email);
    const verificarCodigo = await this.existeCodigo(codigo);

    if (verificarConta === true) {
      throw new HttpException('Já existe um utilizador com esse email', 400);
    }

    if (verificarCodigo === true) {
      throw new HttpException('Já existe um utilizador com esse código', 400);
    }

    return await this.prismaService.usuario
      .create({
        data: {
          nome: data.nome,
          email: data.email,
          senha: await this.bcryptService.encriptar(data.senha),
          codigo: codigo,
          tipo: 'ADMIN',
        },
      })
      .then(async () => {
        const res = {
          email: data.email,
          codigo: codigo,
          nome: data.nome,
        };
        await this.nodemailerService.criarConta(res);
        return 'Conta criada com sucesso.';
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }

  async autenticar(data: AutenticarAdminDto) {
    const { codigo } = data;
    const verificarCodigo = await this.existeCodigo(codigo);
    const verificarAutenticado = await this.existeAutenticado(codigo);

    if (verificarCodigo === false) {
      throw new HttpException('Código de autenticação inválido', 400);
    }

    if (verificarAutenticado === true) {
      throw new HttpException('Código de autenticação inválido', 400);
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
        return 'Conta autenticada com sucesso';
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }

  async listarTodos() {
    return await this.prismaService.usuario.findMany({
      where: { tipo: 'ADMIN' },
    });
  }
}
