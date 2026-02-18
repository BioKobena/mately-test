export interface Task {
    id: string;
    title: string;
    status: "todo" | "in_progress" | "done";
    createdAt: string;
}