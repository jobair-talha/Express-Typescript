import mongoose from "mongoose";
import app from "./app";
const port = 5000;

const DB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/New");

    console.log(`Database connect on ${conn.connection.host}`);

    app.listen(port, () => {
      console.log(`Server running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
DB();
