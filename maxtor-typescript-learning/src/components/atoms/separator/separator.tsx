import "./separator.css";
interface SeparatorProps {
  margin: string;
  children: string
}

export default function Separator({ margin, children }: SeparatorProps) {
  return <div className={`Separator mt-${margin}`}>{children}</div>;
}
