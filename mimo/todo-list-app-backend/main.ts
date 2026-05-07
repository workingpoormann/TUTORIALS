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

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is Porting on ${PORT}`);
});
