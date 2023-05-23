import { NextFunction, Request, Response } from 'express';
import { QueryParams } from './book.interface';
import { featuredBook, findBook, findBookByPublisher } from './book.service';

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryParams: QueryParams = req.query as unknown as QueryParams;

    const books = await findBook(queryParams);

    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (error) {
    next();
  }
};

export const getBooksByPublisher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await findBookByPublisher();

    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (error) {
    next();
  }
};

export const featuredByRating = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await featuredBook();

    // Kicu 1ta add hobe

    res.status(200).json({
      status: 'success',
      data: books,
    });
  } catch (error) {
    next();
  }
};
