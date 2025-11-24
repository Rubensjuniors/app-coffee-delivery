import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Button>Home</Button></>} />
        <Route path="/teste" element={<><Button>Home 1</Button></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
