import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  public async gerarString() {
    const numero = Math.floor(Math.random() * 1000000);
    return numero.toString().padStart(6, '0');
  }
}
