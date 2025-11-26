import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Structor = lazy(() => import('../layouts/Structor'))
const HomePage = lazy(() => import('../pages/Home'))
const CheckoutPage = lazy(() => import('../pages/Checkout'))
const SuccessPage = lazy(() => import('../pages/Success'))

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Structor />}>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
