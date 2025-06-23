import express from "express";
import {
  getAllProduct,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../../../../controller/product.controller.js";
const productRouter = express.Router();

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);

export default productRouter;
