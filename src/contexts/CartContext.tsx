import { createContext, useContext, useState, ReactNode } from 'react'
import { ItemCarrinho, Prato } from '../types'

type CartContextType = {
  items: ItemCarrinho[]
  isOpen: boolean
  addItem: (prato: Prato) => void
  removeItem: (id: number) => void
  openCart: () => void
  closeCart: () => void
  total: number
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<ItemCarrinho[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (prato: Prato) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === prato.id)
      if (exists) {
        return prev.map((i) =>
          i.id === prato.id ? { ...i, quantidade: i.quantidade + 1 } : i
        )
      }
      return [...prev, { ...prato, quantidade: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const total = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0)

  return (
    <CartContext.Provider
      value={{ items, isOpen, addItem, removeItem, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false), total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
