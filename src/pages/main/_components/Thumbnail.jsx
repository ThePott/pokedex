import React, { useState } from "react"
import HeartButton from "../../../components/HeartButton"

const Thumbnail = React.memo(({ pokemon }) => {
  const { front, name } = pokemon
  const [isMouseOver, setIsMouseOver] = useState(false)

  const containerBaseStyle = "bg-zinc-700 h-[200px] flex flex-col items-center rounded-3xl overflow-hidden cursor-pointer relative"
  const containerStyle = `${containerBaseStyle}`

  const nameBaseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-zinc-950" : "bg-zinc-800"
  const nameStyle = `${nameBaseStyle} ${nameTagBg}`

  return (
    <div className={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>

      <HeartButton pokemon={pokemon} isBig={false} />
      <img src={front} alt={name} className="flex-1 select-none scale-200" />
      <p className={nameStyle}>
        {name}
      </p>

    </div>
  )
})

export default Thumbnail