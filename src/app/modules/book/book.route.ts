import express from "express";
import {
  featuredByRating,
  getBooks,
  getBooksByPublisher,
} from "./book.controller";
const router = express.Router();

// book routes
router.get("/", getBooks);
router.get("/publisher", getBooksByPublisher);
router.get("/featured", featuredByRating);

export default router;
