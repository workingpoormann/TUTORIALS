import "./App.css";
import { EnterTask } from "./EnterTask";
import { Tasks } from "./Tasks";

export function App() {
  return (
    <>
      <main className="w-auto flex flex-col items-center mt-20">
        <section
          id="todoSection"
          className="w-96 bg-[#3F3160] flex flex-col items-center py-4"
        >
          <EnterTask />
          <Tasks />
        </section>
      </main>
    </>
  );
}
