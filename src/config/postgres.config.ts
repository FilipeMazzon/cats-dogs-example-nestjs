import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntityList } from '../entities/entitiesList';

const host = process.env.PG_HOST || 'localhost';
const port = parseInt(process.env.PG_PORT, 10) || 5432;
const username = process.env.PG_USERNAME || 'postgres';
const password = process.env.PG_PASSWORD || 'postgres';
const database = process.env.PG_DATABASE || 'catsExample';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: EntityList,
  logging: process.env.LOGGING === 'true',
};
