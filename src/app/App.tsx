import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from '@/features/cart/context/useCartContext'

import AppRouter from './router'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
