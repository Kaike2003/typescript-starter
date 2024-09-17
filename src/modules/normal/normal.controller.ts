import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AutenticarNormalDto, CriarContaNormalDto } from './dtos/normal.dto';
import { NormalService } from './normal.service';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';
import { Public } from '../auth/auth.public';
import { ApiDocGenericPatch } from 'src/app/common/api-doc-generic-patch.decorator';

@ApiBearerAuth()
@ApiTags('Normal')
@Controller()
export class NormalController {
  constructor(private readonly normalService: NormalService) {}

  @Public()
  @Post()
  @ApiDocGenericPost('normal-criar', CriarContaNormalDto)
  public async criar(@Body() data: CriarContaNormalDto) {
    return this.normalService.criar(data);
  }

  @Public()
  @Patch('normal-autenticar')
  @ApiDocGenericPatch('autenticar', AutenticarNormalDto)
  async autenticar(@Body() data: AutenticarNormalDto) {
    return this.normalService.autenticar(data);
  }
}
