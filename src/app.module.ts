import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { SetupModule } from './setup/setup.module';

@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    SetupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
