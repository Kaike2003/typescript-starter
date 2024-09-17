import { Injectable } from '@nestjs/common';
import { TipoCabeloRepository } from './repository/tipoCabelo.repository';
import {
  TipoCabeloAtualizarDto,
  TipoCabeloCriarDto,
} from './dto/tipoCabelo.dto';

@Injectable()
export class TipoCabeloService {
  constructor(private readonly tipoCabeloRepository: TipoCabeloRepository) {}

  public async criar(data: TipoCabeloCriarDto) {
    return this.tipoCabeloRepository.criar(data);
  }

  public async atualizar(data: TipoCabeloAtualizarDto) {
    return this.tipoCabeloRepository.atualizar(data);
  }

  public async listarTodos() {
    return this.tipoCabeloRepository.listarTodos();
  }

  public async deletar(id: string) {
    return this.tipoCabeloRepository.deletar(id);
  }
}
