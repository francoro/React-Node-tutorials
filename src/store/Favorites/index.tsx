import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, { payload }) => {
           state.favorites.push(payload)
        },
        removeFavorite: (state, {payload}) => {
            state.favorites = state.favorites.filter((item) => item !== payload)
        }
    }
})

export const {
    addFavorite,
    removeFavorite
} = favorites.actions

export default favorites.reducer