import { useState } from 'react'
import { useThrottle } from '../_hooks/hooks'
import MagnifyingGlassIcon from "./MagnifyingGlassIcon"
import HeartFilterButton from "./HeartFilterButton"

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const { setText } = useThrottle(100)

  
  const iconBaseStyle = "h-[30px] transition"
  const iconColor = `${isFocused ? "text-zinc-300" : "text-zinc-600"}`
  const iconStyle = `${iconBaseStyle} ${iconColor}`
  
  const containerBaseStyle = "flex items-center gap-3 p-3 rounded-3xl border-1 transition"
  const borderColor = `${isFocused ? "border-zinc-300" : "border-zinc-600"}`
  const containerStyle = `${containerBaseStyle} ${borderColor}`

  return (
    <div className={containerStyle}>
      <MagnifyingGlassIcon style={iconStyle} />
      <input type="text"
        onChange={(event) => setText(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-3 outline-0 "
      />
      <HeartFilterButton />
    </div>
  )
}

export default Searchbar