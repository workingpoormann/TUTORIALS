import React from "react";
import "./App.css";
import { Pokemon } from "./Pokemon";

function App() {
  const [pokemonInfo, setPokemonInfo] = React.useState({
    pokemonId: 0,
    name: "",
    frontImg: "",
  });

  return (
    <>
      <section id="center">
        <section className={`border px-4 py-6 rounded-md flex flex-col gap-4`}>
          <header>
            <h1>Pokemon Dialog</h1>
          </header>

          <section className="mb-10">
            <form
              action=""
              onSubmit={async (e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                const pokemonId = Number(formData.get("pokemonId"));
                if (!pokemonId) {
                  console.log("* pokemonId : ", pokemonId);
                  return;
                }
                const response = await fetch(
                  `http://localhost:3001/?pokemonId=${pokemonId}`,
                );

                const data = await response.json();
                setPokemonInfo({
                  pokemonId: data.id,
                  name: data.name,
                  frontImg: data.sprites.front_default,
                });
              }}
            >
              <input
                id="pokemonId"
                name="pokemonId"
                type="number"
                className={`bg-gray-300 text-gray-900 px-2 text-2xl`}
              />
            </form>
          </section>

          <section>
            <Pokemon poke={pokemonInfo} />
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
