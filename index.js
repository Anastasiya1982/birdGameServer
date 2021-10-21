import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import * as path from "path";
import methodOverride from "method-override";
import { fileURLToPath } from "url";
import { dirname } from "path";

import router from "./router/index.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);
app.use(methodOverride("_method"));
app.use("images", express.static(path.join(__dirname)));

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, () => {
            console.log(`Port is listening on  port = ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};
//mongoose.set("useFindAndModify", false);

start();
