import { useDispatch, useSelector } from 'react-redux'
import HeartIcon from "./HeartIcon"

const HeartButton = ({ pokemon, isBig }) => {
    const { doLike } = pokemon

    const dispatch = useDispatch()
    const toggleLike = () => dispatch({ type: "pokemonArray/toggleLike", pokemon })
    const handleClick = (event) => {
        event.stopPropagation()
        toggleLike()
    }

    const calcTopRight = (pixel) => `top-[${pixel}px] right-[${pixel}px]`
    const topRight = isBig ? calcTopRight(12) : calcTopRight(4)

    const baseStyle = "h-[48px]"
    const color = doLike ? "text-red-500" : "text-red-800"
    const style = `${baseStyle} ${color}`

    return (
        <>
            <div onClick={handleClick} className={`absolute ${topRight}`}>
                <HeartIcon style={style} doLike={doLike} />
            </div>
        </>
    )
}

export default HeartButton