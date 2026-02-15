import apiClient from "./api";

enum Status {
    TODO,
    IN_PROGRESS,
    DONE
}

export interface Task {
    taskId: string;
    title: string;
    status: Status
}

class TaskApi {
    async getTask(taskId: string) {
        try {
            const task: Task = {
                taskId: "kda-&lsjdf-&ljdslfsd",
                title: "Faire ses devoirs",
                status: Status.DONE
            }
            return task;
        } catch (error: any) {
            console.error("Error during request : ", error)
        }
    }
}

export default TaskApi;