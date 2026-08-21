import Separator from "../components/atoms/separator/separator";
import Day2Exercise1 from "../components/molecules/Day2/day2-exercise-1";
import TodoList from "../components/molecules/Day2/todo-list(ex2)";
import ProductList from "../components/organisms/product-list/product-list";

export default function Day2() {
  return (
    <div>
      <Separator margin="0">Day 2 Exercise 1</Separator>
      <Day2Exercise1 />
      <Separator margin="0">Day 2 Exercise 2</Separator>
      <TodoList
        className="flex flex-col items-center justify-center gap-4 p-4 "
        tareas={["Tarea 1", "Tarea 2", "Tarea 3", "Esta es una tarea muy larga"]}
      />
      <Separator margin="0">Day 2 Exercise 3</Separator>
      <div className="flex flex-col items-center justify-center gap-4 p-4 bg-amber-50">
      <ProductList  productos={[{ id: 1, imagen: "../../../resources/imgtest3.png", product: "salchipapa", price: 50, discount: 0 }]} />
      <ProductList  productos={[{ id: 2, imagen: "../../../resources/imgtest2.png", product: "pollito", price: 100, discount: 30 }]} />
      
      </div>
    </div>
  );
}

/* 

export default function Day2() {
  const products = [
    { imagen: "", product: "salchipapa", price: 50, discount: 0 },
    { imagen: "", product: "salchipapa con huevo", price: 100, discount: 0 },
    { imagen: "", product: "salchipapa con pollo ", price: 200, discount: 0 },
  ];

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <Imagen imagen={product.imagen} />{" "}
          {product.product}
          <Texto text={product.product} price={product.price} discount={product.discount} />
        </li>
      ))}
    </ul>
  );
}
*/
