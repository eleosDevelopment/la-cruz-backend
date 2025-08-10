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
exports.getAllOrders = exports.getProduct = exports.deleteProduct = exports.updateProduct = exports.createOrder = void 0;
const orders_models_js_1 = __importDefault(require("../models/orders.models.js"));
//CREATE
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { totalInvoice, invoiceNumber, keyNumber, cart, payment, customer } = req.body;
        const newOrder = new orders_models_js_1.default({
            totalInvoice,
            invoiceNumber,
            keyNumber,
            cart,
            payment,
            customer,
        });
        yield newOrder.save();
        return res.send(newOrder);
    }
    catch (error) {
        next(error);
    }
});
exports.createOrder = createOrder;
//EDIT
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const productEdit = yield orders_models_js_1.default.findByIdAndUpdate(id, { $set: body }, { new: true });
        if (!productEdit) {
            return res.status(404).json({ message: "Order not found" });
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
        const productDeleted = yield orders_models_js_1.default.findByIdAndDelete(req.params.id);
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
        const order = yield orders_models_js_1.default.findById(req.params.id);
        if (!order)
            return res.sendStatus(404);
        return res.send(order);
    }
    catch (error) {
        next(error);
    }
});
exports.getProduct = getProduct;
//GET ALL
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orders_models_js_1.default.find();
        if (!orders) {
            return res.status(404).json({ message: "Orders are empty" });
        }
        return res.json(orders);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllOrders = getAllOrders;
//# sourceMappingURL=orders.ctrl.js.map