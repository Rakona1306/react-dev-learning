import type { Pokemon } from "../../pages/day1";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <>
      <div className="p-4 bg-white text-black rounded-lg shadow-md shadow-gray-200 w-full">
        {pokemon.name}
      </div>
    </>
  )
}