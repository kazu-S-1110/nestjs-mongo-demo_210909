import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: { unique: true },
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    userName: {
      type: String,
    },
    userNum: {
      type: String,
    },
    userBelongto: {
      type: String,
    },
    destination: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);
