import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CriarBarbeiroDto {
  @ApiProperty({
    description: "email",
    example: "kaikebartolomeu2003@gmail.com"
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "nome",
    example: "Kaike Gaspar"
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  nome: string;


  @ApiProperty({
    description: "senha",
    example: "1234"
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  senha: string;
}
