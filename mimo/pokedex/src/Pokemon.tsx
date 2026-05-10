type URL = string;

type PokemonProp = {
  pokemonId: number;
  name: string;
  frontImg: URL;
};

export function Pokemon({ poke }: { poke: PokemonProp }) {
  return (
    <section className="text-2xl flex flex-col items-center">
      <p>Pokemon ID: {poke.pokemonId}</p>
      <p>Pokemon Name: {poke.name}</p>
      {poke.frontImg && (
        <img
          src={poke.frontImg}
          alt="can't load poke Info D:"
          className="h-42"
        />
      )}
    </section>
  );
}
