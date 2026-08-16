import { useEffect, useState } from 'react'

export const Users = () => {

    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const obtenerDatos = async () => {

            try {

                const respuesta = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                )

                if (!respuesta.ok) {
                    throw new Error('No se pudieron obtener los usuarios')
                }

                const datos = await respuesta.json()

                //espera de 2 segundos
                await new Promise(resolve => setTimeout(resolve, 2000))

                setUsuarios(datos)

            } catch (error) {

                setError(error.message)

            } finally {

                setCargando(false)

            }
        }

        obtenerDatos()

    }, [])

    if (cargando) {
        return <p>Cargando usuarios...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <section>

            <h2>Lista de usuarios</h2>

            {usuarios.map(({ id, name, email }) => (
                <div key={id} className="mb-4 p-4 border rounded-lg">
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            ))}

        </section>
    )
}