import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';
import {
  TipoCabeloAtualizarDto,
  TipoCabeloCriarDto,
} from './dto/tipoCabelo.dto';
import { Public } from '../auth/auth.public';
import { TipoCabeloService } from './tipoCabelo.service';
import { ApiDocGenericGetAll } from 'src/app/common/api-doc-generic-get-all.decorator';
import { ApiDocGenericDelete } from 'src/app/common/api-doc-generic-delete.decorator';
import { ApiDocGenericPatch } from 'src/app/common/api-doc-generic-patch.decorator';

@ApiBearerAuth()
@ApiTags('Tipo de cabelo')
@Controller()
export class TipoCabeloController {
  constructor(private readonly tipoCabeloService: TipoCabeloService) {}

  @Post('admin-tipo-cabelo')
  @ApiDocGenericPost('tipo de cabelo', TipoCabeloCriarDto)
  public async criar(@Body() data: TipoCabeloCriarDto) {
    return this.tipoCabeloService.criar(data);
  }

  @Patch('admin-tipo-cabelo/:id')
  @ApiDocGenericPatch('tipo de cabelo', TipoCabeloAtualizarDto)
  public async atualizar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() { nome }: TipoCabeloAtualizarDto,
  ) {
    const data = { id, nome };
    return this.tipoCabeloService.atualizar(data);
  }

  @Get()
  @ApiDocGenericGetAll('tipo de cabelo', '')
  public async listarTodos() {
    return this.tipoCabeloService.listarTodos();
  }

  @Delete('admin-tipo-cabelo/:id')
  @ApiDocGenericDelete('tipo de cabelo')
  public async deletar(@Param('id', ParseUUIDPipe) id: string) {
    return this.tipoCabeloService.deletar(id);
  }
}
