import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogsRepository } from './dogs.repository';
import { Dogs } from '../../entities';
import { DogCreateDto } from './dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(DogsRepository)
    private dogsRepository: DogsRepository,
  ) {
  }

  async getDogById(id: string): Promise<Dogs> {
    return this.dogsRepository.getDogsById(id);
  }

  async getDogs(filter: any): Promise<Dogs[]> {
    return this.dogsRepository.getDogs(filter);
  }

  async createDog(catsCreateDto: DogCreateDto): Promise<Dogs> {
    return this.dogsRepository.createDog(catsCreateDto);
  }

  async deleteDogsById(id: string): Promise<object> {
    return this.dogsRepository.deleteDogsById(id);
  }
}
