import apiClient from "./api";

/**
 * 
 * @param after 
 * @returns liste des tâches créées
 */
export async function getTask(after?: string) {
    try {
        const res = await apiClient.get("/tasks", {
            params: after ? { after } : undefined
        });
        console.log("Data from database : ", res.data)
        return res.data;
    } catch (error: any) {
        console.error("Error during request : ", error)
    }
}

/**
 * Fonction de la simulation 
 * @returns les tâches
 */
export async function simulate() {
    try {
        const task = await apiClient.post("/simulate");
        return task
    } catch (error: any) {
        console.error("Error from API : ", error)
    }
}