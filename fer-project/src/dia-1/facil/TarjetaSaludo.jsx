function TarjetaSaludo() {
  const hora = new Date().getHours()

  let saludo

  if (hora < 12) {
    saludo = "Buenos días"
  } else if (hora < 18) {
    saludo = "Buenas tardes"
  } else {
    saludo = "Buenas noches"
  }

  return (
    <h1>
      {saludo}, soy María Fernanda
    </h1>
  )
}

export default TarjetaSaludo