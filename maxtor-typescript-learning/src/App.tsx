
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>Home</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
