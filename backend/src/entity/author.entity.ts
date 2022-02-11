import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Book from './book.entity';

@Entity()
class Author {
  @PrimaryColumn()
  public lastName: string;

  @Column()
  public firstName: string;

  @OneToMany(() => Book, (book) => book.author)
  public books: Book[];
}

export default Author;
