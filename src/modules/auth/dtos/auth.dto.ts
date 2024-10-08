import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDtoLoginAdmin {
  @ApiProperty({
    description: "email",
    example: "kaikebartolomeu2003@gmail.com"
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

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
