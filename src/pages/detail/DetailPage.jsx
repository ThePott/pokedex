import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HeartButton from '../../components/HeartButton'

const DetailPage = () => {
  const [isFront, setIsFront] = useState(true)
  const params = useParams()

  if (!params) { return null }

  const pokemonIndex = Number(params.pokemonIndex) ?? 1
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const pokemon = pokemonArray.find((pokemon) => pokemon.pokemonIndex === pokemonIndex)

  if (!pokemon) { return <h1>... is loading ...</h1> }

  const src = isFront ? pokemon.front : pokemon.back
  const alt = `${pokemon.name}__${isFront ? "front" : "back"}`

  const buttonText = isFront ? "등이 가려워!" : "배가 가려워!"

  return (
    <div className="bg-amber-600 w-[600px] h-[600px] flex flex-col items-center rounded-3xl overflow-hidden py-3 px-16 gap-3 mx-auto mt-15 relative">
      <HeartButton pokemon={pokemon} isBig={true} />
      <h2 className="text-4xl font-semibold">{pokemon.name}</h2>
      <p className="text-xl break-keep">{pokemon.text}</p>
      <img src={src} alt={alt} className="flex-1 select-none" />
      <button onClick={() => setIsFront((prev) => !prev)}
        className="p-6 bg-amber-900 rounded-3xl text-xl">{buttonText}</button>
    </div>
  )
}

export default DetailPage