import { useRef, useState } from "react";
import CounterControls from "../../../molecules/Day3/counter-controls";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [totalClics, setTotalClics] = useState(0);
  const totalClicsRef = useRef(0);

  const registrarClic = () => {
    totalClicsRef.current += 1;
  };

  const handleMostrarClics = () => {
    setTotalClics(totalClicsRef.current);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    registrarClic();
  };
  const handleDecrement = () => {
    setCount(count - 1);
    registrarClic();
  };
  const handleReset = () => {
    setCount(0);
    registrarClic();
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-3 ">
      <CounterControls
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onMostrarClics={handleMostrarClics}
      />
      <p className="text-2xl font-bold bg-amber-50 text-shadow-amber-100">
        {count}
      </p>
      <p className="text-2xl font-bold bg-amber-50 text-shadow-amber-100">
        Total Clics: {totalClics}
      </p>
    </section>
  );
}
