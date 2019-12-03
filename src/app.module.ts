import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config';

import { CatsModule } from './components/cats/cats.module';
import { DogsModule } from './components/dogs/dogs.module';

@Module({
  imports: [
    CatsModule,
    DogsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {
}
