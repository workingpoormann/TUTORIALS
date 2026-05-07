import { createTodo } from "./api/todoApi";

type Props = {
  fetchTodos: () => Promise<void>;
};

export function EnterTask({ fetchTodos }: Props) {
  return (
    <form
      className="flex gap-10 justify-between px-5 py-2 mb-4"
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget);
        await createTodo(formData);
        await fetchTodos();
      }}
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Task"
        className="bg-[#1B718A] rounded-md px-2 text-[#94B8C5]"
      />
      <button className="py-2 px-5 bg-[#CA9C17] rounded-md">Add</button>
    </form>
  );
}
