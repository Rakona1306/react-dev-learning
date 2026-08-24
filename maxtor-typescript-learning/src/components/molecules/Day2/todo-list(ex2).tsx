import TaskItem from "../../atoms/task-item/task-item";

interface TodoListProps {
  className?: string;
  tareas: string[];
}
export default function TodoList({ className, tareas }: TodoListProps) {
  if(!tareas || tareas.length === 0) {
    return (
      <div className={className}>
        <p>No tasks to display.</p>
      </div>
    );
  }
  return (
    <div className={className}>
      {tareas.map((tarea, index) => (
        <TaskItem key={index} >
          {tarea}
        </TaskItem>
      ))}
    </div>
  );
}