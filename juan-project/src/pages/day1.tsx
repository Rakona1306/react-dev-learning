import { useEffect, useState } from "react";
import PokemonCard from "../components/molecules/pokemon-card";
import Button from "../components/atoms/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const LIMIT = 10;

export default function Day1() {
  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchPokemon() {

      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${(LIMIT * (page - 1))}`, {
          method: "GET",
        });

        // SI RESPONSE NO (!) ESTA OK TIRA ERROR
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }

        const data: PokemonResponse = await response.json();
        
        setPokemon(data);
        
        setTotal(data.count);
      } catch (error) {
        setError("Error al obtener los pokemones");
        console.error(error);
      } finally {
        
        setLoading(false);
      }
    }
    
    fetchPokemon();
  }, [page]);

  console.log('Estoy renderizando', pokemon, loading, page, total, width, error);

  useEffect(() => {
    // Vamos a leer el DOM
    window.addEventListener("resize", function () {
      // Esto es mala practica
      setWidth(window.innerWidth);
      console.log('Width', window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", function () {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  if (error) {
    return <p className="text-center text-red-600 text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-4">
        Day 1 - Trabajo con POKEMONES
      </h1>

      {width < 768 && <p>Oye estas en mobile!</p>}

      <section className="mt-10 flex gap-3 items-center justify-center flex-wrap">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            {pokemon &&
              pokemon.results.map((pokemon) => {
                return <PokemonCard pokemon={pokemon} key={pokemon.name} />;
              })}
          </>
        )}
      </section>

      <section className="flex gap-2 justify-center mt-5">
        {page > 1 && (
          <Button onClick={handlePreviousPage}>
            <ChevronLeft />
          </Button>
        )}

        <p>Pagina {page}</p>

        {total > LIMIT * page && (
          <Button onClick={handleNextPage}>
            <ChevronRight />
          </Button>
        )}
      </section>
    </div>
  );
}
