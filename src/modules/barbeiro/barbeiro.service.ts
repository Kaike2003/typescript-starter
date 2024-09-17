import { Injectable } from '@nestjs/common';
import { BarbeiroRepository } from './repository/barbeiro.repository';
import { CriarBarbeiroDto } from './dtos/barbeiro.dto';

@Injectable()
export class BarbeiroService {
  constructor(private readonly barbeiroRepository: BarbeiroRepository) {}

  public async criar(data: CriarBarbeiroDto){
    return this.barbeiroRepository.criar(data)
  }

}
