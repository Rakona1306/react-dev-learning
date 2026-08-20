import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../components/atoms/button";
import Timer from "../components/atoms/timer";
import Hijo from "../components/atoms/hijo";
import { NombreContext, NombreProvider } from "../context/NombreContext";

export default function Day5() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { nombre1 } = useContext(NombreContext) || {}

  /*
  useEffect(() => {
    console.log("NACIO EL COMPONENTE");
  }, []);

  useEffect(() => {
    console.log(`Ahora valgo ${count}`);
  }, [count]);

  useLayoutEffect(() => {
    if (tooltipRef.current && containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      tooltipRef.current.style.top = `-${height}px`;
    }
  }, []);
  */

  // FUNCION 1
  const fn1 = useCallback(() => {
    setCount(count + 1);
  }, [])

  // FUNCION 2
  const fn2 = () => {
    setCount(count + 1);
  }

  console.log('Renderizando Padre')

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-5">
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Aumentar
        </Button>
        <Button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "No mostrar el timer" : "Prender Timer"}
        </Button>
      </div>

      <div className="mt-30 flex justify-center">
        <div className="relative" ref={containerRef}>
          <div className="w-2xs h-25 bg-white text-black">Hola Mundo</div>

          <div className="absolute" ref={tooltipRef}>
            {nombre1}
          </div>
        </div>
      </div>

      <div className="mt-30 text-3xl text-center">
          {(fn1 === fn2) ? "true" : "false"}
      </div>

      <div className="flex gap-5 justify-center mt-5">
          
            <Hijo onClick={fn1} nombre="Luis" />
          
      </div>



      {/* showTimer && <Timer /> */}
    </div>
  );
}
