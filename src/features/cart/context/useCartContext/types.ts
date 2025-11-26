import type { ReactNode } from 'react'

export type ISelectedCoffee = {
  id: string
  image: string
  name: string
  price: number
  coffeeLimit: number
  count: number
}

export interface CartContextType {
  selectedCoffee: ISelectedCoffee[]
  handleSelectedCoffee: (item: ISelectedCoffee) => void
  handleIncreaseSelectedCoffee: (id: string) => void
  handleDecreaseSelectedCoffee: (id: string) => void
  handleRemoveSelectedCoffee: (id: string) => void
  handleClearCart: () => void
  frete: number
  totalOrders: number
  total: number
  hasProductsAtCart: boolean
}

export interface CartProviderProps {
  children: ReactNode
}
