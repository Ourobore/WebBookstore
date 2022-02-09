import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public author: string;

  @Column()
  public description: string;
}

export default Book;
