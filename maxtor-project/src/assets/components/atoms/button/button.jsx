import React from "react";
import { useState } from "react"; // libreria necesaria para usar estados
import { useRef } from "react"; // usar referencias

export default function Button({ message }) {
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
    handleClickRef();
  }

  return (
    <div>
      <ButtonAction label="sumar" onClick={handleClickPlus} />
      <ButtonAction label = "restar" onClick={()=> setCount(count -1)} />
        <ButtonAction2 onClick={()=> setCount(count -1)}>
            <h2>Hello world</h2>
            <p>llamando desde children</p>
        </ButtonAction2>

      <button onClick={() => setCount(0)}> reiniciar</button>
      <p>{count}</p>
      <p>{ref.current}</p>
      <p>{message}</p>
    </div>
  );

  // se puede usar el operador flecha en los eventos () => {setCount(count+1)}
  // preguntar si es posible enviar "eventos" por props
}
function ButtonAction({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
function ButtonAction2({onClick, children}){
    return(
        <button onClick={onClick} >{children}</button>

    );
}
