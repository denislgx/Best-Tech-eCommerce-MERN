import express from "express";
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getAllOrders,
    updateOrderToDelivered,
} from "../controllers/orderController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
    .route("/")
    .post(protect, addOrderItems)
    .get(protect, isAdmin, getAllOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(updateOrderToPaid);
router.route("/:id/delivered").put(protect, isAdmin, updateOrderToDelivered);

export default router;
