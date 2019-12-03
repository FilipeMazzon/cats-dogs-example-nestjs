import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsCreateDto } from './dto';
import { Cats } from '../../entities';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get('/')
  async getCats(@Query() filter: object = {}): Promise<Cats[]> {
    return this.catsService.getCats(filter);
  }

  @Get('/:id')
  async getCatsById(@Param('id') id: string): Promise<Cats> {
    return this.catsService.getCatById(id);
  }

  @Post('/')
  async createCats(@Body() catsCreateDto: CatsCreateDto): Promise<Cats> {
    return this.catsService.createCat(catsCreateDto);
  }

  @Delete('/:id')
  async deleteCats(@Param('id') id: string) {
    return this.catsService.deleteCatsById(id);
  }
}
