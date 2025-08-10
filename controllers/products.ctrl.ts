
import { ParsedQs } from "qs";
import Products from "../models/products.models.js";
import { Request, Response, NextFunction } from "express";

export interface ProductRequestBody {
  name: string;
  photo: string;
  category: string;
  price: number;
  sku: string;
  qty: number;
}

//CREATE
export const createProduct = async (
  req: Request<object, object, ProductRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { name, photo, category, price, sku, qty } = req.body;
    const newProduct = new Products({
      name,
      photo,
      category,
      price,
			sku,
			qty
    });
    await newProduct.save();
    return res.send(newProduct);
  } catch (error) {
    next(error);
  }
};

//EDIT
export const updateProduct = async (
  req: Request<{ id: string }, object, ProductRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response<typeof Products> | undefined> => {
  try {
    const { id } = req.params;
    const { body } = req;

    const productEdit = await Products.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true },
    );
    if (!productEdit) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json(productEdit);
  } catch (error) {
    next(error);
  }
};

//DELETE
export const deleteProduct = async (
  req: Request<{ id: string }, object, ProductRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response<typeof Products> | undefined> => {
  try {
    const productDeleted = await Products.findByIdAndDelete(req.params.id);
    if (!productDeleted) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//GET
export const getProduct = async (
  req: Request<{ id: string }, object, ProductRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response<typeof Products> | undefined> => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.sendStatus(404);
    return res.send(product);
  } catch (error) {
    next(error);
  }
};

//GET ALL
export const getAllProducts = async (
  req: Request<object, object, ProductRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response<typeof Products> | undefined> => {
  try {
    const products = await Products.find();
    if (!products) {
      return res.status(404).json({ message: "Products are empty" });
    }
    return res.json(products);
  } catch (error) {
    next(error);
  }
};
