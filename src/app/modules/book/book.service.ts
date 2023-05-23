import { IBook, QueryParams } from './book.interface';
import Book from './book.model';

export const findBook = async (payload: QueryParams): Promise<IBook[]> => {
  const books = await Book.find(payload);
  return books;
};

export const findBookByPublisher = async (): Promise<IBook[]> => {
  const books = await Book.find({
    $and: [
      {
        'publisher.name': 'Roli Books',
      },
      {
        genre: 'Sci-Fi',
      },
    ],
  });
  return books;
};

export const featuredBook = async (): Promise<IBook[]> => {
  const books = await Book.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $cond: [{ $gte: ['$rating', 4.5] }, 'BestSeller', 'Popular'],
        },
      },
    },
  ]);
  return books;
};
