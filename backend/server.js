import dotenv from "dotenv";
import express from "express";
import productRouter from "./routes/product.route.js";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/api/v1/product", productRouter);

app.listen(port, () => {
  console.log(`port started at ${port}`);
});
