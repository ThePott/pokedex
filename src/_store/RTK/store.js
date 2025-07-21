import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokemonArraySlice = createSlice({
    name: "pokemonArray",
    initialState: [],
    reducers: {
        setPokemonArray(_state, action) {
            const pokemonArray = action.pokemonArray
            console.log("---- pokemon array in store:", action.pokemonArray.length)
            return pokemonArray
        },
    }
})

const store = configureStore({
    reducer: {
        pokemonArrayState: pokemonArraySlice.reducer
    }
})

export default store