import { TaskController } from "../controller/taskController";
import { Router } from "express";

const router = Router();
const taskController = new TaskController();

router.post("/simulate", (req, res) => taskController.simulate(req, res));
router.get("/tasks", (req, res) => taskController.getTasks(req, res));

// router.get("/tasks?after=<date>", (req, res) => taskController.getTasks(res));

export default router;