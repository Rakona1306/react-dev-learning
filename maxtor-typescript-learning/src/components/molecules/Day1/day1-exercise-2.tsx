import Box from "../../atoms/box/box";
import Separator from "../../atoms/separator/separator";

interface Product {
  name: string;
  price: number;
}
export default function Day1Exercise2() {
  const PRODUCTOS: Product[] = [
    { name: "papa", price: 2 },
    { name: "papita", price: 3 },
    { name: "papota", price: 4 },
    { name: "papasota", price: 5 },
    { name: "papu", price: 6 },
  ];
  return (
    <div>
      <Separator margin="200">Day 1 Exercise 2</Separator>
      <ul className="flex gap-2">
          {PRODUCTOS.map((productos, index) => (
           <Box><li key={index}>{productos.name}</li></Box> 
          ))}
      </ul>
    </div>
  );
}
