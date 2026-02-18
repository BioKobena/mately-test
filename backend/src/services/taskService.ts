import prisma from "../lib/prisma";
import taskData from "./../data/task.json"
export class TaskService {
    async simulate() {
        const tasks = []
        for (let i = 0; i < taskData.length; i++) {
            const task = await prisma.task.create({
                data: {
                    title: taskData[i].title,
                    status: taskData[i].status,
                }
            })
            tasks.push(task)

            if (i < taskData.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 5000))
            }
        }
        return tasks
    }

    async getTasks(after?: string) {
        return prisma.task.findMany({
            where: after ? {
                createdAt: { gt: new Date(after) }
            } : undefined,
            orderBy: { createdAt: "asc" },
            take: 20
        })
    }
}

