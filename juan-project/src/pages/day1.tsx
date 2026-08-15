import { useEffect, useState } from "react";
import PokemonCard from "../components/molecules/pokemon-card";

interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export default function Day1() {
  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
          method: "GET",
        });

        // SI RESPONSE NO (!) ESTA OK TIRA ERROR
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }

        const data: PokemonResponse = await response.json();
        setPokemon(data);
      } catch (error) {
        setError("Error al obtener los pokemones");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (error) {
    return <p className="text-center text-red-600 text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-4">
        Day 1 - Trabajo con POKEMONES
      </h1>

      <section className="mt-10 flex gap-3 items-center justify-center">
        {loading ? <p>Cargando...</p> : <>{ pokemon && pokemon.results.map((pokemon) => {
          return (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          )
        })}</>}
      </section>
    </div>
  );
}
