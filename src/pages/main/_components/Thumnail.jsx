import { useState } from "react"

const Thumnail = ({ front, name }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  
  const baseStyle = "p-3 w-full text-center text-xl font-semibold transition"
  const nameTagBg = isMouseOver ? "bg-amber-950" : "bg-amber-800"
  const style = `${baseStyle} ${nameTagBg}`
  
  return (
    <div className="bg-amber-300 h-[200px] flex flex-col items-center rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>
      <img src={front} alt={name} className="flex-1" />
      <p className={style}>
        {name}
      </p>
    </div>
  )
}

export default Thumnail