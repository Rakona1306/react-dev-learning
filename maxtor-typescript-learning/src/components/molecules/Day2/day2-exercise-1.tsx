import GreetingCard from "../../atoms/greeting-card/greeting-card";

export default function Day2Exercise1() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <GreetingCard name="Maxtor" message="Bienvenido al día 2!" />
    </div>
  );
}