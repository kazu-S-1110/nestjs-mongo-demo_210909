import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/createBook.dto';

@Injectable()
export class BookService {
  books: CreateBookDto[] = [];
  getBook() {
    return this.books;
  }

  createBook(createBook: CreateBookDto) {
    this.books.push(createBook);
    return createBook;
  }
}
