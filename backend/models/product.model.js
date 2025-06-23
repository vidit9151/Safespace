import { Schema, model } from "mongoose";
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },

    varition: {
      type: [
        {
          variationName: String,
          image: [String],
        },
      ],
      required: true,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true }
);
const products = model("products", productSchema);
export default products;
