import { Badge } from "../../atoms/badge/badge"

export const ProductCard = ({
    imagen,
    nombre,
    precio,
    descuento
}) => {

    const tieneDescuento = descuento > 0

    return (
        <article className="relative w-64 rounded-lg border p-4 shadow">

            {tieneDescuento && (
                <Badge texto={`-${descuento}% OFERTA`} />
            )}

            <img
                src={imagen}
                alt={nombre}
                className="mt-3 h-40 w-full rounded object-cover"
            />

            <h3 className="mt-3 text-lg font-bold">
                {nombre}
            </h3>

            <p className="mt-2">
                Precio: S/. {precio}
            </p>

        </article>
    )
}