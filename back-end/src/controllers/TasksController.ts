// Eu geralmente faço com prisma e postgresql, mas como no git falava para ser em memo, resolvi fazer dessa forma.

import { Request, Response } from "express";
import { z } from "zod";

import { dataBase } from "@/db/in-memory";

export class TasksController {
  // Função que cria uma nova tarefa
  async create(req: Request, res: Response) {
    // Validação com o zod, garantindo que vou receber um title e description do usuário
    const taskSchema = z.object({
      title: z
        .string()
        .trim()
        .min(3, "The title must be at least 3 characters long"),
      description: z
        .string()
        .trim()
        .min(5, "The description must be at least 5 characters long"),
    });

    try {
      const { title, description } = taskSchema.parse(req.body);

      // Confirmando se já existe alguma tarefa com o mesmo title no meu banco de dados
      const taskAlreadyExists = dataBase.find((task) => task.title === title);

      if (taskAlreadyExists) {
        throw new Error("Task already exists!");
      }

      dataBase.push({ title, description });

      return res.status(201).json();
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}
