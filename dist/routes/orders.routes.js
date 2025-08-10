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
const orders_ctrl_js_1 = require("../controllers/orders.ctrl.js");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//CREATE
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, orders_ctrl_js_1.createOrder)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//UPDATE
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, orders_ctrl_js_1.updateOrder)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//DELETE
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, orders_ctrl_js_1.deleteOrder)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//GET
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, orders_ctrl_js_1.getOrder)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//GETALL
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, orders_ctrl_js_1.getAllOrders)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=orders.routes.js.map