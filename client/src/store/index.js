import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import { localStorageMiddleware, reHydrateStore } from './middleware';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

export default store