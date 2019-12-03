import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from '../../entities';
import { CatsCreateDto } from './dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatsRepository)
    private catsRepository: CatsRepository,
  ) {
  }

  async getCatById(id: string): Promise<Cats> {
    return this.catsRepository.getCatById(id);
  }

  async getCats(filter: any): Promise<Cats[]> {
    return this.catsRepository.getCats(filter);
  }

  async createCat(catsCreateDto: CatsCreateDto): Promise<Cats> {
    return this.catsRepository.createCat(catsCreateDto);
  }

  async deleteCatsById(id: string): Promise<object> {
    return this.catsRepository.deleteCatsById(id);
  }
}
