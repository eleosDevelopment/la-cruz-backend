import mongoose from "mongoose";

const ordersModel = new mongoose.Schema(
  {
    totalInvoice: { type: Number, required: true },
    invoiceNumber: { type: String, required: true, trim: true },
    keyNumber: { type: String, required: true, trim: true },
    cart: [
      {
        name: { type: String, required: true, trim: true },
        price: { type: Number, required: true, trim: true },
        sku: { type: String, required: true, trim: true },
        quantity: { type: Number, required: true, trim: true },
        photo: { type: String, required: true, trim: true },
        subTotal: { type: Number, required: true, trim: true },
      },
    ],
    payment: [
      {
        method: {
          type: String,
          enum: ["cash", "creditCard", "sinpe"],
          required: true,
        },
        voucher: { type: String, trim: true },
        sinpeNumber: { type: String, trim: true },
        total: { type: Number, required: true, trim: true },
      },
    ],
    customer: [
      {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        phoneNUmber: { type: Number, required: true, trim: true },
        address: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Orders", ordersModel);
