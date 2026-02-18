import { TaskService } from "../services/taskService";
import { Request, Response } from "express"
import data from "./../data/task.json"
import { Task } from "../types/Task";

const taskService = new TaskService()
export class TaskController {
    async simulate(req: Request, res: Response) {
        taskService.simulate().catch(console.error)
        res.status(200).json({ message: "Simulation ok" })
    }

    async getTasks(req: Request, res: Response) {
        try {
            const { after } = req.query
            const tasks = await taskService.getTasks(after as string)
            return res.status(200).json(tasks)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}