import { Task } from "../types/Task";
import prisma from "../lib/prisma";

export class TaskService {
    async simulate(taskData: Task) {
        return await prisma.task.create({
            data: {
                title: taskData.title,
                status: taskData.status ? "TODO" : "IN_PROGRESS",
                createdAt: new Date()
            }
        })
    }

    async getTasks() {
        return prisma.task.findMany()
    }
}

