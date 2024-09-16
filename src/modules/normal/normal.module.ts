import { Module } from '@nestjs/common';
import { NormalController } from './normal.controller';
import { NormalService } from './normal.service';

@Module({
  imports: [],
  controllers: [NormalController],
  providers: [NormalService],
  exports: [NormalService],
})
export class NormalModule {}
