import { Body, Controller, Post } from '@nestjs/common';
import { AuthDtoLoginAdmin } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from './auth.public';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Login')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('admin-login')
  public async adminLogin(@Body() data: AuthDtoLoginAdmin) {
    return this.authService.adminLogin(data.email, data.senha);
  }

  @Public()
  @Post('barbeiro-login')
  public async barbeiroLogin(@Body() data: AuthDtoLoginAdmin) {
    return this.authService.barbeiroLogin(data.email, data.senha);
  }
}
