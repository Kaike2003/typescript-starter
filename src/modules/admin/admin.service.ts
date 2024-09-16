import { Injectable } from '@nestjs/common';
import { AdminRepository } from './repository/admin.repository';
import { AutenticarAdminDto, CreateAdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(readonly adminRepository: AdminRepository) {}

  async criar(data: CreateAdminDto) {
    return await this.adminRepository.criar(data);
  }

  async autenticar(data: AutenticarAdminDto) {
    return await this.adminRepository.autenticar(data);
  }

  async listarTodos(){
    return await this.adminRepository.listarTodos()
  }
}
