import { Router } from "express";
import {
  create,
  get,
  deleteById,
  update,
} from "../controller/profile.controller";

const router: Router = Router();

router.get("/", get);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", deleteById);

export default router;
