import Button from "../../atoms/button/button-m";

interface CounterControlsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  onMostrarClics: () => void;
}
export default function CounterControls({ onIncrement, onDecrement, onReset, onMostrarClics }: CounterControlsProps) {
return (
    <div>
      <Button variante="primary" onClick={onIncrement}>Incrementar</Button>
      <Button variante="primary" onClick={onDecrement}>Decrementar</Button>
      <Button variante="danger" onClick={onReset}>Resetear</Button>
      <Button variante="primary" onClick ={onMostrarClics}>Mostrar Clics</Button>
    </div>
  );
}