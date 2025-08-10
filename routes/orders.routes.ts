import { createOrder, deleteOrder, getAllOrders, getOrder, updateOrder } from "controllers/orders.ctrl";
import express from "express";

const router = express.Router();

//CREATE
router.post("/", async (req, res, next) => {
  try {
    await createOrder(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    await updateOrder(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteOrder(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//GET
router.get("/:id", async (req, res, next) => {
  try {
    await getOrder(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//GETALL
router.get("/", async (req, res, next) => {
  try {
    await getAllOrders(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

export default router;