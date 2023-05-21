type IReview = { user: string; comment: string };

export interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: { name: string; location: string };
  reviews: IReview[];
  rating: number;
  price: string;
}
