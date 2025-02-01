import { Router } from "express";

import { tasksRoutes } from "./tasks";

export const routes = Router();

routes.use("/tasks", tasksRoutes);
