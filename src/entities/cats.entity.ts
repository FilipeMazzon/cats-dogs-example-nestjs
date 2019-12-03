import { BaseEntity, Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Check('age>=0')
  age: number;

  @Column()
  @Check('weight>=0')
  weight: number;

  @Column({ name: 'other_attributes', type: 'jsonb' })
  otherAttributes: any;
}
