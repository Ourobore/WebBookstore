import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateBookDTO } from './dto/create-book.dto';
import Book from '../entity/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(this.booksRepository.find());
    });
  }

  async getBookById(id: number): Promise<Book> {
    const book = await this.booksRepository.findOne(id);
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    return book;
  }

  createBook(book: CreateBookDTO): Promise<Book> {
    return new Promise((resolve) => {
      const newBook = this.booksRepository.create(book);
      this.booksRepository.save(newBook);
      resolve(newBook);
    });
  }

  async deleteBook(bookID: number): Promise<Book[]> {
    const deleteResponse = await this.booksRepository.delete(bookID);
    if (!deleteResponse.affected) {
      throw new HttpException('Book does not exist!', HttpStatus.NOT_FOUND);
    }
    return this.getAllBooks();
  }
}
