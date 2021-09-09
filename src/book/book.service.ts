import { Book } from './interfaces/book.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/createBook.dto';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly BookModel: Model<Book>) {}

  async getBook() {
    return await this.BookModel.find().exec();
  }

  async createBook(createBook: CreateBookDto) {
    const newBook = new this.BookModel({
      title: createBook.title,
    });
    return await newBook.save();
  }
}
