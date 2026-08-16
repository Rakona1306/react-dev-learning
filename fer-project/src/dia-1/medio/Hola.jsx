function Hola() {
    const SALUDO = "Hola mundo"
    const usuarios = [
        {
            name: "Pedro",
            price: 500,
        },
        {
            name: "Juan",
            price: 400
        },
        {
            name: "Carlos",
            price: 100
        },
        {
            name: "Masha",
            price: 600
        }
    ]

    const usuariosparciados = usuarios.map((usuario)=>{
        if (
            usuario.name === "Pedro" 
        ){
            usuario.name = "Pedro1"
        }
        return usuario
    })

  return (
    <>
        <ul>
            <li>{SALUDO}</li>
            {
                usuariosparciados.map((usuario)=>{
                    if(
                        usuario.name === "Pedro1"
                    ){
                        return null
                    }
                    return (
                        <>
                        <li>
                            {usuario.name}
                        </li>
                        </>
                    )
                })
            }
        </ul>
        <div>
          <h1>Buenas noches Juan!</h1>
          <p>Te saluda Fernanda</p>
        </div>
    </>
  )
}

export default Hola