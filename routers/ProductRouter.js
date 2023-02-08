import express from "express";
import {
  ProductPost,
  ProductDelete,
  ProductGetAll,
  ProductPut,
  ProductGetOne,
} from "../controllers/ProductController.js";

const ProductRouter = express.Router();

// POST เขียนข้อมูลลง DB  Rest ==> Create SQL ===> INSERT INTO
ProductRouter.post("/", ProductPost);

// GET อ่านข้อมูลจาก DB Rest ==> Read, SQL ===> SELECT FROM WHERE
ProductRouter.get("/", ProductGetAll);

ProductRouter.get("/:name", ProductGetOne);

// PUT/PATCH แก้ไขข้อมูล  Rest ==> Update, SQL ===> UPDATE SET WHERE
ProductRouter.put("/:id", ProductPut);

// DELETE ลบข้อมูล Rest ==> Delete , SQL ===> DELETE FROM WHERE
ProductRouter.delete("/:id", ProductDelete);

export default ProductRouter;
