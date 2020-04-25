import { createSlice } from '@reduxjs/toolkit'
import initialState, { UserState } from './initialState'

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, { payload }: any) => {
            state.user = payload
        }
    }
})

export const {
    saveUser,
} = user.actions

export default user.reducer