import { useState } from 'react'
import { useThrottle } from '../_hooks/hooks'
import MagnifyingGlassIcon from "./MagnifyingGlassIcon"

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const { setText } = useThrottle(100)
  
  const color = `${isFocused ? "zinc-400" : "zinc-500"}`
  
  const iconBaseStyle = "h-[48px] transition"
  const iconStyle = `${iconBaseStyle} text-${color}`
  
  const containerBaseStyle = "flex gap-3 rounded-3xl border-1 transition"
  const containerStyle = `${containerBaseStyle} border-${color}`

  return (
    <div className={containerStyle}>
      <MagnifyingGlassIcon style={iconStyle} />
      <input type="text"
        onChange={(event) => setText(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-3 outline-0 " />
    </div>
  )
}

export default Searchbar