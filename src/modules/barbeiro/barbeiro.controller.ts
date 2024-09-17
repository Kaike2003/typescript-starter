import { Body, Controller, Post } from '@nestjs/common';
import { BarbeiroService } from './barbeiro.service';
import { CriarBarbeiroDto } from './dtos/barbeiro.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';

@ApiBearerAuth()
@ApiTags('Barbeiro')
@Controller()
export class BarbeiroController {
  constructor(private readonly barbeiroService: BarbeiroService) {}

  @Post('admin-barbeiro-criar')
  @ApiDocGenericPost('barbeiro', CriarBarbeiroDto)
  public async criar(@Body() data: CriarBarbeiroDto) {
    return this.barbeiroService.criar(data);
  }
}
