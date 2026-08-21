import Badge from "../../atoms/badge/badge";

interface ProductCardProps {
  imagen: string;
  product: string;
  price: number;
  discount: number;
}
export default function ProductCard({
  imagen,
  product,
  price,
  discount,
}: ProductCardProps) {
  const haveDiscount = discount > 0;
  return (
    <article className="product-card">
      {haveDiscount && <Badge text={`-${discount}% Oferta`} />}
      <img src={imagen} alt={product} />
      <h3>{product}</h3>
      <p>Precio: ${price}</p>
    </article>
  );
}
