
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Day1 from './pages/Day1'
import Day2 from './pages/Day2'
import Day3 from './pages/Day3'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Day1/>} />
        <Route path="day1" element={<Day1 />} />
        <Route path="day3" element={<Day3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
