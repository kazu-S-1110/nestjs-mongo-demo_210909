import {
  Body,
  Controller,
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
      if (!newBook) {
        throw new NotFoundException('That Book does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'The Book has been successfully updated',
        newBook,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Book not updated!',
        status: 400,
      });
    }
  }
}
