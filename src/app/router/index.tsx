import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'

const Structor = lazy(() => import('../layouts/Structor'))
const HomePage = lazy(() => import('../pages/Home'))

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Structor />}>
        <Route index element={<HomePage />} />
        <Route
          path="checkout"
          element={
            <>
              <Button>checkout</Button>
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default AppRouter
