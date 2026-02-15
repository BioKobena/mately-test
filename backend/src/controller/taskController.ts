import { TaskService } from "../services/taskService";
import { Request, Response } from "express"

const taskService = new TaskService()
export class TaskController {
    async simulate(req: Request, res: Response) {
        try {
            const task = await taskService.simulate(req.body)

            return res.status(200).json(task)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }

    async getTasks(res: Response) {
        try {
            const tasks = await taskService.getTasks();
            return res.status(200).json(tasks)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}