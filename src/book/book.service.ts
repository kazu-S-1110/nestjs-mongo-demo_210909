import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getBook() {
    return 'べらぼうめ！';
  }
}
