import type { ReactNode } from 'react'

export type ISelectedCoffee = {
  id: string
  image: string
  name: string
  count: number
}

export interface CartContextType {
  selectedCoffee: ISelectedCoffee[]
  handleSelectedCoffee: (item: ISelectedCoffee) => void
}

export interface CartProviderProps {
  children: ReactNode
}
