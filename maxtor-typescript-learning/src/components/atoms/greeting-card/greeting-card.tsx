import './greeting-card.css';
interface GreetingCardProps {
  name: string;
  message: string;
}

export default function GreetingCard({ name, message }: GreetingCardProps) {
  return (
    <div className="greeting-card">
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
    </div>
  );
}