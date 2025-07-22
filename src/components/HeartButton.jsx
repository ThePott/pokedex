import { useDispatch } from 'react-redux'
import HeartIcon from "./HeartIcon"

const HeartButton = ({ pokemon, isBig }) => {
    const { doLike } = pokemon

    const dispatch = useDispatch()
    const toggleLike = () => dispatch({ type: "pokemonArray/toggleLike", pokemon })
    const handleClick = (event) => {
        event.stopPropagation()
        toggleLike()
    }

    const size = isBig ? "h-[40px]" : "h-[30px]"
    const color = doLike ? "text-red-500" : "text-red-800"
    const style = `${size} ${color}`

    const padding = isBig ? "p-6" : "p-2"
    const containerStyle = `absolute top-0 right-0 ${padding}`

    return (
        <>
            <div onClick={handleClick} className={containerStyle}>
                <HeartIcon style={style} doLike={doLike} />
            </div>
        </>
    )
}

export default HeartButton