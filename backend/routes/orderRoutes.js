import express from "express";
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
route.route("/:id/pay").put(updateOrderToPaid);

export default router;
