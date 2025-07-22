import { useSelector } from 'react-redux'
import Thumbnail from "./_components/Thumbnail"

import { getRegExp } from 'korean-regexp'
import { useNavigate, useSearchParams } from 'react-router'
import Searchbar from '../../components/Searchbar'

import { useMemo } from 'react'
import MainPageSkeleton from "./MainPageSkeleton"

const MainPage = () => {
  const [searchParams, _setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const doFilterHeart = useSelector((state) => state.doFilterHeartState)

  const filterText = useMemo(() => searchParams.get("name") ?? "", [searchParams])
  const regExp = useMemo(() => getRegExp(filterText.trim()), [filterText])

  const isVisibleArray = useMemo(
    () => pokemonArray.map((pokemon) => {
      if (!doFilterHeart) {
        return !!pokemon.name.match(regExp)
      }

      return !!pokemon.name.match(regExp) && pokemon.doLike
    }),
    [pokemonArray, doFilterHeart, regExp]
  )

  if (pokemonArray.length === 0) { return <MainPageSkeleton /> }

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
      <Searchbar />
      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-x-hidden overflow-y-scroll">
        
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {pokemonArray.map((pokemon, index) => (
            <div key={index} onClick={() => navigate(`/${pokemon.pokemonIndex}`)} className={`${!isVisibleArray[index] && "hidden"}`}>
              <Thumbnail pokemon={pokemon} />
            </div>
          ))}
        </section>

      </div>
    </div>
  )
}

export default MainPage