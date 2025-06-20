import express from "express";
import { getAllProduct } from "../controller/product.controller.js";
const productRouter = express.Router();
productRouter.get("/", getAllProduct);

export default productRouter;
