import "./button-m.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variante : string;

}

export default function Button({ children, onClick, variante }: ButtonProps) {
  return (
    <button className={`button button-${variante}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
