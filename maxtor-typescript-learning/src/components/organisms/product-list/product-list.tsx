import ProductCard from "../../molecules/Day2/product-card(ex3)";

interface ProductListProps {
    productos: {
        id: number;
        imagen: string;
        product: string;
        price: number;
        discount: number;
    }[];
}

export default function ProductList({productos}: ProductListProps) {
    if(!productos || productos.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }
    const productosOrdenados = [...productos].sort((a, b) => a.price - b.price);
    return (
        <div className="product-list">
            {productosOrdenados.map((producto) => (
                <ProductCard
                    key={producto.id}
                    imagen={producto.imagen}
                    product={producto.product}
                    price={producto.price}
                    discount={producto.discount}
                />
            ))}
        </div>
    );
}