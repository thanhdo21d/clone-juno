import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routers/products";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productRouter);
// app.use("/api", userRouter);

mongoose.connect(`mongodb://127.0.0.1:27017/Juno`);

export const viteNodeApp = app;
