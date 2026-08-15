

import Imagen from "../components/Imagen";
import Texto from "../components/Texto";

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
