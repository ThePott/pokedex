import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HeartButton from '../../components/HeartButton'

const commonFlipSx = {
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  transitionTimingFunction: "cubic-bezier(.01,.81,.09,1.13)"
}

const imgFlipSx = {
  ...commonFlipSx,
  backfaceVisibility: "hidden",
}

const FrontBackImage = ({ pokemon, isFront }) => {
  const baseStyle = "flex-1 absolute w-full h-full object-contain"
  const frontStyle = `${baseStyle} ${isFront ? "" : "rotate-y-180"}`
  const backStyle = `${baseStyle} ${!isFront ? "" : "rotate-y-180"}`

  return (
    <div className="relative select-none flex-1 w-full">
      <img style={imgFlipSx} src={pokemon.front} alt={`${pokemon.name}__front`} className={frontStyle} />
      <img style={imgFlipSx} src={pokemon.back} alt={`${pokemon.name}__back`} className={backStyle} />
    </div>
  )
}

const FlippingBackground = ({ isFront }) => {
  return (
    <div style={{ ...commonFlipSx, transform: `rotateY(${isFront ? 0 : 180}deg)` }}
      className="bg-amber-600 w-[600px] h-[600px] rounded-3xl absolute top-0 left-0 -z-10"></div>
  )
}

const DetailPage = () => {
  const [isFront, setIsFront] = useState(true)
  const params = useParams()

  if (!params) { return null }

  const pokemonIndex = Number(params.pokemonIndex) ?? 1
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const pokemon = pokemonArray.find((pokemon) => pokemon.pokemonIndex === pokemonIndex)

  if (!pokemon) { return <h2>... is loading ...</h2> }

  const buttonText = isFront ? "등이 가려워!" : "배가 가려워!"

  return (
    <div className="w-[600px] h-[600px] flex flex-col items-center rounded-3xl overflow-hidden py-3 px-16 gap-3 mx-auto mt-15 relative">
      <FlippingBackground isFront={isFront} />
      <HeartButton pokemon={pokemon} isBig={true} />

      <h2 className="text-4xl font-semibold">{pokemon.name}</h2>
      <p className="text-xl break-keep">{pokemon.text}</p>

      <FrontBackImage pokemon={pokemon} isFront={isFront} />

      <button onClick={() => setIsFront((prev) => !prev)}
        className="p-6 bg-amber-900 rounded-3xl text-xl">{buttonText}</button>

    </div>
  )
}

export default DetailPage