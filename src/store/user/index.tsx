import { createSlice } from '@reduxjs/toolkit'
import initialState, { UserState } from './initialState'

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state: UserState, { payload }: any) => {
            state.user = payload[0].user
        }
    }
})

export const {
    saveUser,
} = user.actions

export default user.reducer