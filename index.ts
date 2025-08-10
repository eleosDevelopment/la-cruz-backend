import dotenv from "dotenv";
import express, { type Express, NextFunction, Request, Response } from "express";

/*** VARIABLES ***/
dotenv.config()
const app: Express = express();

/*** EXPRESS SERVER AND DB CONNECTION ***/
app.listen(process.env.PORT);