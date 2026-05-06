export function EnterTask() {
  return (
    <form className="flex gap-10 justify-between px-5 py-2 mb-4">
      <input
        type="text"
        name="enterTask"
        id="enterTask"
        placeholder="Enter Task"
        className="bg-[#1B718A] rounded-md px-2 text-[#94B8C5]"
      />
      <button className="py-2 px-5 bg-[#CA9C17] rounded-md">Add</button>
    </form>
  );
}
