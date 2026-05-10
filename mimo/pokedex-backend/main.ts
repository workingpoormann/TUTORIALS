import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const { pokemonId } = req.query;

  if (!pokemonId) {
    res.status(400).json({ error: "PokemonId not Found" });
    return;
  }

  const api = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`API erro: ${response.status}`);
  }

  const data = await response.json();
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Port ... http://localhost:${PORT}`);
});
