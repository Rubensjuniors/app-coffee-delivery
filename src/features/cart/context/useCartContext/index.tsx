import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import type { CartContextType, CartProviderProps, ISelectedCoffee } from './types'

const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [selectedCoffee, setSelectedCoffee] = useState<ISelectedCoffee[]>(() => {
    const item = localStorage.getItem('persitedCart')

    return item ? JSON.parse(item) : ([] as ISelectedCoffee[])
  })

  const handleSelectedCoffee = useCallback((item: ISelectedCoffee) => {
    setSelectedCoffee((prev) => {
      const alreadyExists = prev.some((coffee) => coffee.id === item.id)
      if (alreadyExists) return prev

      const newArray = [...prev, item]
      localStorage.setItem('persitedCart', JSON.stringify(newArray))
      return newArray
    })
  }, [])

  const value = useMemo(() => {
    return {
      selectedCoffee,
      handleSelectedCoffee
    }
  }, [selectedCoffee, handleSelectedCoffee])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartContext is error.')
  }
  return context
}
