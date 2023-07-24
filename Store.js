import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import restaurentSlice from './slices/restaurentSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurent: restaurentSlice
  },
})