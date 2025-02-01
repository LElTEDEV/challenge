// Eu geralmente faço com prisma e postgresql, mas como no git falava para ser em memo, resolvi fazer dessa forma.

import { randomUUID } from "node:crypto";
import { Request, Response } from "express";
import { z } from "zod";

import { dataBase } from "@/db/in-memory";

export class TasksController {
  // Função que cria uma nova tarefa
  async create(req: Request, res: Response) {
    try {
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
        status: z
          .enum(["pending", "in_progress", "completed"])
          .default("pending"),
      });

      const { title, description, status } = taskSchema.parse(req.body);

      // Confirmando se já existe alguma tarefa com o mesmo title no meu banco de dados
      const taskAlreadyExists = dataBase.find((task) => task.title === title);

      if (taskAlreadyExists) {
        throw new Error("Task already exists!");
      }

      dataBase.push({ id: randomUUID(), title, description, status });

      console.log(dataBase);

      return res.status(201).json();
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  // Função para atualizar uma tarefa
  async update(req: Request, res: Response) {
    const taskSchema = z.object({
      id: z.string().uuid(),
      title: z
        .string()
        .trim()
        .min(3, "The title must be at least 3 characters long")
        .nullish(),
      description: z
        .string()
        .trim()
        .min(5, "The description must be at least 5 characters long")
        .nullish(),
      status: z.enum(["pending", "in_progress", "completed"]).nullish(),
    });

    try {
      const { id, title, description, status } = taskSchema.parse(req.body);

      // Como o meu banco de dados é apenas uma array em memória, eu estou buscando o index que essa minha task está no "db"
      const taskIndex = dataBase.findIndex((task) => task.id === id);

      if (taskIndex === -1) {
        throw new Error("Task not exists");
      }

      const taksInDb = dataBase.find((task) => task.id === id);

      // Estou validando a minha task, caso ela já esteja como concluída, ele não permitirá mais edições nela.
      if (taksInDb?.status === "completed") {
        throw new Error("This task already completed.");
      }

      // Atualizando a task com base no id recebido pelo usuário
      dataBase[taskIndex] = {
        id,
        title: title ?? taksInDb!.title,
        description: description ?? taksInDb!.description,
        status: status ?? taksInDb!.status,
      };

      return res.status(204).json();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(404).json({
          error: error.errors,
        });
      }

      return res.status(500).json(error.message);
    }
  }

  // Função para deletar uma tarefa
  async delete(req: Request, res: Response) {
    // No Front-end estou pensando em apenas criar um button para deletar a task (tela principal mesmo), com isso, não pretendo receber através do params
    // Estou pensando em enviar o id da task pelo corpo da requisição mesmo (não sei se é a melhor forma, mas como não pretendo criar outra página no front apenas para isso, imagino que sim)

    const deleteSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = deleteSchema.parse(req.body);

      const taskIndex = dataBase.findIndex((task) => task.id === id);

      if (taskIndex === -1) {
        throw new Error("Task not exists.");
      }

      dataBase.splice(taskIndex, 1);

      return res.status(201).json();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(404).json({
          error: error.errors,
        });
      }

      return res.status(500).json(error.message);
    }
  }
}
