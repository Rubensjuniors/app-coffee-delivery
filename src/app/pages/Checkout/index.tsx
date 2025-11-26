import { useCartContext } from '@/features/cart/context/useCartContext'

export default function Checkout() {
  const { selectedCoffee } = useCartContext()
  return <>{JSON.stringify(selectedCoffee)}</>
}
