import { useNavigate } from "react-router";
import { deleteTodo } from "./api/todoApi";

type Props = {
  id: number;
  title: string;
};

export const Task = ({ id, title }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure to delet this "${title}"?`)) return;
    await deleteTodo(Number(id));
    navigate(0);
  };

  return (
    <div
      key={id}
      className="flex justify-between bg-[#BF07AC] px-1 rounded-md text-lg"
    >
      <p>{title}</p>
      <button onClick={handleDelete}>🗑</button>
    </div>
  );
};
