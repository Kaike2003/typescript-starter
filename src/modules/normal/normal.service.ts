import { Injectable } from '@nestjs/common';
import { NormalRepository } from './repository/normal.repository';
import { AutenticarNormalDto, CriarContaNormalDto } from './dtos/normal.dto';

@Injectable()
export class NormalService {
  constructor(private readonly normalRepository: NormalRepository) {}

  public async criar(data: CriarContaNormalDto) {
    return this.normalRepository.criar(data);
  }

  async autenticar(data: AutenticarNormalDto) {
    return await this.normalRepository.autenticar(data);
  }
}
