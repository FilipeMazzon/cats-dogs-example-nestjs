import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class DogCreateDto {
  @IsNotEmpty({ message: 'Required field' })
  @IsString({ message: 'Field need be a string' })
  name: string;

  @IsNotEmpty({ message: 'Required field' })
  @IsNumber({}, { message: 'Field need be a number' })
  @IsPositive({ message: 'Field need be positive' })
  age: number;

  @IsNotEmpty({ message: 'Required field' })
  @IsNumber({}, { message: 'Field need be a number' })
  @IsPositive({ message: 'Field need be positive' })
  weight: number;

  @IsNotEmpty({ message: 'Required field' })
  @IsNumber({}, { message: 'Field need be a number' })
  @IsPositive({ message: 'Field need be positive' })
  height: number;

  // get other attributes this way you use in postgres with jsonb type.
  otherAttributes: object;

  // to other attributes you want to put without a type in schemalessDB
  [propName: string]: any;
}
