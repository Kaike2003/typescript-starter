import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BarbeiroModule } from './barbeiro/barbeiro.module';
import { NormalModule } from './normal/normal.module';
import { TipoCabeloModule } from './tipoCabelo/tipoCabelo.module';

export const todosModules = [
  AdminModule,
  NormalModule,
  BarbeiroModule,
  TipoCabeloModule,
  AuthModule,
];
