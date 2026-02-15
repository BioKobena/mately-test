import apiClient from "./api";
import axios from "axios";

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

export async function getTask(taskId: string) {
    try {
        const res = await apiClient.get("/");

        setInterval(() => {
            res
        }, 5000);
        return res.data;
    } catch (error: any) {
        console.error("Error during request : ", error)
    }
}

export async function simulate() {
    try {
        const task = await apiClient.post("/", {
            
        })
    } catch (error: any) {
        console.error("Error from API : ", error)
    }
}