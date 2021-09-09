import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: { unique: true },
  },
});
