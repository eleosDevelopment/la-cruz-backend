import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    photo: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    sku: { type: String, required: true, trim: true },
    qty: { type: Number, required: true, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Products", productModel);
