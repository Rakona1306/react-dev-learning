import "./Box.css";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return <div className="Box m-1">{children}</div>;
}
