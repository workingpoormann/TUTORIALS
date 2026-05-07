export const getTodos = async () => {
  const res = await fetch(`http://localhost:3001/`);
  const data = await res.json();
  console.log(data);
  return data;
};

export const createTodo = async (formData: FormData) => {
  const res = await fetch(`http://localhost:3001/`, {
    method: "POST",
    body: JSON.stringify({ title: formData.get("title") }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await res.json());
};

export const deleteTodo = async (todoId: number) => {
  const res = await fetch(`http://localhost:3001/${todoId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("failed");
};
