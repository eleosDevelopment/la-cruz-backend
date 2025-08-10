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
export declare const createProduct: (req: Request<object, object, ProductRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const updateProduct: (req: Request<{
    id: string;
}, object, ProductRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Products> | undefined>;
export declare const deleteProduct: (req: Request<{
    id: string;
}, object, ProductRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Products> | undefined>;
export declare const getProduct: (req: Request<{
    id: string;
}, object, ProductRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Products> | undefined>;
export declare const getAllProducts: (req: Request<object, object, ProductRequestBody, ParsedQs>, res: Response, next: NextFunction) => Promise<Response<typeof Products> | undefined>;
