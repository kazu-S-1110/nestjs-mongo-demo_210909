import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/createBook.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook() {
    return this.bookService.getBookAll();
  }
  @Get('/:id')
  getBookById(@Param('id') id) {
    return this.bookService.getBookById(id);
  }
  @Post()
  createBook(@Body(ValidationPipe) createBook: CreateBookDto) {
    return this.bookService.createBook(createBook);
  }
  @Put('/:id')
  async updateBook(
    @Res() res,
    @Param('id') id: string,
    @Body(ValidationPipe) updateBook: CreateBookDto,
  ) {
    try {
      const newBook = await this.bookService.updateBook(updateBook, id);
      console.log(newBook);
      return await res.status(HttpStatus.OK).json({
        message: 'The Book has been successfully updated',
        newBook: newBook,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Book not updated!',
        status: 400,
      });
    }
  }
  @Delete('/:id')
  async deleteBook(@Res() res, @Param('id') id: string) {
    try {
      await this.bookService.deleteBook(id);
      return res.status(HttpStatus.OK).json({
        message: 'The Book has been successfully deleted!',
        id: id,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Book not deleted!',
        status: 400,
      });
    }
  }
  @Delete('')
  async deleteAll(@Res() res) {
    try {
      await this.bookService.deleteAll();
      return res.status(HttpStatus.OK).json({
        message: 'Success Delete ALL',
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Book not deleted!',
        status: 400,
      });
    }
  }
}
