import { Button } from '../../../components/atoms/button/button'

import './counter-controls.css'

export const CounterControls = ({
    onIncrementar,
    onDecrementar,
    onReiniciar,
    onMostrarClics
}) => {

    return (
        <div className="counter-controls">

            <Button
                texto="Aumentar"
                onClick={onIncrementar}
            />

            <Button
                texto="Disminuir"
                onClick={onDecrementar}
            />

            <Button
                texto="Reiniciar"
                onClick={onReiniciar}
            />

            <Button
                texto="Mostrar cantidad de clics"
                onClick={onMostrarClics}
            />

        </div>
    )
}