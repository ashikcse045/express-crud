import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get('/', productController.index)

export default router;