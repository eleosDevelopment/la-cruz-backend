import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "controllers/products.ctrl";
import express from "express";

const router = express.Router();

//CREATE
router.post("/", async (req, res, next) => {
  try {
    await createProduct(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.put("/:id", async (req, res, next) => {
  try {
    await updateProduct(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    await deleteProduct(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//GET
router.get("/:id", async (req, res, next) => {
  try {
    await getProduct(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

//GET ALL
router.get("/", async (req, res, next) => {
  try {
    await getAllProducts(req, res, next);
    return;
  } catch (error) {
    next(error);
  }
});

export default router;
