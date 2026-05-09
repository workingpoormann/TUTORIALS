import "./App.css";
import { Score } from "./Score";

function App() {
  return (
    <>
      <section id="center">
        <section className="border p-4">
          <header className="px-2">
            <h1>Score Keeper</h1>
          </header>

          <section className="flex flex-col gap-10">
            <Score teamname="Team One" />
            <Score teamname="Team Two" />
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
