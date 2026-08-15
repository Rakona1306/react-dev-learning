import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/index.css";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";


function App() {
  return (
    <div className="w-full h-screen bg-slate-700">
      <BrowserRouter>
        <Routes>
          <Route path='' element = {<Day1/>} />
            <Route path='Day2' element = {<Day2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
