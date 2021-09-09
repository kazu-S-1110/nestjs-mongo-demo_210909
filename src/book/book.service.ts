import { Book } from './interfaces/book.interface';
import { Injectable, NotFoundException, Param } from '@nestjs/common';
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
    const newBook = new this.BookModel({
      title: createBook.title,
    });
    return await newBook.save();
  }

  async updateBook(updateBook: CreateBookDto, id: string) {
    const newBook = await this.BookModel.findByIdAndUpdate(id, updateBook);
    if (!newBook) {
      throw new NotFoundException(`${id}なんてものは見つからんわぼけ！`);
    }
    return newBook;
  }
  async deleteBook(@Param('id') id) {
    await this.BookModel.findOneAndRemove(id);
  }
}
