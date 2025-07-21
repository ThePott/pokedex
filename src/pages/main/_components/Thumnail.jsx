import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

const Thumnail = ({ pokemon }) => {
  const { front, name, pokemonIndex, doLike } = pokemon
  const [isMouseOver, setIsMouseOver] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const toggleLike = () => dispatch({ type: "pokemonArray/toggleLike", pokemon })

  const baseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-amber-950" : "bg-amber-800"
  const style = `${baseStyle} ${nameTagBg}`

  const handleClick = (event) => {
    event.stopPropagation()
    toggleLike()
  }

  const likeButtonStyle = `p-3 ${doLike ? "bg-red-500" : "bg-red-100"}`

  return (
    <div className="bg-amber-300 h-[200px] flex flex-col items-center rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => navigate(`/${pokemonIndex}`)}>
      <button className={likeButtonStyle} onClick={handleClick}>찜</button>
      <img src={front} alt={name} className="flex-1" />
      <p className={style}>
        {name}
      </p>
    </div>
  )
}

export default Thumnail