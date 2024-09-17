import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { addSwagger } from './app/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bufferLogs: true
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  addSwagger(app);
  await app.listen(3000);
}
bootstrap();
