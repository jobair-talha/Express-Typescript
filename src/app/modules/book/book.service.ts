import { IBook, QueryParams } from "./book.interface";
import Book from "./book.model";

export const findBook = async (payload: QueryParams): Promise<IBook[]> => {
  const books = await Book.find(payload);
  return books;
};

export const findBookByPublisher = async (): Promise<IBook[]> => {
  const books = await Book.find({
    $and: [
      {
        "publisher.name": "Roli Books",
      },
      {
        genre: "Sci-Fi",
      },
    ],
  });
  return books;
};
