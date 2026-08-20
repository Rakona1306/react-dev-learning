import { useEffect } from "react";

export default function Timer() {

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return <div>
    Estoy contando actualmente
  </div>;
}