import './task-item.css';

interface TaskItemProps {
  children: string;
}
export default function TaskItem({ children }: TaskItemProps) {
    const isLarge = children.length > 20;
 
    return (
    <div className={`TaskItem ${isLarge ? "LargeTask" : "ShortTask"}`}>
      <p>{`${children} ${isLarge ? "LargeTask" : "ShortTask"}`}</p>
    </div>
  );
}