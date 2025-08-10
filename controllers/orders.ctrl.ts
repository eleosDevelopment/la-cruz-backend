import { ParsedQs } from "qs";
import Orders from "../models/orders.models.js";
import { Request, Response, NextFunction } from "express";
import router from "routes/products.routes.js";

interface CartProps {
  name: string;
  price: number;
  sku: string;
  quantity: number;
  photo: string;
  subTotal: number;
}

interface PaymentProps {
  method: string;
  voucher: string;
  sinpeNumber: string;
  total: number;
}

interface CustomerProps {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface OrderRequestBody {
  totalInvoice: number;
  invoiceNumber: string;
  keyNumber: string;
  cart: CartProps[];
  payment: PaymentProps[];
  customer: CustomerProps[];
}

//CREATE
export const createOrder = async (
  req: Request<object, object, OrderRequestBody, ParsedQs>,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { totalInvoice, invoiceNumber, keyNumber, cart, payment, customer } =
      req.body;
    const newOrder = new Orders({
      totalInvoice,
      invoiceNumber,
      keyNumber,
      cart,
      payment,
      customer,
    });
		await newOrder.save();
		return res.send(newOrder);
  } catch (error) {
		next(error)
	}
};

//EDIT
export const updateOrder = async (
	req: Request<{ id: string }, object, OrderRequestBody, ParsedQs>,
	res: Response,
	next: NextFunction,
): Promise<Response<typeof Orders> | undefined> => {
	try {
		const { id } = req.params;
		const { body } = req;

		const productEdit = await Orders.findByIdAndUpdate(
			id,
			{ $set: body },
			{ new: true },
		);
		if (!productEdit) {
			return res.status(404).json({ message: "Order not found" });
		}
		return res.json(productEdit);
	} catch (error) {
		next(error);
	}
};

//DELETE
export const deleteOrder = async (
	req: Request<{ id: string }, object, OrderRequestBody, ParsedQs>,
	res: Response,
	next: NextFunction,
): Promise<Response<typeof Orders> | undefined> => {
	try {
		const productDeleted = await Orders.findByIdAndDelete(req.params.id);
		if (!productDeleted) return res.sendStatus(404);
		return res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};

//GET
export const getOrder = async (
	req: Request<{ id: string }, object, OrderRequestBody, ParsedQs>,
	res: Response,
	next: NextFunction,
): Promise<Response<typeof Orders> | undefined> => {
	try {
		const order = await Orders.findById(req.params.id);
		if (!order) return res.sendStatus(404);
		return res.send(order);
	} catch (error) {
		next(error);
	}
};

//GET ALL
export const getAllOrders = async (
	req: Request<object, object, OrderRequestBody, ParsedQs>,
	res: Response,
	next: NextFunction,
): Promise<Response<typeof Orders> | undefined> => {
	try {
		const orders = await Orders.find();
		if (!orders) {
			return res.status(404).json({ message: "Orders are empty" });
		}
		return res.json(orders);
	} catch (error) {
		next(error);
	}
};
