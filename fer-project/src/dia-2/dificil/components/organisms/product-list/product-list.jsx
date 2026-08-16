import { ProductCard } from "../../molecules/product-card/product-card"

const PRODUCTOS = [
    {
        id: 1,
        imagen: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
        nombre: 'Laptop',
        precio: 2500,
        descuento: 20
    },
    {
        id: 2,
        imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db',
        nombre: 'Mouse',
        precio: 80,
        descuento: 0
    },
    {
        id: 3,
        imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
        nombre: 'Teclado',
        precio: 150,
        descuento: 10
    },
    {
        id: 4,
        imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
        nombre: 'Monitor',
        precio: 900,
        descuento: 15
    },
    {
        id: 5,
        imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        nombre: 'Audífonos',
        precio: 200,
        descuento: 0
    }
]

export const ProductList = () => {

    const productosOrdenados = [...PRODUCTOS].sort(
        (a, b) => a.precio - b.precio
    )

    return (
        <section className="p-6">

            <h2 className="mb-6 text-2xl font-bold">
                Lista de productos
            </h2>

            <div className="flex flex-wrap justify-center gap-6">

                {productosOrdenados.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        descuento={producto.descuento}
                    />
                ))}

            </div>

        </section>
    )
}