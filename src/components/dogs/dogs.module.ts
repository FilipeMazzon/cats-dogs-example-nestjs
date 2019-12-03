import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsRepository } from './dogs.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DogsRepository]),
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {
}
