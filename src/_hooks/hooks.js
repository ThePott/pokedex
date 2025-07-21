import { useDispatch } from "react-redux"
import { getAllPokemon } from "../_utils/apiUtils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

/** mount -> fetch pokemons */
const usePokemon = () => {
    const dispatch = useDispatch()
    const setPokemonArray = (pokemonArray) => dispatch({ type: "pokemonArray/setPokemonArray", pokemonArray })

    useEffect(() => { getAllPokemon(setPokemonArray) }, [])
}

/** input change -> throttle -> filter pokemon name */
const useThrottle = (delay) => {
    const [text, setText] = useState("")

    const startRef = useRef(new Date())

    const dispatch = useDispatch()

    const setFilterText = useCallback(
        () => dispatch({ type: "filterText/setFilterText", filterText: text }),
        [text]
    )

    const remainingDelay = useMemo(
        () => delay - (new Date() - startRef.current),
        [text]
    )

    useEffect(
        () => {
            const timeout = setTimeout(
                () => {
                    setFilterText()
                    startRef.current = new Date()

                    return () => clearTimeout(timeout)
                },
                remainingDelay
            )
        },
        [text]
    )

    return { setText }
}

export { usePokemon, useThrottle }