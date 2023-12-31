import { Router } from "express";
import usercontroller from "../controllers/UserController";

const router = new Router();

router.post("/", usercontroller.store);
router.get("/", usercontroller.index);
router.get("/:id", usercontroller.show);
router.put("/:id", usercontroller.update);
router.delete("/:id", usercontroller.delete);

export default router;
