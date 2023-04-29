import CategoryRouter from "./routers/category";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
// routers
app.use("/api", CategoryRouter);
app.use("/api", productRouter);
app.use("/api", authRouter);
mongoose.connect("mongodb://127.0.0.1:27017/node-test-WE17305");
export const viteNodeApp = app;
