import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AutenticarAdminDto, CreateAdminDto } from './dto/admin.dto';
import { Public } from '../auth/auth.public';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post('admin-criar')
  async criar(@Body() data: CreateAdminDto) {
    return this.adminService.criar(data);
  }

  @Public()
  @Get('admin-autenticar')
  async autenticar(@Body() data: AutenticarAdminDto) {
    return this.adminService.autenticar(data);
  }

  @Get('admin-listar-todos')
  async listarTodos() {
    return this.adminService.listarTodos();
  }
}
