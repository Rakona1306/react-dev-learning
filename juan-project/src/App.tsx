
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Day1 from './pages/day1'

function App() {

  return (
    <div className='h-screen w-full bg-gray-900 text-white'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Day1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
