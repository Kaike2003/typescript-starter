import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  @IsNotEmpty()
  nome_usuario: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(4)
  senha: string
}

export class AutenticarAdminDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  codigo: string;
}
