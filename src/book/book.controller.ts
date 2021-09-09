import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/createBook.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook() {
    return this.bookService.getBook();
  }

  @Post()
  createBook(@Body(ValidationPipe) createBook: CreateBookDto) {
    return this.bookService.createBook(createBook);
  }
}
