import { useSelector } from 'react-redux'
import Thumnail from "./_components/Thumnail"

import { getRegExp } from 'korean-regexp'
import Searchbar from '../../components/Searchbar'

const MainPage = () => {
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const filterText = useSelector((state) => state.filterTextState)
  const regExp = getRegExp(filterText.trim())
  const filteredPokemonArray = pokemonArray.filter((pokemon) => pokemon.name.match(regExp))

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
      <Searchbar />
      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-x-hidden overflow-y-scroll">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {filteredPokemonArray.map((pokemon, index) => <Thumnail key={index} pokemon={pokemon} />)}
        </div>
      </div>
    </div>
  )
}

export default MainPage