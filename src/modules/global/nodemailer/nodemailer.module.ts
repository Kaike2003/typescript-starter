import { Global, Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [NodemailerService],
  exports: [NodemailerService],
})
export class NodemailerModule {}
