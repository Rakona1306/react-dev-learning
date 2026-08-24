import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Day1 from "./pages/day1";
import Day2 from "./pages/day2";
import Day3 from "./pages/day3";
import Day4 from "./pages/day4";

function App() {
  return (
    <div className="bg-gray-900 w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="Day1" element={<Day1 />} />
          <Route path="Day2" element={<Day2 />} />
          <Route path="Day3" element={<Day3 />} />
          <Route path="Day4" element={<Day4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
