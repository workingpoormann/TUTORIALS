import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

app.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await prisma.todo.create({
      data: { title },
    });
    console.log(todo);
    res.status(201).json({ message: "created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "error D:" });
  }
});

app.delete("/:todoId", async (req, res) => {
  const todoId = Number(req.params.todoId);

  try {
    const deletedProblem = await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });

    res.status(204).json(deletedProblem);
  } catch (err) {
    console.error(err);
    res.status(400).json({ err: `todo:${todoId} is not found.` });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is Porting on ${PORT}`);
});
