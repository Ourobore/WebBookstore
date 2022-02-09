import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { CreateBookDTO } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import Book from '../entity/book.entity';

@Injectable()
export class BooksService {
  // books = BOOKS;

  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(this.booksRepository.find());
    });
  }

  getBook(bookID: string): Promise<Book> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const book = this.booksRepository.findOne(id);
      if (!book) {
        throw new HttpException('Book does not exist!', HttpStatus.NOT_FOUND);
      }
      resolve(book);
    });
  }

  createBook(book: CreateBookDTO): Promise<Book> {
    return new Promise((resolve) => {
      const newBook = this.booksRepository.create(book);
      this.booksRepository.save(newBook);
      resolve(newBook);
    });
  }

  deleteBook(bookID: string): Promise<Book[]> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const deleteResponse = this.booksRepository.delete(id);
      if (!deleteResponse) {
        throw new HttpException('Book does not exist!', HttpStatus.NOT_FOUND);
      }
      resolve(this.getAllBooks());
    });
  }
}
