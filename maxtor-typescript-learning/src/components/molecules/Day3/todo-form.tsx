import { useState, useRef, useId } from "react";
interface todoFormProps {
  onAddTodo: (text: string) => void;
}
export default function TodoForm({ onAddTodo }: todoFormProps) {
  const [text, setText] = useState("");
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text.trim());
    setText("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>Nueva Tarea</label>
      <input
        id={inputId}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
