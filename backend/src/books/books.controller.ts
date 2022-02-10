import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks() {
    const books = await this.booksService.getAllBooks();
    return books;
  }

  @Get(':bookID')
  async getBookById(@Param('bookID') bookID: number) {
    const book = await this.booksService.getBookById(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.createBook(createBookDTO);
    return book;
  }

  @Delete()
  async deleteBook(@Query('bookID') key: number) {
    const books = await this.booksService.deleteBook(key);
    return books;
  }
}
