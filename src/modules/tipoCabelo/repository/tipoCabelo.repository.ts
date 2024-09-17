import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';
import {
  TipoCabeloAtualizarDto,
  TipoCabeloCriarDto,
} from '../dto/tipoCabelo.dto';

@Injectable()
export class TipoCabeloRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private async existeTipoCabelo(nome: string): Promise<boolean> {
    const res = await this.prismaService.tipoCabelo.findFirst({
      where: {
        nome: nome,
      },
    });

    if (res?.nome === nome) {
      return true;
    }

    return false;
  }

  private async existeTipoCabeloId(id: string): Promise<boolean> {
    const res = await this.prismaService.tipoCabelo.findUnique({
      where: {
        id: id,
      },
    });

    if (res?.id === id) {
      return true;
    }

    return false;
  }

  public async criar(data: TipoCabeloCriarDto) {
    const { nome } = data;
    const nomeTransformado = nome.toLocaleLowerCase();
    const existeCabelo = await this.existeTipoCabelo(nomeTransformado);

    if (existeCabelo === true) {
      throw new HttpException('Tipo de cabelo já foi cadastrado', 400);
    }

    return await this.prismaService.tipoCabelo
      .create({
        data: {
          nome: nomeTransformado,
        },
      })
      .then(() => {
        return 'Tipo de cabelo cadastrado com sucesso';
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }

  public async atualizar(data: TipoCabeloAtualizarDto) {
    const { nome, id } = data;
    const nomeTransformado = nome.toLocaleLowerCase();
    const existeTipoCabeloId = await this.existeTipoCabeloId(id);
    const existeTipoCabelo = await this.existeTipoCabelo(nomeTransformado);

    if (existeTipoCabeloId === false) {
      throw new HttpException('Id inválido', 400);
    }

    if (existeTipoCabelo === true) {
      throw new HttpException('Tipo de cabelo já foi cadastrado', 400);
    }

    return await this.prismaService.tipoCabelo
      .update({
        where: {
          id: id,
        },
        data: {
          nome: nomeTransformado,
        },
      })
      .then(() => {
        return 'Tipo de cabelo atualizado';
      })
      .catch((error) => {
        throw new HttpException(error, 400);
      });
  }

  public async listarTodos() {
    return this.prismaService.tipoCabelo.findMany();
  }

  public async deletar(id: string) {
    const existeTipoCabelo = await this.existeTipoCabeloId(id);

    if (existeTipoCabelo === true) {
      return await this.prismaService.tipoCabelo
        .delete({
          where: {
            id: id,
          },
        })
        .then(() => {
          return 'Tipo de cabelo deletado';
        })
        .catch((error) => {
          throw new HttpException(error, 400);
        });
    }

    throw new HttpException('Id inválido', 400);
  }
}
