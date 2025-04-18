import express from "express";
import "dotenv/config";
import productRouter from "./routes/product.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
});
