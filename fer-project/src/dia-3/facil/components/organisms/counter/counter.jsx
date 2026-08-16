import { useRef, useState } from 'react'
import './counter.css'
import { CounterControls } from '../../molecules/counter-controls/counter-controls'

export const Counter = () => {

    const [contador, setContador] = useState(0)

    const totalClics = useRef(0)

    const handleIncrementar = () => {
        setContador(contador + 1)
        totalClics.current += 1
    }

    const handleDecrementar = () => {
        setContador(contador - 1)
        totalClics.current += 1
    }

    const handleReiniciar = () => {
        setContador(0)
        totalClics.current += 1
    }

    const handleMostrarClics = () => {
        alert(`Total de clics presionados: ${totalClics.current}`)
    }

    return (
        <section className="counter">

            <h2>Valor actual: {contador}</h2>

            <CounterControls
                onIncrementar={handleIncrementar}
                onDecrementar={handleDecrementar}
                onReiniciar={handleReiniciar}
                onMostrarClics={handleMostrarClics}
            />

        </section>
    )
}