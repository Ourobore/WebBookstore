import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Book {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  public title: string;

  @Column()
  public author: string;

  @Column()
  public description: string;
}

export default Book;
