import { TaskService } from "../services/taskService";
import { Request, Response } from "express"
import data from "./../data/task.json"
import { Task } from "../types/Task";
const taskService = new TaskService()
export class TaskController {
    simulate(req: Request, res: Response) {
        setTimeout(() => {
            data.forEach(async (el: Task) => {
                try {
                    const task = await taskService.simulate(el)
                    console.log(task)
                    return res.status(200).json(task)
                } catch (error: any) {
                    res.status(500).json({ error: error.message })
                }
            })
        }, 5000);
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await taskService.getTasks();
            return res.status(200).json(tasks)
        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
}