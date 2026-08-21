import "./button-m.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;

}

export default function Button({ children, onClick}: ButtonProps) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
