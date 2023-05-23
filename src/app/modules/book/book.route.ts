import express from "express";
import { getBooks, getBooksByPublisher } from "./book.controller";
const router = express.Router();

router.get("/", getBooks);

router.get("/publisher", getBooksByPublisher);

export default router;
