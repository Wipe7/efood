import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato, ItemCarrinho } from '../types'

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
  items: ItemCarrinho[]
  isOpen: boolean
  step: CheckoutStep
  orderResponse: { orderId: string; message: string } | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart',
  orderResponse: null,
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
      state.step = 'cart'
    },
    setStep(state, action: PayloadAction<CheckoutStep>) {
      state.step = action.payload
    },
    setOrderResponse(state, action: PayloadAction<{ orderId: string; message: string }>) {
      state.orderResponse = action.payload
      state.step = 'confirmation'
    },
    clearCart(state) {
      state.items = []
      state.step = 'cart'
      state.orderResponse = null
    },
  },
})

export const { addItem, removeItem, openCart, closeCart, setStep, setOrderResponse, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
