import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authSerivce from './authService';

// register 
// export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
//     try{
//         await authSerivce.register(user);
//     }catch(err) {
//         const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
// })

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
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(register.pending, (state) => {
    //             state.isFetching = true;
    //             state.error = false;
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
    //             state.isFetching = false;
    //             state.user = action.payload
    //         })
    //         .addCase(register.rejected, (state, action) => {
    //             state.isFetching = false;
    //             state.error = true;
    //             state.message = action.payload;
    //         })
    // }
})

export const authActions = authSlice.actions;
export default authSlice;