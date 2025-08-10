import { ParsedQs } from "qs";
import Orders from "../models/orders.models.js";
import { Request, Response, NextFunction } from "express";
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
export declare const createOrder: (req: Request<object, object, OrderRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const updateProduct: (req: Request<{
    id: string;
}, object, OrderRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Orders> | undefined>;
export declare const deleteProduct: (req: Request<{
    id: string;
}, object, OrderRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Orders> | undefined>;
export declare const getProduct: (req: Request<{
    id: string;
}, object, OrderRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Orders> | undefined>;
export declare const getAllOrders: (req: Request<object, object, OrderRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Orders> | undefined>;
export {};
