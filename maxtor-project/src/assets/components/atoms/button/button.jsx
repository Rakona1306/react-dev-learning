import React from "react";
import { useState } from "react"; // libreria necesaria para usar estados
import { useRef } from "react"; // usar referencias

export default function Button({message}) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  function handleClickRef() {
    ref.current += 1;
  }
  function handleClickPlus() {
    // es buena practica usar "handle + evento" en el nombre de la funcion
    setCount(count + 1); //set solo puede ser usado dentro de la funcion donde el estado fue declarado
    // alert(count); el valor sera del anterior renderizado
    // setCount(count => count + 1) de esta manera al imprimirlo si se actualizara
    handleClickRef()
  }

  return (
    <div>
      <button onClick={handleClickPlus}> sumar</button> {/* para abrir y */}
      <button onClick={() => setCount(count - 1)}> restar</button>{" "}
      {/* prueba con operador flecha*/}
      <button onClick={() => setCount(0)}> reiniciar</button>
      <h1>{count}</h1>
      <h1>{ref.current}</h1>
      <h1>{message}</h1>
    </div>
  );
  // se puede usar el operador flecha en los eventos () => {setCount(count+1)}
  // preguntar si es posible enviar "eventos" por props
}
