import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: '',
    password: '',
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        loggedIn: (state) => {
            state.isLoggedIn = true
        },
        loggedOut: (state) => {
            state.isLoggedIn = false
        },
    }
})

export const { setLogin, setPassword, loggedIn, loggedOut } = authSlice.actions

export default authSlice.reducer