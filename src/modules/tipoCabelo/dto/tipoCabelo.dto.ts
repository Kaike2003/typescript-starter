import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class TipoCabeloCriarDto {
  @ApiProperty({
    description: 'nome',
    example: 'Por comprimento',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}

export class TipoCabeloAtualizarDto {
  id: string;

  @ApiProperty({
    description: 'nome',
    example: 'Por estilo',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}
