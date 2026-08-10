
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ejercicio1 from './pages/Ejercicio1'
import Day3 from './pages/Day3'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ejercicio1 />} />
        <Route path="day3" element={<Day3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
