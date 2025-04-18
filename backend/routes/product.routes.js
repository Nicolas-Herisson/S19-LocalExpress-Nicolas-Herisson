import express from "express";
import * as productController from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", productController.getAllProducts);

export default productRouter;
