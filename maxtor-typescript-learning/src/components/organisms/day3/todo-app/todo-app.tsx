import { useState } from "react";
import TodoForm from "../../../molecules/Day3/todo-form";
import TodoList from "../../../molecules/Day3/todo-list";
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((PrevTodos) => [...PrevTodos, newTodo]);
  };
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      }),
    );
  };

  // Pista 3: Eliminar una tarea conservando solo las que tengan ID diferente
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id != id)
    );
  };

  // Pista 4: Métricas calculadas en cada renderizado
  const totalTareas = todos.length;
  const tareasCompletadas = todos.filter((todo) => todo.completed).length;

  return (
    <section className="todo-app">
      <h2>Lista de Tareas</h2>

      <div className="todo-app-stats">
        <p>Total: {totalTareas}</p>
        <p>Completadas: {tareasCompletadas}</p>
      </div>

      <TodoForm onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </section>
  );
}
