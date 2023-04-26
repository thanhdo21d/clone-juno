import express from "express";

// import { signin, signup } from "../controllers/auth";
import { create, getAll, getId, remove, update } from "../controllers/products";

const router = express.Router();

router.post("/products", create);
router.get("/products/:id", getId);
router.put("/products/:id", update);
router.delete("/products/:id", remove);
router.get("/products", getAll);
// router.post("/auth/signup",signup)
// router.post("/auth/signin",signin)

export default router;
