import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AutenticarAdminDto, CreateAdminDto } from './dto/admin.dto';
import { Public } from '../auth/auth.public';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';
import { ApiDocGenericPatch } from 'src/app/common/api-doc-generic-patch.decorator';
import { ApiDocGenericGetAll } from 'src/app/common/api-doc-generic-get-all.decorator';

@ApiBearerAuth()
@ApiTags('Administrador')
@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Public()
  @Post('admin-criar')
  @ApiDocGenericPost('admin', CreateAdminDto)
  async criar(@Body() data: CreateAdminDto) {
    return this.adminService.criar(data);
  }

  @Public()
  @Patch('admin-autenticar')
  @ApiDocGenericPatch('autenticar', AutenticarAdminDto)
  async autenticar(@Body() data: AutenticarAdminDto) {
    return this.adminService.autenticar(data);
  }

  @Get('admin-listar-todos')
  @ApiDocGenericGetAll('admin', '')
  async listarTodos() {
    return this.adminService.listarTodos();
  }
}
