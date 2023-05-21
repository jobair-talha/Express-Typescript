import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      require: true,
    },
    author: [
      {
        type: String,
        require: true,
      },
    ],
    genre: {
      type: String,
      require: true,
    },
    publicationYear: {
      type: Number,
      require: true,
    },
    publisher: {
      name: {
        type: String,
        require: true,
      },
      location: {
        type: String,
        require: true,
      },
    },
    reviews: [
      {
        user: {
          type: String,
          require: true,
        },
        comment: {
          type: String,
          require: true,
        },
      },
    ],
    rating: {
      type: Number,
      require: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = model<IBook>("Book", bookSchema);
export default Book;
