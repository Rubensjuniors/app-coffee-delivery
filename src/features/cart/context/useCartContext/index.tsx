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

  const handleIncreaseSelectedCoffee = useCallback((id: string) => {
    setSelectedCoffee((prev) => {
      const updatedArray = prev.map((coffee) => {
        if (coffee.id === id) {
          const newCount = coffee.count < coffee.coffeeLimit ? coffee.count + 1 : coffee.coffeeLimit
          return { ...coffee, count: newCount }
        }

        return coffee
      })

      localStorage.setItem('persitedCart', JSON.stringify(updatedArray))
      return updatedArray
    })
  }, [])

  const handleDecreaseSelectedCoffee = useCallback((id: string) => {
    setSelectedCoffee((prev) => {
      const updatedArray = prev.map((coffee) => {
        if (coffee.id === id) {
          const newCount = coffee.count > 1 ? coffee.count - 1 : 1
          return { ...coffee, count: newCount }
        }

        return coffee
      })

      localStorage.setItem('persitedCart', JSON.stringify(updatedArray))
      return updatedArray
    })
  }, [])

  const handleRemoveSelectedCoffee = useCallback((id: string) => {
    setSelectedCoffee((prev) => {
      const updatedArray = prev.filter((coffee) => coffee.id !== id)

      localStorage.setItem('persitedCart', JSON.stringify(updatedArray))
      return updatedArray
    })
  }, [])

  const handleClearCart = useCallback(() => {
    setSelectedCoffee([])
    localStorage.removeItem('persitedCart')
  }, [])

  const frete = 3.5
  const totalOrders = useMemo(
    () => selectedCoffee.reduce((total, item) => total + item.price * item.count, 0),
    [selectedCoffee]
  )
  const total = totalOrders + frete

  const hasProductsAtCart = selectedCoffee.length > 0

  const value = useMemo(() => {
    return {
      selectedCoffee,
      handleSelectedCoffee,
      handleIncreaseSelectedCoffee,
      handleDecreaseSelectedCoffee,
      handleRemoveSelectedCoffee,
      handleClearCart,
      frete,
      totalOrders,
      total,
      hasProductsAtCart
    }
  }, [
    selectedCoffee,
    handleSelectedCoffee,
    handleIncreaseSelectedCoffee,
    handleDecreaseSelectedCoffee,
    handleRemoveSelectedCoffee,
    handleClearCart,
    frete,
    totalOrders,
    total,
    hasProductsAtCart
  ])
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
