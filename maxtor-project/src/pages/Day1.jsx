import "./App.css";

function MyApp() {
  const element = <h1 className="prueba">My name is Maxtor</h1>;
  const element2 = suma(1, 2);
  const productos = [
    { nombre: "p1", precio: 300 },
    { nombre: "p2", precio: 30 },
    { nombre: "p3", precio: 50 },
    { nombre: "p4", precio: 200 },
    { nombre: "p5", precio: 520 },
  ];

  return (
    <div>
      {" "}
      <div>{element2}</div> <div>{element}</div>
      <div>
        <h1>Lista de productos</h1>
        <p>Nombres:</p>
      </div>
      <ul>
        {productos.map((productos, index) => (
          <li key={index}>{productos.nombre}</li>
        ))}
      </ul>
      <ul>
        {productos.map((productos, index) => (
          <li key={index}>{productos.precio * 0.5}</li>
        ))}
      </ul>
    </div>
  );
}
function suma(a, b) {
  return a + b;
}
export default MyApp;
