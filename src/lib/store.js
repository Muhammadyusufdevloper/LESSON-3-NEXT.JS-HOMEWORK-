import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import wishlistSlice from './features/wishlist/wishlistSlice'
import cartSlice from './features/cart/cartSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            like: wishlistSlice,
            cart: cartSlice,
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    })
}
