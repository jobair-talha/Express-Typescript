import cors from "cors";
import express, { Application } from "express";
import bookRoutes from "./app/modules/book/book.route";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/book", bookRoutes);

export default app;
