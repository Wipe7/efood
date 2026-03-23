import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato, ItemCarrinho } from '../types'

type CartState = {
  items: ItemCarrinho[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Prato>) {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        existing.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
      state.isOpen = true
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
  },
})

export const { addItem, removeItem, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer
