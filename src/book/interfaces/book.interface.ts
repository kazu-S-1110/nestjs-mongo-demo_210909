import * as mongoose from 'mongoose';

export interface Book extends mongoose.Document {
  title: string;
}
