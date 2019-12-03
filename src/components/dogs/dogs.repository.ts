import { EntityRepository, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Dogs } from '../../entities';
import { DogCreateDto } from './dto';

@EntityRepository(Dogs)
export class DogsRepository extends Repository<Dogs> {

  async getDogsById(id: string): Promise<Dogs> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return found;
  }

  async getDogs(filter: object = {}): Promise<Dogs[]> {
    return this.find({
      where: filter,
    });
  }

  async createDog(dogCreateDto: DogCreateDto): Promise<Dogs> {
    return this.create(dogCreateDto);
  }

  async deleteDogsById(id: string): Promise<object> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cats with ID ${id} not found`);
    }
    return {
      success: true,
    };
  }
}
