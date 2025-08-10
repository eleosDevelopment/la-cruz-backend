import cors from "cors";
import dotenv from "dotenv";
import express, { type Express, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

/*** VARIABLES ***/
dotenv.config()
const app: Express = express();

/*** EXPRESS SERVER AND DB CONNECTION ***/
app.listen(process.env.PORT, async () => {
	mongoose.set("strictQuery", false);
	const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }
  const source = await mongoose.connect(uri);
  try {
    console.log(`Connected to DB ${source.connection.name}`);
  } catch (error) {
    console.error(error);
  }
  mongoose.connection.on("disconnected", () => {
    console.log("Data Base disconnected!");
  });

  mongoose.connection.on("connected", () => {
    console.log("Data Base connected!");
  });
  const stringConnection = `Server is running on port ${process.env.PORT}`;
  console.info(stringConnection);
});

/****** MIDDLEWARES ******/
app.use(express.json());
app.use(cors());

/****** ROUTES ******/


/****** ERROR HANDLING MIDDLEWARE ******/
interface CustomError extends Error {
  status?: number;
};

app.use(
  (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const errorStatus = err.status || 500;
    const errorMsg = err.message || "Something went wrong!";
    res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMsg,
      stack: err.stack,
    });
  },
);