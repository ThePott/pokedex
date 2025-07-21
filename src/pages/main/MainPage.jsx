import { useDispatch, useSelector } from 'react-redux'
import { usePokemon } from '../../_hooks/hooks'

const MainPage = () => {
  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const dispatch = useDispatch()
  const setPokemonArray = (pokemonArray) => dispatch({type: "pokemonArray/setPokemonArray", pokemonArray})

  usePokemon()
  console.log("---- pokemon array in main:", pokemonArray.length)

  return (
    <>
      <div>MainPage</div>
      <button onClick={() => {console.log("---- pokemon array:", pokemonArray)}}>log pokemon array</button>
      <br />
      <button onClick ={() => {
        setPokemonArray([1,2,3])
      }}>test button</button>
    </>
  )
}

export default MainPage