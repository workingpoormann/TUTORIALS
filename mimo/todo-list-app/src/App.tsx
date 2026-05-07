import React from "react";
import { getTodos } from "./api/todoApi";
import "./App.css";
import { EnterTask } from "./EnterTask";
import { Tasks } from "./Tasks";
import type { TodoType } from "./types/todo";

export function App() {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  async function fetchTodos() {
    const data = await getTodos();
    setTodos(data);
  }

  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <main className="w-auto flex flex-col items-center mt-20">
        <section
          id="todoSection"
          className="w-96 bg-[#3F3160] flex flex-col py-4"
        >
          <EnterTask fetchTodos={fetchTodos} />
          <Tasks todos={todos} />
        </section>
      </main>
    </>
  );
}
