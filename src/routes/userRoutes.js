import { Router } from "express";
import usercontroller from "../controllers/UserController";

const router = new Router();

router.post("/", usercontroller.store);

export default router;
