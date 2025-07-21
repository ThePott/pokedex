import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokemonArraySlice = createSlice({
    name: "pokemonArray",
    initialState: [],
    reducers: {
        setPokemonArray(_state, action) { return action.pokemonArray },
    }
})

const filterTextSlice = createSlice({
    name: "filterText",
    initialState: "",
    reducers: {
        setFilterText(_state, action) { return action.filterText }
    }
})

const store = configureStore({
    reducer: {
        pokemonArrayState: pokemonArraySlice.reducer,
        filterTextState: filterTextSlice.reducer,
    }
})

export default store