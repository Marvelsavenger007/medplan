import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Medplan from './pages/Medplan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Medplan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
