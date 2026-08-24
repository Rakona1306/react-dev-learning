import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "../components/atoms/button";
import Timer from "../components/atoms/timer";
import Hijo from "../components/atoms/hijo";
import { NombreContext, NombreProvider } from "../context/NombreContext";
import useFetch from "../hooks/useFetch";
import PostItem from "../components/atoms/post-item";
import { useNavigate } from "react-router-dom";

export default function Day5() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate()

  const { nombre1 } = useContext(NombreContext) || {}

  const { data, loading, error } = useFetch()

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

  // FUNCION 3
  const fn1 = useCallback(() => {
    setCount(count + 1);
  }, ['diego'])

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

      <div>
        <Button onClick={() => {
          navigate('/day6')
        }}>
          VE AL DIA 6
        </Button>
      </div>
      <div>
        {
          loading ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>Hubo un error fatal!</p>
          ) : (
            <div className='flex flex-col gap-5'>
              {
                data.map((post) => (
                  <PostItem {...post} />
                ))
              }
            </div>
          )
        }
      </div>


      {/* showTimer && <Timer /> */}
    </div>
  );
}
