import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CriarContaNormalDto {
  @ApiProperty({
    description: 'nome',
    example: 'Rosinaldo Bartolomeu',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  nome: string;

  @ApiProperty({
    description: 'senha',
    example: '1234',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  senha: string;

  @ApiProperty({
    description: 'email',
    example: 'rosinaldoBartolomeu12@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}


export class AutenticarNormalDto {
  @ApiProperty({
    description: "codigo",
    example: "123456"
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  codigo: string;
}
