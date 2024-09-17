import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    description: "nome",
    example: "Kaike Bartolomeu"
  })
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: "email",
    example: "kaikebartolomeu2003@gmail.com"
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "senha",
    example: "1234"
  })
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  senha: string
}

export class AutenticarAdminDto {
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
