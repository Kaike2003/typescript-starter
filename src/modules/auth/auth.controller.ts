import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoLoginAdmin } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from './auth.public';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('admin-login')
  public async adminLogin(@Body() data: AuthDtoLoginAdmin) {
    return this.authService.adminLogin(data.email, data.senha);
  }
}
