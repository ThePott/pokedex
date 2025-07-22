import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import HeartButton from "../../../components/HeartButton"

const Thumbnail = ({ pokemon }) => {
  const { front, name, pokemonIndex, doLike } = pokemon
  const [isMouseOver, setIsMouseOver] = useState(false)
  const navigate = useNavigate()

  
  const baseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-amber-950" : "bg-amber-800"
  const style = `${baseStyle} ${nameTagBg}`
  
  const dispatch = useDispatch()
  const toggleLike = () => dispatch({ type: "pokemonArray/toggleLike", pokemon })
  const handleClick = (event) => {
    event.stopPropagation()
    toggleLike()
  }

  return (
    <div className="bg-amber-300 h-[200px] flex flex-col items-center rounded-3xl overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => navigate(`/${pokemonIndex}`)}>

      <HeartButton pokemon={pokemon} isBig={false} />
      <img src={front} alt={name} className="flex-1 select-none" />
      <p className={style}>
        {name}
      </p>
      
    </div>
  )
}

export default Thumbnail