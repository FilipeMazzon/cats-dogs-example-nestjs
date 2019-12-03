import { EntityRepository, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Cats } from '../../entities';
import { CatsCreateDto } from './dto';

@EntityRepository(Cats)
export class CatsRepository extends Repository<Cats> {

  async getCatById(id: string): Promise<Cats> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return found;
  }

  async getCats(filter: object = {}): Promise<Cats[]> {
    return this.find({
      where: filter,
    });
  }

  async createCat(cat: CatsCreateDto): Promise<Cats> {
    return this.create(cat);
  }

  async deleteCatsById(id: string): Promise<object> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cats with ID ${id} not found`);
    }
    return {
      success: true,
    };
  }
}
