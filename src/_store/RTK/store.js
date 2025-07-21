import { configureStore, createSlice } from "@reduxjs/toolkit";
import { pokemonArraySlice, filterTextSlice, doFilterHeartSlice } from "./slices"

const store = configureStore({
    reducer: {
        pokemonArrayState: pokemonArraySlice.reducer,
        filterTextState: filterTextSlice.reducer,
        doFilterHeartState: doFilterHeartSlice.reducer,
    }
})

export default store