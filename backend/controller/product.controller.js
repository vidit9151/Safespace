import products from "../models/product.model.js";

const getAllProduct = async (req, res) => {
  try {
    const data = await products.find({});
    res.status(200).json({ data, success: true });
  } catch (error) {
    console.error(error);
    console.error("error while fetching all products");
    res
      .status(500)
      .json({ message: "error in fetching products", success: false });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const singleProduct = await products.findById(id);
    if (singleProduct)
      return res.status(200).json({ data: singleProduct, success: true });
    if (!singleProduct)
      return res
        .status(404)
        .json({ message: "No product found ", success: false });
  } catch (error) {
    console.error(error);
    console.error("error while fetching the product");
    res
      .status(500)
      .json({ message: "error in fetching product", success: false });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await products.create(req.body);
    res
      .status(201)
      .json({ date: newProduct, message: "product created", success: true });
  } catch (error) {
    console.error(error);
    console.error("error while creating product products");
    res
      .status(500)
      .json({ message: "error while creating product", success: false });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await products.findByIdAndDelete(id);
    console.log(deleteProduct);
    if (deleteProduct)
      return res
        .status(200)
        .json({ message: "deleted product successfully", success: true });
    if (!deleteProduct)
      return res
        .status(404)
        .json({ message: "product dont exists", success: false });
  } catch (error) {
    console.error(error);
    console.error("error while deleting the product");
    res
      .status(500)
      .json({ message: "error in deleting product", success: false });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    const updatedProduct = await products.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updateProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(error);
    console.error("error while updating the product");
    res
      .status(500)
      .json({ message: "error in updating product", success: false });
  }
};

export {
  getAllProduct,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
