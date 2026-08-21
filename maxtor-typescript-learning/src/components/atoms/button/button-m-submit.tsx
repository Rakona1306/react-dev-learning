import "./button-m.css";

interface ButtonProps {
  children: React.ReactNode;
}

export default function ButtonSubmit({ children}: ButtonProps) {
  return (
    <button className="Button" type="submit">
      {children}
    </button>
  );
}
