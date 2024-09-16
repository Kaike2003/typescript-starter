import { Injectable } from '@nestjs/common';
const bcrypt = require("bcrypt");

@Injectable()
export class BcryptService {
  private saltRounds: number = 10;

  async encriptar(senha: string): Promise<string> {
    const res = bcrypt.hashSync(senha, this.saltRounds);
    return res;
  }

  async comparar(
    senhaAtual: string,
    senhaBancoDados: string,
  ): Promise<boolean> {
    const res: boolean = bcrypt.compareSync(senhaAtual, senhaBancoDados);

    if (res === true) {
      return true;
    }

    return false;
  }
}
