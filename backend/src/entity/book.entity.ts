import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Author from './author.entity';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  private id: number;

  @PrimaryColumn()
  public isbn: number;

  @Column()
  public title: string;

  @Column()
  // @ManyToOne(() => Author, (author) => author.books)
  public author: string;

  @Column()
  public description: string;
}

export default Book;
