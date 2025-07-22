import { useSelector } from 'react-redux'
import Thumbnail from "./_components/Thumbnail"

import { getRegExp } from 'korean-regexp'
import Searchbar from '../../components/Searchbar'
import { useSearchParams } from 'react-router'

const MainPage = () => {
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  
  const [searchParams, _setSearchParams] = useSearchParams()
  const filterText = searchParams.get("name")
  const regExp = getRegExp(filterText.trim())

  const doFilterHeart = useSelector((state) => state.doFilterHeartState)

  const filteredPokemonArray = pokemonArray.filter((pokemon) => {
    if (!doFilterHeart) {
      return pokemon.name.match(regExp)
    }

    return pokemon.name.match(regExp) && pokemon.doLike
  })


  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
      <Searchbar />

      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-x-hidden overflow-y-scroll">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {filteredPokemonArray.map((pokemon, index) => <Thumbnail key={index} pokemon={pokemon} />)}
        </section>
      </div>
    </div>
  )
}

export default MainPage