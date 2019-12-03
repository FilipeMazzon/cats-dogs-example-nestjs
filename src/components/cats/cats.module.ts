import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsRepository } from './cats.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CatsRepository]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
}
