"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productModel = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true, unique: true },
    photo: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    sku: { type: String, required: true, trim: true },
    qty: { type: Number, required: true, trim: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Products", productModel);
//# sourceMappingURL=products.models.js.map