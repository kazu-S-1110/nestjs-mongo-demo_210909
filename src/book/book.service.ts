import { Book } from './interfaces/book.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/createBook.dto';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly BookModel: Model<Book>) {}
  books: CreateBookDto[] = [];
  getBook() {
    return this.books;
  }

  createBook(createBook: CreateBookDto) {
    this.books.push(createBook);
    return createBook;
  }
}
