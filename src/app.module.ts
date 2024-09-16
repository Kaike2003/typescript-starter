import { Module, ValidationPipe } from '@nestjs/common';
import { todosModulesGlobais } from './modules/global';
import { todosModules } from './modules';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [...todosModules, ...todosModulesGlobais, MorganModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
