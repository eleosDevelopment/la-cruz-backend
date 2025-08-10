"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getProduct = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const products_models_js_1 = __importDefault(require("../models/products.models.js"));
//CREATE
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, photo, category, price, sku, qty } = req.body;
        const newProduct = new products_models_js_1.default({
            name,
            photo,
            category,
            price,
            sku,
            qty
        });
        yield newProduct.save();
        return res.send(newProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
//EDIT
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const productEdit = yield products_models_js_1.default.findByIdAndUpdate(id, { $set: body }, { new: true });
        if (!productEdit) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json(productEdit);
    }
    catch (error) {
        next(error);
    }
});
exports.updateProduct = updateProduct;
//DELETE
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productDeleted = yield products_models_js_1.default.findByIdAndDelete(req.params.id);
        if (!productDeleted)
            return res.sendStatus(404);
        return res.sendStatus(204);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProduct = deleteProduct;
//GET
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield products_models_js_1.default.findById(req.params.id);
        if (!product)
            return res.sendStatus(404);
        return res.send(product);
    }
    catch (error) {
        next(error);
    }
});
exports.getProduct = getProduct;
//GET ALL
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_models_js_1.default.find();
        if (!products) {
            return res.status(404).json({ message: "Products are empty" });
        }
        return res.json(products);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=products.ctrl.js.map