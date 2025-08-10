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
const products_ctrl_js_1 = require("../controllers/products.ctrl.js");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//CREATE
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, products_ctrl_js_1.createProduct)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//UPDATE
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, products_ctrl_js_1.updateProduct)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//DELETE
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, products_ctrl_js_1.deleteProduct)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//GET
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, products_ctrl_js_1.getProduct)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
//GET ALL
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, products_ctrl_js_1.getAllProducts)(req, res, next);
        return;
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=products.routes.js.map