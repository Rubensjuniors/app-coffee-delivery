import { Outlet } from 'react-router-dom'

import { Header } from '@/features/structor/components/header'

export default function Structor() {
  return (
    <div className="w-full min-h-screen px-4">
      <Header />

      <main className="pb-8">
        <Outlet />
      </main>
    </div>
  )
}
