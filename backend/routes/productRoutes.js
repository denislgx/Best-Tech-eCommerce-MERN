import express from "express";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
import {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, isAdmin, createProduct);
router
    .route("/:id")
    .get(getProductById)
    .delete(protect, isAdmin, deleteProduct)
    .put(protect, isAdmin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
