import { useSelector } from 'react-redux'
import { usePokemon } from '../../_hooks/hooks'
import Thumnail from "./_components/Thumnail"

import { getRegExp } from 'korean-regexp'

const MainPage = () => {
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const filterText = useSelector((state) => state.filterTextState)
  const regExp = getRegExp(filterText.trim())
  const filteredPokemonArray = pokemonArray.filter((pokemon) => pokemon.name.match(regExp))


  

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {filteredPokemonArray.map((pokemon, index) => <Thumnail key={index} front={pokemon.front} name={pokemon.name} />)}
    </div>
  )
}

export default MainPage