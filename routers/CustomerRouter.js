import express from "express";
import {
  CustomerDelete,
  CustomerGet,
  CustomerPost,
  CustomerPut,
} from "../controllers/CustomerController.js";

const CustomerRouter = express.Router();

//POST
CustomerRouter.post("/", CustomerPost);
//GET
CustomerRouter.get("/", CustomerGet);
//PUT
CustomerRouter.put("/", CustomerPut);
//DELETE
CustomerRouter.delete("/", CustomerDelete);

export default CustomerRouter;
