import { useDispatch } from "react-redux"
import { getAllPokemon } from "../_utils/apiUtils"
import { useEffect } from "react"

const usePokemon = () => {
    const dispatch = useDispatch()
    const setPokemonArray = (pokemonArray) => dispatch({ type: "pokemonArray/setPokemonArray", pokemonArray })

    useEffect(() => { getAllPokemon(setPokemonArray) }, [])
}

export { usePokemon }