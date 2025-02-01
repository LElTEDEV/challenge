import { TasksController } from "@/controllers/TasksController";
import { Router } from "express";

export const tasksRoutes = Router();
const tasksController = new TasksController();

tasksRoutes.post("/", tasksController.create);
tasksRoutes.put("/", tasksController.update);
tasksRoutes.delete("/", tasksController.delete);
