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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
/*** VARIABLES ***/
dotenv_1.default.config();
const app = (0, express_1.default)();
/*** EXPRESS SERVER AND DB CONNECTION ***/
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.set("strictQuery", false);
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined in the environment variables.");
    }
    const source = yield mongoose_1.default.connect(uri);
    try {
        console.log(`Connected to DB ${source.connection.name}`);
    }
    catch (error) {
        console.error(error);
    }
    mongoose_1.default.connection.on("disconnected", () => {
        console.log("Data Base disconnected!");
    });
    mongoose_1.default.connection.on("connected", () => {
        console.log("Data Base connected!");
    });
    const stringConnection = `Server is running on port ${process.env.PORT}`;
    console.info(stringConnection);
}));
/****** MIDDLEWARES ******/
app.use(express_1.default.json());
app.use((0, cors_1.default)());
;
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMsg = err.message || "Something went wrong!";
    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMsg,
        stack: err.stack,
    });
});
//# sourceMappingURL=index.js.map