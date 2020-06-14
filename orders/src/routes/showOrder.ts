import express, { Request, Response } from "express";
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from "@ticketing-pkgs/common";
import { Order } from "../models/orders";

const router = express.Router();

router.get(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate("ticket");

    if (!order) {
      return new NotFoundError();
    }
    
    if (order.userId != req.currentUser!.id) {
      return new NotAuthorizedError();
    }

    res.status(201).send(order);
  }
);

export { router as showOrderRouter };
