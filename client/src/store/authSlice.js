import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))
const authSlice = createSlice({
    name: user ? user : 'auth',
    initialState: {
        user: null,
        isFetching: true,
        error: null,
        message: "",
    },
    reducers: {
        Regitster(state, action) {
            state.user = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        Login(state, action) {
            state.user = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        UpdateSuccess(state, action) {
            state.user = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        errorNotification(state, action) {
            state.error = {
                message: action.payload.message,
                open: action.payload.open
            }
        },
        Logout(state, action) {
            state.isFetching = false;
            state.error = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;