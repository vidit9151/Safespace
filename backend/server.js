import express from "express";
import productRouter from "./routes/api/v1/products/product.route.js";
import { dbConnect } from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/v1/product", productRouter);

app.listen(port, () => {
  console.log(`port started at ${port}`);
  dbConnect();
});
