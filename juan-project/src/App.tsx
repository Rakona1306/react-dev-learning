
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Day1 from './pages/day1'
import Day5 from './pages/day5'
import { NombreProvider } from './context/NombreContext'

function App() {

  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Day1 />} />
          <Route path="/day5" element={<NombreProvider><Day5 /></NombreProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
