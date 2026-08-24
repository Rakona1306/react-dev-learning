import './todo-item.css'
interface todoProps{
    id: string;
    title: string;
    completed: boolean;
}
interface todoItemProps{
    todo: todoProps;
    onToggle : (id : string) => void
    onDelete: (id : string) => void
}
export default function TodoItem({todo,onToggle,onDelete}:todoItemProps){
    return(

        <li className='todo-item'>
            <label className={todo.completed ? 'todo-item-completed' : ''}>
                <input type="checkbox" checked = {todo.completed} onChange={() => onToggle(todo.id)}/>
            {todo.title}
            </label>
            <button onClick={() => onDelete(todo.id)}>Eliminar</button>
        </li>
    );
}