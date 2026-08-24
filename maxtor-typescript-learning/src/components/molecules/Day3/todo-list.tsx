import TodoItem from "../../atoms/todo-item/todo-item";

interface todoProps {
  id: string;
  title: string;
  completed: boolean;
}
interface todoListProps {
  todos: todoProps[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
export default function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: todoListProps) {
  if (todos.length === 0) {
    return <p>no hay tareas creadas</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
}
