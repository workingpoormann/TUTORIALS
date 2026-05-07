import { Task } from "./Task";
import type { TodoType } from "./types/todo";

export function Tasks({ todos }: { todos: TodoType[] }) {
  return (
    <section className="flex flex-col gap-2 mx-10">
      {todos.map((todo) => (
        <Task key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </section>
  );
}
