import { Book } from './interfaces/book.interface';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/createBook.dto';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly BookModel: Model<Book>) {}

  async getBookAll() {
    return await this.BookModel.find().exec();
  }
  async getBookById(id: string) {
    return await this.BookModel.findById(id).exec();
  }

  async createBook(createBook: CreateBookDto) {
    if (!createBook.userNum && createBook.userName) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'input userNum',
        },
        404,
      );
    } else {
      const newBook = new this.BookModel({
        title: createBook.title,
        model: createBook.model,
      });
      return await newBook.save();
    }
  }

  async updateBook(updateBook: CreateBookDto, id: string) {
    return await this.BookModel.findByIdAndUpdate({ _id: id }, updateBook, {
      returnOriginal: false,
    });
  }
  async deleteBook(@Param('id') id) {
    await this.BookModel.findOneAndRemove({ _id: id });
  }
  async deleteAll() {
    await this.BookModel.remove({});
  }
}
