import React, { useState } from "react"
import HeartButton from "../../../components/HeartButton"

const Thumbnail = React.memo(({ pokemon, isVisible }) => {
  if (pokemon.pokemonIndex === 1) {
    console.log("---- rerender:", pokemon.name, isVisible)
  }

  const { front, name } = pokemon
  const [isMouseOver, setIsMouseOver] = useState(false)

  const containerBaseStyle = "bg-amber-300 h-[200px] flex flex-col items-center rounded-3xl overflow-hidden cursor-pointer relative"
  const containerVisibilityStyle = isVisible ? "" : "hidden"
  const containerStyle = `${containerBaseStyle} ${containerVisibilityStyle}`

  const nameBaseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-amber-950" : "bg-amber-800"
  const nameStyle = `${nameBaseStyle} ${nameTagBg}`

  return (
    <div className={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>

      <HeartButton pokemon={pokemon} isBig={false} />
      <img src={front} alt={name} className="flex-1 select-none" />
      <p className={nameStyle}>
        {name}
      </p>

    </div>
  )
})

export default Thumbnail