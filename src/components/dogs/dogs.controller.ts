import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogCreateDto } from './dto';
import { Dogs } from '../../entities';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {
  }

  @Get('/')
  async getCats(@Query() filter: object = {}): Promise<Dogs[]> {
    return this.dogsService.getDogs(filter);
  }

  @Get('/:id')
  async getCatsById(@Param('id') id: string): Promise<Dogs> {
    return this.dogsService.getDogById(id);
  }

  @Post('/')
  async createCats(@Body() dog: DogCreateDto): Promise<Dogs> {
    return this.dogsService.createDog(dog);
  }

  @Delete('/:id')
  async deleteCats(@Param('id') id: string) {
    return this.dogsService.deleteDogsById(id);
  }
}
