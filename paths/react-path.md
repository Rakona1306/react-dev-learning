# 📘 Plan de Aprendizaje de React en 7 Días

Este plan está pensado para alguien que recién empieza a programar. Cada
día tiene una explicación sencilla de lo que vas a aprender, algo
concreto que debes entregar al final del día (para saber que sí
avanzaste), y 3 ejercicios (fácil, medio y difícil) con pistas para
resolverlos por tu cuenta --- no con la solución ya armada. También hay
espacios para que agregues tus propios cursos, buenas prácticas y
documentación.

> 💡 **Cómo usar las pistas:** no busques copiar y pegar. Lee la pista,
> intenta resolverlo, y si te trabas, recién ahí busca ayuda puntual
> sobre ese paso.

------------------------------------------------------------------------

## Día 1 --- Preparar tu computadora y entender la base del lenguaje

### 🎯 Qué aprender

-   Formas más cortas y modernas de escribir funciones en JavaScript (se
    llaman "funciones flecha").
-   Cómo sacar partes de una lista o de un grupo de datos sin escribir
    tanto código repetido.
-   Cómo trabajar con tareas que toman tiempo, como pedir información a
    internet.
-   Instalar los programas necesarios en tu computadora para poder crear
    proyectos.
-   Crear tu primer proyecto con una herramienta que arma la base por ti
    (Vite).

### 🔗 Cursos
-   [Descargar React](https://www.youtube.com/watch?v=EXiF5FPlKvY)
-   [Entender, Para que usar React?](https://www.youtube.com/watch?v=nAe_a1mdNDY&list=PLU8oAlHdN5BmlVfm2bJshR3qPtoyukQ_b)
-   [Instalacion de React + VSCode](https://www.youtube.com/watch?v=UiagSAlj5Eg&list=PLU8oAlHdN5BmlVfm2bJshR3qPtoyukQ_b&index=2)
-   [Primeros Pasos](https://www.youtube.com/watch?v=ywwisOMuZ0g&list=PLU8oAlHdN5BmlVfm2bJshR3qPtoyukQ_b&index=3)
### ✅ Buenas prácticas
-   [Tips - OPCIONAL](https://www.youtube.com/watch?v=x_0DE_l6pgk)
### 📚 Documentación
-   [React - Primeros Pasos -- Leer despues de los Videos](https://es.react.dev/learn)
-   [Inicializar Proyecto React](https://carlosazaustre.es/blog/react-vite)
-   [Buenas Practicas Basicas](https://dev.to/dennysjmarquez/react-la-guia-maxima-de-buenas-practicas-jamas-concebida-principios-solid-el-acronimo-stupid-clean-code-y-code-smell-53l7)

### 📦 Qué debes entregar hoy

Un proyecto abierto en tu navegador donde se vea, en pantalla, un saludo
con tu nombre.

### 💪 Ejercicios

### 🟢 **Fácil --- Tu primer saludo en pantalla** Meta: crear tu proyecto y lograr que aparezca un mensaje con tu nombre. Pistas para resolverlo:

1.  Revisa que tengas instalado el programa que te permite correr
    JavaScript fuera del navegador.
2.  Usa el comando de creación de proyectos para armar la base.
3.  Abre el archivo principal de la página y busca el texto que
    actualmente se muestra.
4.  Cámbialo por un saludo con tu nombre.
5.  Corre el proyecto y revisa el resultado.

### 💻 Pistas con código

``` bash
npm create vite@latest
npm install
npm run dev
```

``` jsx
function App() {
  return (
    // Cambia este contenido
  )
}
```

-   Reto extra: haz que el saludo cambie según la hora del día (ej.
    "Buenos días" o "Buenas noches").

### 🟠 **Medio --- Lista de productos** Meta: crear una lista de al menos 5 productos (nombre y precio) y obtener, por un lado, solo los nombres, y por otro, los precios con un descuento aplicado. Pistas para resolverlo:

1.  Piensa cómo guardarías 5 productos, cada uno con dos datos: nombre y
    precio.
2.  Busca cómo se recorre una lista para transformar cada uno de sus
    elementos en algo nuevo.
3.  Investiga una forma corta de "sacar" solo el dato que te interesa de
    cada producto.
4.  Para el descuento, piensa qué cuenta matemática reduce un número en
    cierto porcentaje.
5.  Muestra los resultados para comprobar que están bien.

### 💻 Pistas con código

``` js
const productos = [
  // nombre, precio
]

productos.?
const { ... } = producto
precio * ?
```

-   Reto extra: guarda esa lógica en un archivo aparte y tráela a tu
    archivo principal.

### 🔴 **Difícil --- Pedir información a internet** Meta: pedir datos a una página de prueba gratuita y mostrarlos ordenados, controlando qué pasa si algo falla. Pistas para resolverlo:

1.  Busca cómo se pide información a una dirección de internet desde
    JavaScript.
2.  Investiga cómo esperar a que llegue la respuesta antes de seguir con
    el resto del código.
3.  Piensa qué harías si la petición falla (por ejemplo, sin internet) y
    cómo mostrarías un aviso.
4.  Cuando tengas los datos, recórrelos y muestra solo la parte que te
    interesa.

### 💻 Pistas con código

``` js
fetch(...)
async function obtenerDatos(){}

try {

} catch(error) {

}

datos.?
```

-   Reto extra: agrega una espera de 2 segundos antes de mostrar el
    resultado, simulando que "tarda en cargar".

> En los siguientes ejercicios agrega pistas similares como:
>
> ``` jsx
> useState(...)
> useEffect(()=>{},[])
> lista.map(...)
> useContext(...)
> <Routes />
> lazy(...)
> ```

------------------------------------------------------------------------

## Día 2 --- Piezas reutilizables (componentes) y cómo mostrar información

### 🎯 Qué aprender

-   Qué es JSX: una forma de escribir lo que se ve en pantalla mezclando
    JavaScript con algo parecido a HTML.
-   Qué es un componente: una pieza reutilizable de tu página (como un
    molde).
-   Cómo enviarle información a un componente para que la muestre.
-   Cómo mostrar u ocultar cosas según una condición.
-   Cómo mostrar varias veces algo similar (por ejemplo, una lista de
    tarjetas) a partir de una lista de datos.

### 🔗 Cursos

-   [🎥 Componentes en React](https://youtu.be/ladwC6Lrs-M?si=-9F5nnlmDDPmagOj&t=2197)
-   [🎥 Variables en React](https://youtu.be/ladwC6Lrs-M?si=LUJN51-4gxhdcK3I&t=2681)
-   [🎥 Fragment en React](https://youtu.be/ladwC6Lrs-M?si=vRgHRmdz42IoZ0Nw&t=3128)
-   [🎥 Estilos en React](https://youtu.be/ladwC6Lrs-M?si=CqGTl7GDm4LjLzyC&t=3431)
-   [🎥 Props en React](https://youtu.be/ladwC6Lrs-M?si=m6XUa2jnV2dlB7Gj&t=3698)
-   [🎥 Condicionales en React](https://youtu.be/ladwC6Lrs-M?si=FO3qf14rGkQIG7fl&t=5584)
-   [🎥 Listas en React](https://youtu.be/ladwC6Lrs-M?si=H5O4Nt9A0-jgCpsj&t=6044)
-   [🎥 ClassNames en React](https://youtu.be/ladwC6Lrs-M?si=5RpA7Gfgcx-VARD9&t=6813)

### ✅ Buenas prácticas

-   [📚 Optimizar rendimiento con React](https://www.toptal.com/developers/react/componentes-react-eficientes-una-guia-para-optimizar-el-desempeno-de-react)
-   [🎥 Tips - OPCIONAL (5:16)](https://www.youtube.com/watch?v=x_0DE_l6pgk)
-   [📚 Optimizar Juego para React](https://kinsta.com/es/blog/practicas-de-react/)
-   [📚 24 Javascript Tips](https://code.tutsplus.com/es/24-javascript-best-practices-for-beginners--net-5399t)
-   [📚 Dar estilos en React](https://www.freecodecamp.org/espanol/news/como-dar-estilo-a-tus-aplicaciones-react-con-css-como-un-profesional/)

### 📚 Documentación

-   [Javascript en React con llaves](https://es.react.dev/learn/javascript-in-jsx-with-curly-braces)
-   [React Marcado JSX](https://es.react.dev/learn#writing-markup-with-jsx)
-   [Agregar Estilos](https://es.react.dev/learn#adding-styles)
-   [Mostrar Datos](https://es.react.dev/learn#displaying-data)
-   [Renderizado Condicional](https://es.react.dev/learn#conditional-rendering)
-   [Renderizar Listas](https://es.react.dev/learn#rendering-lists)
-   [Crear un componente](https://es.react.dev/learn/your-first-component)
-   [Importar y Exportar Componentes](https://es.react.dev/learn/importing-and-exporting-components)
-   [Patrones de Disenio](https://refactoring.guru/es/design-patterns)
-   [Atomic Design UI](https://uifrommars.com/atomic-design-ventajas/)

### 📦 Qué debes entregar hoy

Una página con al menos 2 componentes propios, donde uno de ellos recibe
información desde afuera y la muestra en pantalla.

### 💪 Ejercicios

### 🟢 **Fácil --- Tarjeta de saludo** Meta: crear un componente que reciba un nombre desde afuera y lo muestre en un título grande. Pistas para resolverlo:

1.  Crea un nuevo componente y dale un nombre descriptivo.
2.  Piensa cómo ese componente puede "recibir" un dato desde quien lo
    usa (busca el concepto de "props").
3.  Usa ese dato dentro del título que se muestra.

-   Reto extra: agrega un segundo dato opcional (como un apellido) que
    solo se muestre si fue enviado.

---

#### 📁 Ubicación según Atomic Design

* **Átomo (`src/components/atoms/greeting-card/greeting-card.jsx`):** Componente básico indivisible que valida y muestra el saludo.

```text
src/
└── components/
    └── atoms/
        └── greeting-card/
            └── greeting-card.jsx       # Átomo (Tarjeta de saludo)

```

---

#### 🌟 Buenas Prácticas de React Aplicadas

1. **Validación de tipos de datos con `prop-types`:** Al utilizar JavaScript (JS plano en lugar de TypeScript), la librería `prop-types` nos permite documentar y validar el tipo de datos que recibe el componente en tiempo de ejecución.
2. **Desestructuración de Props:** Extraer las propiedades directamente en los parámetros de la función mejora la claridad.
3. **Puntualizar obligatoriedad (`isRequired`):** Indicar cuáles props son indispensables para que el componente funcione correctamente.
4. **Renderizado Condicional Limpio:** Evaluar las props opcionales usando operadores lógicos (`&&`) para no ensuciar la interfaz.

---

#### 💻 Instalación de la Librería

Ejecuta en tu terminal el siguiente comando según el gestor de paquetes que estés usando:

```bash
# Si usas npm
npm install prop-types

# Si usas yarn
yarn add prop-types

# Si usas pnpm
pnpm add prop-types

```

---

#### 💡 Pistas para el Ejercicio: Tarjeta de Saludo

##### 1. Importar `PropTypes` y definir el componente

Ubicación: `src/components/atoms/greeting-card/greeting-card.jsx`

```jsx
import PropTypes from 'prop-types';

export function GreetingCard({ nombre, apellido }) {
  return (
    <h1>
      Hola, {nombre}
      {/* Reto Extra: Renderizado condicional */}
      {apellido && ` ${apellido}`}
    </h1>
  );
}

```

---

##### 2. Configurar el esquema de `propTypes`

Ubicación: `src/components/atoms/greeting-card/greeting-card.jsx`

Define las validaciones debajo del componente declarando qué tipo de dato debe ser cada prop y si es requerida.

```jsx
// Definición de reglas de validación
GreetingCard.propTypes = {
  // 'nombre' debe ser un string y es obligatorio
  nombre: PropTypes.string.isRequired,
  
  // 'apellido' debe ser un string pero es opcional
  apellido: PropTypes.string,
};

```

---

##### 3. Usar el componente desde fuera

Ubicación: `src/App.jsx`

```jsx
import { GreetingCard } from './components/atoms/greeting-card/greeting-card';

export function App() {
  return (
    <main>
      {/* Caso válido con obligatorio y opcional */}
      <GreetingCard nombre="Carlos" apellido="Gómez" />

      {/* Si pasas un tipo de dato incorrecto (ej: nombre={123}), 
          React mostrará una advertencia en la consola del navegador */}
    </main>
  );
}

```

### 🟠 **Medio --- Lista de tareas pendientes** Meta: mostrar una lista de tareas (que ya tienes armada) usando un componente, una por una. Pistas para resolverlo:

1.  Piensa cómo recorrer una lista de datos para mostrar algo por cada
    elemento.
2.  Cada elemento mostrado en pantalla necesita un identificador único
    (investiga por qué y cómo se usa).
3.  Si la lista está vacía, piensa qué mensaje le mostrarías al usuario
    en vez de nada.

-   Reto extra: dale un estilo distinto a las tareas si su nombre es muy
    largo (por ejemplo, más de 20 letras).

---

#### 📁 Ubicación según Atomic Design

* **Átomo (`src/components/atoms/task-item/task-item.jsx`):** Representa un elemento individual e indivisible de la lista (una sola tarea).
* **Molécula (`src/components/molecules/todo-list/todo-list.jsx`):** Recibe el arreglo de objetos, maneja la validación de lista vacía e itera para renderizar los átomos.

```text
src/
└── components/
    ├── atoms/
    │   └── task-item/
    │       └── task-item.jsx       # Átomo (Tarea individual)
    └── molecules/
        └── todo-list/
            └── todo-list.jsx       # Molécula (Iterador de tareas)

```

---

#### 🌟 Buenas Prácticas de React Aplicadas

1. **Validación de Arreglos y Objetos Complejos:** Uso de `PropTypes.arrayOf` y `PropTypes.shape` para validar la estructura interna de los objetos en las props.
2. **Identificador Único Persistente:** Uso de una propiedad `id` única para el atributo `key`, evitando índices numéricos (`index`) que afecten el rendimiento o el estado.
3. **Manejo de Caso Borde (Early Return):** Renderizar un mensaje alternativo al inicio de la función si la lista no contiene elementos.
4. **Separación de Responsabilidades:** Delegar la lógica visual del reto extra (longitud del texto) directamente al átomo `TaskItem`.

---

#### 💻 Instalación de la Librería

Si aún no la has instalado en tu proyecto, ejecuta:

```bash
# Si usas npm
npm install prop-types

# Si usas yarn
yarn add prop-types

# Si usas pnpm
pnpm add prop-types

```

---

#### 💡 Pistas para el Ejercicio: Lista de Tareas

##### 1. Átomo `TaskItem` y validación de props

Ubicación: `src/components/atoms/task-item/task-item.jsx`

```jsx
import PropTypes from 'prop-types';

export function TaskItem({ texto }) {
  // Reto extra: Evaluar longitud del texto
  const esLarga = texto.length > 20;

  return (
    <li className={esLarga ? 'tarea-larga' : 'tarea-normal'}>
      {texto}
    </li>
  );
}

TaskItem.propTypes = {
  texto: PropTypes.string.isRequired,
};

```

---

##### 2. Molécula `TodoList` con Early Return para lista vacía

Ubicación: `src/components/molecules/todo-list/todo-list.jsx`

```jsx
import PropTypes from 'prop-types';
import { TaskItem } from '../../atoms/task-item/task-item';

export function TodoList({ tareas }) {
  // Pista: Validar si la lista está vacía antes de iterar
  if (!tareas || tareas.length === 0) {
    return <p>No hay tareas pendientes por hacer.</p>;
  }

  return (
    <ul>
      {/* Aquí irá la iteración con .map() */}
    </ul>
  );
}

```

---

##### 3. Iteración con `.map()`, `key` y validación con `PropTypes.arrayOf`

Ubicación: `src/components/molecules/todo-list/todo-list.jsx`

```jsx
import PropTypes from 'prop-types';
import { TaskItem } from '../../atoms/task-item/task-item';

export function TodoList({ tareas }) {
  if (!tareas || tareas.length === 0) {
    return <p>No hay tareas pendientes por hacer.</p>;
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        // Pasa el id único a la prop 'key' del elemento generado
        <TaskItem key={tarea.id} texto={tarea.texto} />
      ))}
    </ul>
  );
}

// Validar un arreglo de objetos con forma específica
TodoList.propTypes = {
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      texto: PropTypes.string.isRequired,
    })
  ),
};

```

### 🔴 **Difícil --- Tarjeta de producto** Meta: crear un componente de "tarjeta de producto" que reciba imagen, nombre, precio y un posible descuento, y muestre una etiqueta especial solo si hay descuento. Pistas para resolverlo:

1.  Define qué datos necesita recibir tu tarjeta para funcionar.
2.  Piensa cómo mostrar una etiqueta ("Oferta") solo cuando exista un
    descuento, y nada cuando no exista.
3.  Crea un componente "padre" que use varias tarjetas a partir de una
    lista de productos.

-   Reto extra: ordena los productos mostrados de menor a mayor precio
    antes de mostrarlos.

---

#### 📁 Ubicación según Atomic Design

* **Átomo (`src/components/atoms/badge/badge.jsx`):** Elemento simple para mostrar etiquetas informativas (como la etiqueta de "Oferta").
* **Molécula (`src/components/molecules/product-card/product-card.jsx`):** Muestra la información de un solo producto (imagen, nombre, precio y descuento).
* **Organismo (`src/components/organisms/product-list/product-list.jsx`):** Recibe la lista de productos, aplica el ordenamiento por precio y renderiza la colección de tarjetas.

```text
src/
└── components/
    ├── atoms/
    │   └── badge/
    │       └── badge.jsx          # Átomo (Etiqueta de "Oferta")
            └── badge.css
    ├── molecules/
    │   └── product-card/
    │       └── product-card.jsx    # Molécula (Tarjeta individual de producto)
    └── organisms/
        └── product-list/
            └── product-list.jsx   # Organismo (Lista y ordenamiento de productos)

```

---

#### 🌟 Buenas Prácticas de React Aplicadas

1. **Inmutabilidad al ordenar datos:** El método `.sort()` de JavaScript muta (modifica) el arreglo original. Siempre debes crear una copia del arreglo (usando el operador spread `[...]` o `.toSorted()`) antes de ordenarlo para evitar efectos secundarios en React.
2. **Validación estricta de objetos embebidos:** Usar `PropTypes.shape` para definir claramente los tipos de datos requeridos en cada propiedad del producto.
3. **Composición modular:** Delegar elementos visuales secundarios (como una etiqueta) a componentes atómicos reutilizables (`badge.jsx`).
4. **Manejo de rutas de imágenes:** Usar atributos semánticos como `alt` descriptivos en las etiquetas `<img>` para garantizar la accesibilidad web.

---

## 💻 Instalación de la Librería

Si aún no la has instalado en tu proyecto, ejecuta:

```bash
# Si usas npm
npm install prop-types

# Si usas yarn
yarn add prop-types

# Si usas pnpm
pnpm add prop-types

```

---

#### 💡 Pistas para el Ejercicio: Tarjeta de Producto

##### 1. Definir Estilos CSS para `Badge`

Ubicación: `src/components/atoms/badge/badge.css`

Asigna los valores visuales utilizando la misma nomenclatura kebab-case para las clases:

```css
.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
}

.badge-oferta {
  background-color: #ff4d4f;
  color: #ffffff;
}
```

##### 2. Átomo `Badge` (Etiqueta de Oferta)

Ubicación: `src/components/atoms/badge/badge.jsx`

```jsx
import PropTypes from 'prop-types';
import './badge.css';

export function Badge({ texto, variante }) {
  // Pista: Concatena dinámicamente la clase según la variante recibida
  const claseVariante = variante ? `badge-${variante}` : 'badge-oferta';

  return (
    <span className={`badge ${claseVariante}`}>
      {texto}
    </span>
  );
}

// Configuración de validación con PropTypes
Badge.propTypes = {
  texto: PropTypes.string.isRequired,
  variante: PropTypes.string,
};

// Valores por defecto
Badge.defaultProps = {
  variante: 'oferta',
};

```

---

##### 3. Molécula `ProductCard` (Con renderizado condicional de descuento)

Ubicación: `src/components/molecules/product-card/product-card.jsx`

```jsx
import PropTypes from 'prop-types';
import { Badge } from '../../atoms/badge/badge';

export function ProductCard({ imagen, nombre, precio, descuento }) {
  // Pista: Evalúa si hay un descuento mayor a cero
  const tieneDescuento = descuento > 0;

  return (
    <article className="product-card">
      {/* Pista 2: Muestra el Badge SOLO si tieneDescuento es true */}
      {tieneDescuento && <Badge texto={`-${descuento}% OFERTA`} />}
      
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </article>
  );
}

ProductCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descuento: PropTypes.number, // Opcional
};

// Valor por defecto en caso de no enviar descuento
ProductCard.defaultProps = {
  descuento: 0,
};

```

---

##### 4. Organismo `ProductList` (Reto Extra: Ordenar por precio)

Ubicación: `src/components/organisms/product-list/product-list.jsx`

```jsx
import PropTypes from 'prop-types';
import { ProductCard } from '../../molecules/product-card/product-card';

export function ProductList({ productos }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  // Reto extra: Copiar el arreglo para no mutar el original y ordenar de menor a mayor precio
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  return (
    <section className="product-list">
      {productosOrdenados.map((producto) => (
        <ProductCard
          key={producto.id}
          imagen={producto.imagen}
          nombre={producto.nombre}
          precio={producto.precio}
          descuento={producto.descuento}
        />
      ))}
    </section>
  );
}

ProductList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagen: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      descuento: PropTypes.number,
    })
  ).isRequired,
};

```

------------------------------------------------------------------------

## Día 3 — 🧠 Estado, eventos y Hooks fundamentales de React

**`useState` · `useRef` · `useId` · Eventos**

---

### 🎯 Qué aprender

* Cómo utilizar **`useState`** para guardar información que puede cambiar y hacer que el componente se actualice automáticamente.
* Cómo manejar **eventos de usuario** como clics, cambios en inputs, envíos de formularios y otras interacciones.
* Cómo controlar y obtener el valor de los **inputs** utilizando el estado de React.
* Cuándo utilizar **`useState`** y cuándo utilizar **`useRef`** para guardar información dentro de un componente.
* Cómo utilizar **`useRef`** para acceder a elementos del DOM y conservar valores sin provocar una nueva renderización.
* Cómo utilizar **`useId`** para generar identificadores únicos y relacionar correctamente elementos de formularios.
* Cómo actualizar correctamente objetos y arrays dentro del estado **sin modificar directamente el estado anterior**.
* Cómo compartir información entre componentes utilizando **props** y levantar el estado al componente padre cuando sea necesario.
* Cómo identificar qué componente debe ser responsable de cada estado para mantener una aplicación organizada.
* Cómo combinar **estado + eventos + componentes** para construir interfaces interactivas.

---

### 🎯 Objetivo final del Día 3

Al terminar los tres ejercicios deberías poder responder:

* ¿Cuándo utilizo `useState`?
* ¿Cuándo utilizo `useRef`?
* ¿Para qué sirve `useId`?
* ¿Cómo manejo `onClick`, `onChange` y `onSubmit`?
* ¿Cómo manejo formularios en React?
* ¿Cómo actualizo correctamente un array u objeto dentro del estado?
* ¿Cómo paso información mediante props?
* ¿Cómo hago que un componente hijo ejecute una acción que pertenece al componente padre?
* ¿Cómo comparto estado entre varios componentes?


---

### 🔗 Cursos

-   [🎥 Eventos para React](https://youtu.be/ladwC6Lrs-M?si=yxfQzN2o5Jg6jpVn&t=4220)
-   [🎥 Nuevo Hook!! :D - useState](https://youtu.be/ladwC6Lrs-M?si=WU-iZMKrtKuHA0ar&t=5140)
-   [🎥 Formularios Interactivos y Dinamicos en React](https://youtu.be/ladwC6Lrs-M?si=OgbOwJ04uPLBrKjn&t=6921)
-   [🎥 Comunicacion entre Componentes](https://youtu.be/ladwC6Lrs-M?si=1AyEhSfFnDhmJDaO&t=7655)
-   [🎥 Comunicacion entre Componentes desde Hijo al Padre](https://youtu.be/ladwC6Lrs-M?si=4DA_7V8K6UGJkNen&t=8020)
-   [🎥 Nuevo Hook!! :D - useRef](https://youtu.be/ladwC6Lrs-M?si=yvmMagXkq46vXvz5&t=13954)
-   [🎥 Nuevo Hook!! :D - useId](https://youtu.be/58TU9rOHkec?si=J_QU4c0dtlL6FtaP)

### ✅ Buenas prácticas

-   [📚 Explicacion y Buenas Practicas con useState](https://medium.com/@sysglobalsolutionsblog/estados-en-react-js-hook-usestate-a8ceb548b4a1)
-   [📚 Explicacion y Buenas Practicas con useRef](https://lenguajejs.com/react/datos/useref/)
-   [📚 Pro tips con useId - Ingles Doc](https://dev.to/a1guy/the-definitive-react-19-useid-guide-patterns-pitfalls-and-pro-tips-40ia)

### 📚 Documentación

-   [Eventos en React vs Javascript](https://gist.github.com/codewithleader/c1fa3aa3e06bbefe28a0f86fac44247f)
-   [Evento de Click en React](https://es.react.dev/learn/responding-to-events)
-   [Informacion y uso de useState](https://es.react.dev/reference/react/useState)
-   [Aprender useState - Logica de ESTADO](https://es.react.dev/learn/state-a-components-memory)
-   [Logica de Estado con Ejemplos](https://es.react.dev/learn/state-as-a-snapshot)
-   [Actualizar Objetos con useState](https://es.react.dev/learn/updating-objects-in-state)
-   [Actualizar Listas o Arrays con useState](https://es.react.dev/learn/updating-arrays-in-state)
-   [Informacion y uso de useRef](https://es.react.dev/reference/react/useRef)
-   [Informacion y uso de useId](https://es.react.dev/reference/react/useId)
-   [Crear un componente](https://es.react.dev/learn/your-first-component)
-   [Importar y Exportar Componentes](https://es.react.dev/learn/importing-and-exporting-components)
-   [Patrones de Disenio](https://refactoring.guru/es/design-patterns)
-   [Atomic Design UI](https://uifrommars.com/atomic-design-ventajas/)

---

### 📦 Qué debes entregar hoy

Construye una pequeña aplicación interactiva utilizando los **Hooks fundamentales de React** y los **eventos**.

Durante los ejercicios debes practicar:

* `useState`
* `useRef`
* `useId`
* Eventos (`onClick`, `onChange`, `onSubmit`)
* Formularios
* Actualización inmutable de objetos y arrays
* Props y comunicación entre componentes
* Levantar el estado al componente padre

---

### 💪 Ejercicios

## 🟢 Fácil — Contador interactivo

**Meta:** crear un contador que permita aumentar, disminuir y reiniciar un número utilizando eventos y estado.

La pantalla debe mostrar:

* El valor actual del contador.
* Un botón para aumentar.
* Un botón para disminuir.
* Un botón para reiniciar.

**Hooks y conceptos que debes utilizar:**

* `useState`
* Evento `onClick`
* Actualización del estado

**Pistas para resolverlo:**

1. Necesitas guardar el número actual en un estado.
2. Cada botón debe ejecutar una función cuando ocurra un `click`.
3. La función de aumentar debe actualizar el estado sumando `1`.
4. La función de disminuir debe actualizar el estado restando `1`.
5. El botón de reiniciar debe devolver el estado a `0`.
6. Recuerda que no debes modificar directamente el valor anterior del estado.

**🔥 Reto extra — `useRef`:**

Agrega un botón **"Mostrar cantidad de clics"**.

Utiliza `useRef` para llevar un contador de cuántas veces se han presionado los botones **sin utilizar otro `useState` para ese contador**.

---
## 📁 Ubicación según Atomic Design

Para este ejercicio, dividiremos la estructura manteniendo la responsabilidad de cada nivel:

* **Átomo (`src/components/atoms/button/button.jsx`):** Elemento básico e indivisible para la interacción de clics, con su archivo de estilos `button.css`.
* **Molécula (`src/components/molecules/counter-controls/counter-controls.jsx`):** Grupo de botones con sus respectivas acciones, con su archivo de estilos `counter-controls.css`.
* **Organismo (`src/components/organisms/counter/counter.jsx`):** Contiene la lógica del estado (`useState`), la referencia (`useRef`), la pantalla del valor y la integración de las moléculas, con su archivo de estilos `counter.css`.

```text
src/
└── components/
    ├── atoms/
    │   └── button/
    │       ├── button.css           # Estilos del botón (kebab-case)
    │       └── button.jsx           # Átomo (Botón genérico)
    ├── molecules/
    │   └── counter-controls/
    │       ├── counter-controls.css # Estilos del contenedor de botones
    │       └── counter-controls.jsx # Molécula (Grupo de botones)
    └── organisms/
        └── counter/
            ├── counter.css          # Estilos de la tarjeta principal
            └── counter.jsx          # Organismo (Maneja el estado y useRef)

```

---

## 🌟 Buenas Prácticas de React Aplicadas

1. **Estado Inmutable:** Nunca hagas `contador = contador + 1`. Usa la función modificadora que provee `useState`.
2. **Funciones de actualización con valor previo (`prev`):** Cuando el nuevo estado depende directamente del valor anterior, pasa una función callback a la función actualizadora `setContador(prev => prev + 1)`.
3. **Uso correcto de `useRef`:** Las referencias creadas con `useRef` persisten entre renderizados y **no provocan** un nuevo renderizado cuando su propiedad `.current` cambia. Esto lo hace ideal para métricas internas o contadores de eventos que no necesitan redibujar la pantalla inmediatamente.
4. **Validación de eventos:** Validar con `PropTypes.func` que las callbacks recibidas en las props sean funciones válidas.

---

## 💻 Instalación de la Librería

Si aún no la has instalado en tu proyecto, ejecuta:

```bash
# Si usas npm
npm install prop-types

# Si usas yarn
yarn add prop-types

# Si usas pnpm
pnpm add prop-types

```

---

## 💡 Pistas para el Ejercicio: Contador Interactivo

### 1. Estilos CSS del Átomo (`button.css`)

Ubicación: `src/components/atoms/button/button.css`

Define las clases en formato **kebab-case** para estilizar el botón básico:

```css
.button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.button-primary {
  background-color: #007bff;
  color: #ffffff;
}

.button-danger {
  background-color: #dc3545;
  color: #ffffff;
}

```

---

### 2. Átomo `Button` con PropTypes (`button.jsx`)

Ubicación: `src/components/atoms/button/button.jsx`

Piensa cómo hacer que un botón Html acepte el evento `onClick` y muestre un texto recibido por props.

```jsx
import PropTypes from 'prop-types';
import './button.css';

export function Button({ texto, onClick, variante }) {
  // Pista: Aplica la clase dinámica concatenando 'button-' con la variante
  const claseBoton = `button button-${variante}`;

  return (
    <button className={claseBoton} onClick={/* ¿Qué función debe ejecutarse al hacer clic? */}>
      {/* ¿Qué prop muestra el texto del botón? */}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variante: PropTypes.string,
};

Button.defaultProps = {
  variante: 'primary',
};

```

---

### 3. Molécula `CounterControls` (`counter-controls.jsx`)

Ubicación: `src/components/molecules/counter-controls/counter-controls.jsx`

Agrupa los tres botones pasando la acción correspondiente a cada uno desde el organismo padre.

```jsx
import PropTypes from 'prop-types';
import { Button } from '../../atoms/button/button';

export function CounterControls({ onIncrementar, onDecrementar, onReiniciar }) {
  return (
    <div className="counter-controls">
      {/* Pista: Pasa la callback correspondiente al evento onClick de cada Button */}
      <Button texto="Aumentar" onClick={onIncrementar} />
      <Button texto="Disminuir" onClick={onDecrementar} />
      <Button texto="Reiniciar" onClick={onReiniciar} variante="danger" />
    </div>
  );
}

CounterControls.propTypes = {
  onIncrementar: PropTypes.func.isRequired,
  onDecrementar: PropTypes.func.isRequired,
  onReiniciar: PropTypes.func.isRequired,
};

```

---

### 4. Organismo `Counter` (`counter.jsx`)

Ubicación: `src/components/organisms/counter/counter.jsx`

Declara el estado del contador y define las funciones handler utilizando la forma funcional de actualización.

```jsx
import { useState } from 'react';
import { CounterControls } from '../../molecules/counter-controls/counter-controls';

export function Counter() {
  // Pista 1: Inicializa el estado en 0
  const [contador, setContador] = useState(0);

  // Pista 2: Crea las funciones de manejo de eventos
  const handleIncrementar = () => {
    // ¿Cómo actualizas el estado usando el valor anterior (prev)?
  };

  const handleDecrementar = () => {
    // Resta 1 al valor previo
  };

  const handleReiniciar = () => {
    // Vuelve el valor a 0
  };

  return (
    <section className="counter">
      <h2>Valor actual: {contador}</h2>
      <CounterControls
        onIncrementar={handleIncrementar}
        onDecrementar={handleDecrementar}
        onReiniciar={handleReiniciar}
      />
    </section>
  );
}

```

---

### 🚀 Reto Extra: Contador de clics sin renderizados usando `useRef`

Ubicación: `src/components/organisms/counter/counter.jsx`

Recuerda que modificar una referencia `.current` no provoca que el componente se vuelva a pintar en pantalla.

```jsx
import { useState, useRef } from 'react';

export function Counter() {
  const [contador, setContador] = useState(0);
  
  // Pista Reto Extra: useRef guarda un valor mutable en la propiedad .current
  const totalClicsRef = useRef(0);

  const registrarClic = () => {
    // Pista: Incrementa .current directamente cada vez que se presione CUALQUIER botón
    totalClicsRef.current += 1;
  };

  const handleMostrarClics = () => {
    // Muestra en una alerta o consola la cantidad almacenada en totalClicsRef.current
    alert(`Total de clics presionados: ${totalClicsRef.current}`);
  };

  // ¡Integra registrarClic() dentro de tus handlers para llevar la cuenta!
}

```
---

## 🟡 Medio — Formulario de usuario

**Meta:** crear un formulario donde el usuario pueda escribir sus datos y ver la información ingresada en pantalla.

El formulario debe tener:
* Nombre.
* Correo electrónico.
* Edad.
* Botón **"Guardar"**.
* Botón **"Limpiar"**.

Al enviar el formulario, muestra los datos ingresados debajo.

**Hooks y conceptos que debes utilizar:**

* `useState`
* `useRef`
* `useId`
* `onChange`
* `onSubmit`
* `onClick`
* Formularios controlados

**Pistas para resolverlo:**

1. Utiliza `useState` para almacenar los valores de los campos.
2. Cada input debe actualizar su información mediante `onChange`.
3. Utiliza `onSubmit` para controlar el envío del formulario.
4. Evita que el navegador recargue la página cuando se envía el formulario.
5. Utiliza `useId` para generar identificadores únicos para los inputs y relacionarlos correctamente con sus `label`.
6. Utiliza `useRef` para acceder al input del nombre.
7. Al guardar, muestra la información del usuario en pantalla.
8. El botón **"Limpiar"** debe devolver todos los campos a su estado inicial.

**🔥 Reto extra — validación:**

No permitas enviar el formulario si:

* El nombre está vacío.
* El correo está vacío.
* La edad no es válida.

Muestra un mensaje indicando qué campo necesita corregirse.
---
## 📁 Ubicación según Atomic Design

Estructuraremos este ejercicio dividiendo responsabilidades y utilizando la nomenclatura **kebab-case** para cada archivo:

* **Átomo (`src/components/atoms/form-input/form-input.jsx`):** Componente base que conecta una etiqueta con un campo de texto con su correspondiente archivo de estilos `form-input.css`.
* **Molécula (`src/components/molecules/user-form-fields/user-form-fields.jsx`):** Agrupa los tres campos requeridos con su archivo de estilos `user-form-fields.css`.
* **Organismo (`src/components/organisms/user-profile-form/user-profile-form.jsx`):** Maneja el estado, validaciones, referencias y eventos principales con su archivo de estilos `user-profile-form.css`.

```text
src/
└── components/
    ├── atoms/
    │   └── form-input/
    │       ├── form-input.css          # Estilos en kebab-case
    │       └── form-input.jsx          # Átomo (Input con label)
    ├── molecules/
    │   └── user-form-fields/
    │       ├── user-form-fields.css    # Estilos en kebab-case
    │       └── user-form-fields.jsx    # Molécula (Grupo de campos)
    └── organisms/
        └── user-profile-form/
            ├── user-profile-form.css   # Estilos en kebab-case
            └── user-profile-form.jsx   # Organismo (Manejador principal)

```

---

## 🌟 Buenas Prácticas de React Aplicadas

1. **Atributos únicos con `useId`:** Garantiza la asociación entre la `<label>` y el `<input>` mediante un identificador único accesible.
2. **Reenvío de referencias (`React.forwardRef`):** Permite acceder al nodo del DOM de un hijo desde un componente superior.
3. **Formularios controlados con objeto único:** Manejar los datos con un solo objeto en lugar de múltiples `useState` individuales.
4. **Validación de props con `PropTypes`:** Previene errores verificando el tipo de datos recibidos.

---

## 💻 Instalación de la Librería

```bash
# Instalación de PropTypes
npm install prop-types

```

---

## 💡 Pistas para el Ejercicio: Formulario de Usuario

### 1. Estilos CSS (`form-input.css`)

Ubicación: `src/components/atoms/form-input/form-input.css`

```css
.form-input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.form-input-label {
  font-weight: bold;
}

.form-input-field {
  padding: 8px;
  border: 1px solid #ccc;
}

```

---

### 2. Átomo `FormInput` (`form-input.jsx`)

Ubicación: `src/components/atoms/form-input/form-input.jsx`

```jsx
import { useId, forwardRef } from 'react';
import PropTypes from 'prop-types';
import './form-input.css';

export const FormInput = forwardRef(function FormInput({ label, name, type, value, onChange }, ref) {
  // Pista 1: Genera un ID único para la accesibilidad
  const inputId = /* usa el hook correspondiente */;

  return (
    <div className="form-input-group">
      <label htmlFor={/* asigna el ID */} className="form-input-label">
        {label}
      </label>
      <input
        ref={ref}
        id={/* asigna el ID */}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="form-input-field"
      />
    </div>
  );
});

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
};

```

---

### 3. Molécula `UserFormFields` (`user-form-fields.jsx`)

Ubicación: `src/components/molecules/user-form-fields/user-form-fields.jsx`

```jsx
import PropTypes from 'prop-types';
import { FormInput } from '../../atoms/form-input/form-input';

export function UserFormFields({ datosFormulario, onChange, nombreInputRef }) {
  return (
    <div className="user-form-fields">
      {/* Campo Nombre: Conecta la referencia 'nombreInputRef' aquí */}
      <FormInput
        ref={/* pasa la referencia aquí */}
        label="Nombre"
        name="nombre"
        value={datosFormulario.nombre}
        onChange={onChange}
      />

      {/* Campo Correo: Completa los valores de las props */}
      <FormInput
        label="Correo"
        name="correo"
        type="email"
        value={/* extrae el valor desde datosFormulario */}
        onChange={onChange}
      />

      {/* Campo Edad: Completa las props necesarias */}
      <FormInput
        label="Edad"
        name="edad"
        type="number"
        value={/* extrae el valor desde datosFormulario */}
        onChange={onChange}
      />
    </div>
  );
}

UserFormFields.propTypes = {
  datosFormulario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  nombreInputRef: PropTypes.object,
};

```

---

### 4. Organismo `UserProfileForm` (`user-profile-form.jsx`)

Ubicación: `src/components/organisms/user-profile-form/user-profile-form.jsx`

```jsx
import { useState, useRef } from 'react';
import { UserFormFields } from '../../molecules/user-form-fields/user-form-fields';

export function UserProfileForm() {
  const estadoInicial = { nombre: '', correo: '', edad: '' };

  // Pista 1: Inicializa los estados para los datos, el resultado y los errores
  const [formData, setFormData] = useState(estadoInicial);
  const [datosGuardados, setDatosGuardados] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState('');

  // Pista 2: Crea la referencia para el input del nombre
  const nombreInputRef = useRef(null);

  // Manejador del cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Pista 3: Actualiza el estado dinámicamente según la propiedad 'name'
    setFormData((prev) => ({
      ...prev,
      /* actualiza el campo correspondiente */
    }));
  };

  // Manejador del botón "Limpiar"
  const handleReset = () => {
    // Pista 4: Resetea los estados y usa la referencia para enfocar el input
    setFormData(estadoInicial);
    setDatosGuardados(null);
    setErrorMensaje('');
    
    if (nombreInputRef.current) {
      /* enfoca el campo de nombre utilizando el nodo almacenado */
    }
  };

  return (
    <section className="user-profile-form">
      <form onSubmit={/* asigna el handler del envío */}>
        <UserFormFields
          datosFormulario={formData}
          onChange={handleChange}
          nombreInputRef={nombreInputRef}
        />

        {/* Muestra mensaje de error si existe */}
        {errorMensaje && <p className="mensaje-error">{errorMensaje}</p>}

        <button type="submit">Guardar</button>
        <button type="button" onClick={handleReset}>Limpiar</button>
      </form>

      {/* Renderizado del resultado */}
      {datosGuardados && (
        <div className="tarjeta-resultado">
          <h3>Datos Ingresados:</h3>
          {/* Muestra nombre, correo y edad guardados */}
        </div>
      )}
    </section>
  );
}

```

---

### 🚀 Reto Extra: Lógica de Envío y Validación (`onSubmit`)

Ubicación: `src/components/organisms/user-profile-form/user-profile-form.jsx`

```jsx
const handleSubmit = (e) => {
  // Pista 1: Evita que la página vuelva a cargarse
  /* llama al método de evento correspondiente */;

  // Pista 2: Validar si el nombre está vacío
  if (!formData.nombre.trim()) {
    setErrorMensaje('El nombre es obligatorio.');
    return;
  }

  // Pista 3: Validar si el correo está vacío
  if (!formData.correo.trim()) {
    /* asigna el mensaje de error adecuado */
    return;
  }

  // Pista 4: Validar edad correcta
  if (!formData.edad || Number(formData.edad) <= 0) {
    /* asigna el mensaje de error para edad */
    return;
  }

  // Pista 5: Si pasa las validaciones, guarda y limpia errores
  setErrorMensaje('');
  setDatosGuardados(/* pasa los datos recopilados */);
};

```
---

## 🔴 Difícil — Lista de tareas con componentes

**Meta:** construir una lista de tareas completa donde el usuario pueda **agregar, completar y eliminar tareas**, separando la aplicación en varios componentes.

La aplicación debe permitir:

* Escribir una tarea.
* Agregarla a la lista.
* Marcarla como completada.
* Eliminarla.
* Mostrar cuántas tareas existen.
* Mostrar cuántas tareas están completadas.

Cada tarea debe tener como mínimo:

```text
{
  id,
  title,
  completed
}
```

**Hooks y conceptos que debes utilizar:**

* `useState`
* `useRef`
* `useId`
* `onChange`
* `onSubmit`
* `onClick`
* Props
* Comunicación entre componentes
* Actualización inmutable de arrays y objetos

**Pistas para resolverlo:**

1. Guarda la lista de tareas utilizando `useState`.
2. Cada tarea debe ser un objeto independiente con su propio `id`.
3. Para agregar una tarea, crea una nueva lista que contenga las tareas anteriores y la nueva tarea.
4. No modifiques directamente el array existente.
5. Para eliminar una tarea, crea una nueva lista excluyendo la tarea seleccionada.
6. Para completar una tarea, crea una nueva lista donde solamente cambie la tarea seleccionada.
7. Utiliza `onClick` para las acciones de completar y eliminar.
8. Utiliza `onChange` para controlar el campo donde se escribe la tarea.
9. Utiliza `onSubmit` para agregar la tarea mediante el formulario.
10. Utiliza `useId` para identificar correctamente los elementos relacionados del formulario.
11. Utiliza `useRef` para acceder al campo de texto y, después de agregar una tarea, devolverle el foco.

### 🧩 Reto extra — Separar responsabilidades

Divide la aplicación en componentes:

```text
TodoApp
├── TodoForm
└── TodoList
    └── TodoItem
```

El estado de las tareas debe permanecer en `TodoApp`.

`TodoForm` debe recibir mediante **props** la función necesaria para agregar una tarea.

`TodoList` debe recibir mediante **props** las tareas y las funciones necesarias para modificarlas.

`TodoItem` debe recibir mediante **props** la información de una tarea y las acciones disponibles.

El objetivo es entender cómo **compartir estado entre componentes sin duplicarlo** y cómo utilizar **props + eventos** para comunicar acciones entre ellos.

---

## 📁 Ubicación según Atomic Design

Dividiremos la aplicación respetando **Atomic Design** con la estructura solicitada y aplicando la nomenclatura **kebab-case** tanto a las carpetas como a los archivos:

* **Átomo (`src/components/atoms/todo-item/todo-item.jsx`):** Representa una tarea individual con su casillero de verificación, título y botón de eliminar, con su archivo de estilos `todo-item.css`.
* **Molécula (`src/components/molecules/todo-form/todo-form.jsx`):** Formulario para escribir y agregar nuevas tareas, con su archivo de estilos `todo-form.css`.
* **Molécula (`src/components/molecules/todo-list/todo-list.jsx`):** Recibe el listado de tareas, maneja el caso cuando no hay elementos y renderiza los átomos `TodoItem`, con su archivo de estilos `todo-list.css`.
* **Organismo (`src/components/organisms/todo-app/todo-app.jsx`):** Almacena el estado global de la aplicación, calcula los contadores (totales y completadas) y pasa las callbacks correspondientes a sus componentes hijos, con su archivo de estilos `todo-app.css`.

```text
src/
└── components/
    ├── atoms/
    │   └── todo-item/
    │       ├── todo-item.css           # Estilos del ítem (kebab-case)
    │       └── todo-item.jsx           # Átomo (Muestra una tarea)
    ├── molecules/
    │   ├── todo-form/
    │   │   ├── todo-form.css          # Estilos del formulario (kebab-case)
    │   │   └── todo-form.jsx          # Molécula (Agregar tarea)
    │   └── todo-list/
    │       ├── todo-list.css          # Estilos de la lista (kebab-case)
    │       └── todo-list.jsx          # Molécula (Iterador de tareas)
    └── organisms/
        └── todo-app/
            ├── todo-app.css           # Estilos de la aplicación (kebab-case)
            └── todo-app.jsx           # Organismo (Gestor principal del estado)

```

---

## 🌟 Buenas Prácticas de React Aplicadas

1. **Inmutabilidad en arreglos:** Nunca agregues elementos con `.push()`, ni elimines con `.splice()`, ni cambies propiedades directas de un objeto. Utiliza métodos que retornen nuevos arreglos (`[...]`, `.filter()`, `.map()`).
2. **Elevación de estado (Lifting State Up):** El estado principal vive únicamente en `todo-app.jsx`. Los componentes hijos se comunican hacia arriba mediante funciones *callback* pasadas por **props**.
3. **Identificadores accesibles:** Uso de `useId` en `todo-form.jsx` para enlazar el `<label>` con el `<input>`.
4. **Acceso al DOM con `useRef`:** Enfoque del `<input>` mediante `.focus()` tras agregar una nueva tarea.
5. **Validación de tipos:** Garantizar con `PropTypes` la forma exacta de los objetos (`PropTypes.shape`) y las acciones pasadas como funciones.

---

## 💻 Instalación de la Librería

```bash
# Instalación de PropTypes
npm install prop-types

```

---

## 💡 Pistas para el Ejercicio: Lista de Tareas

### 1. Estilos CSS del Átomo (`todo-item.css`)

Ubicación: `src/components/atoms/todo-item/todo-item.css`

```css
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

.todo-item-completed {
  text-decoration: line-through;
  opacity: 0.6;
}

```

---

### 2. Átomo `TodoItem` (`todo-item.jsx`)

Ubicación: `src/components/atoms/todo-item/todo-item.jsx`

Recibe la tarea e invoca las callbacks pasadas por props enviando el `id` correspondiente.

```jsx
import PropTypes from 'prop-types';
import './todo-item.css';

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <label className={todo.completed ? 'todo-item-completed' : ''}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={/* Pista: llama a la función onToggle pasando el id de la tarea */}
        />
        {todo.title}
      </label>

      <button onClick={/* Pista: llama a la función onDelete pasando el id de la tarea */}>
        Eliminar
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

```

---

### 3. Molécula `TodoForm` (`todo-form.jsx`)

Ubicación: `src/components/molecules/todo-form/todo-form.jsx`

Maneja el texto local del input, genera un ID de accesibilidad con `useId` y usa `useRef` para enfocar el campo tras agregar una tarea.

```jsx
import { useState, useRef, useId } from 'react';
import PropTypes from 'prop-types';
import './todo-form.css';

export function TodoForm({ onAddTodo }) {
  const [texto, setTexto] = useState('');
  
  // Pista 1: Genera un ID accesible y una ref para el input
  const inputId = /* usa el hook useId */;
  const inputRef = /* usa el hook useRef */;

  const handleSubmit = (e) => {
    // Pista 2: Detén el envío del formulario
    /* evita la recarga de página */;

    if (!texto.trim()) return;

    // Pista 3: Envía el texto a la callback del padre y limpia el estado local
    onAddTodo(texto.trim());
    setTexto('');

    // Pista 4: Devuelve el foco al input usando la referencia
    if (inputRef.current) {
      /* invoca el método para dar foco */;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor={/* pasa el ID generado */}>Nueva Tarea:</label>
      <input
        id={/* pasa el ID generado */}
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

```

---

### 4. Molécula `TodoList` (`todo-list.jsx`)

Ubicación: `src/components/molecules/todo-list/todo-list.jsx`

Recibe la lista de tareas, valida si está vacía e itera pasando las funciones al átomo.

```jsx
import PropTypes from 'prop-types';
import { TodoItem } from '../../atoms/todo-item/todo-item';
import './todo-list.css';

export function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  // Pista: Aplica un retorno temprano si no hay elementos
  if (todos.length === 0) {
    return <p className="todo-list-empty">No hay tareas creadas.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={/* pasa la callback para cambiar estado */}
          onDelete={/* pasa la callback para eliminar */}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

```

---

### 5. Organismo `TodoApp` (`todo-app.jsx`)

Ubicación: `src/components/organisms/todo-app/todo-app.jsx`

Mantiene el estado principal de la lista, calcula los totales e implementa las funciones de modificación inmutable.

```jsx
import { useState } from 'react';
import { TodoForm } from '../../molecules/todo-form/todo-form';
import { TodoList } from '../../molecules/todo-list/todo-list';
import './todo-app.css';

export function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Pista 1: Crear una nueva tarea sin modificar el arreglo anterior
  const handleAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    // Actualización inmutable agregando la nueva tarea
    setTodos((prevTodos) => [/* combina el arreglo previo con newTodo */]);
  };

  // Pista 2: Invertir el estado 'completed' de la tarea seleccionada
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          // Retorna una copia del objeto invirtiendo 'completed'
          return { ...todo, completed: /* invierte el valor booleano */ };
        }
        return todo;
      })
    );
  };

  // Pista 3: Eliminar una tarea conservando solo las que tengan ID diferente
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => /* filtra las tareas excluyendo el id recibido */);
  };

  // Pista 4: Métricas calculadas en cada renderizado
  const totalTareas = todos.length;
  const tareasCompletadas = todos.filter((todo) => todo.completed).length;

  return (
    <section className="todo-app">
      <h2>Lista de Tareas</h2>
      
      <div className="todo-app-stats">
        <p>Total: {totalTareas}</p>
        <p>Completadas: {tareasCompletadas}</p>
      </div>

      <TodoForm onAddTodo={handleAddTodo} />
      
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </section>
  );
}

```

------------------------------------------------------------------------

# Día 4 — 🔄 Efectos, ciclo de vida y sincronización con datos externos

**`useEffect` · `useLayoutEffect` · `useState` · `useRef` · Eventos**

---

## 🎯 Qué aprender

En este día aprenderás cómo React maneja el **estado, los eventos, los efectos y la interacción con elementos externos al componente**.

### `useState`

Aprenderás:

* Qué es el estado de un componente.
* Cómo crear estado.
* Cómo actualizar estado.
* Qué significa que React vuelva a renderizar un componente.
* Cómo actualizar el estado basándose en su valor anterior.
* Cómo trabajar con objetos y arrays dentro del estado.
* Por qué no debes modificar directamente el estado.
* Cómo distinguir entre estado y datos derivados.
* Cómo evitar estados innecesarios.

### Eventos de React

Aprenderás:

* Cómo responder a `clicks`.
* Cómo manejar cambios en inputs.
* Cómo manejar formularios.
* Cómo utilizar `onClick`.
* Cómo utilizar `onChange`.
* Cómo utilizar `onSubmit`.
* Cómo utilizar `onFocus` y `onBlur`.
* Cómo utilizar eventos de teclado.
* Qué es el objeto `event`.
* Qué significa `event.target`.
* Cómo utilizar `preventDefault`.
* Cómo funciona la propagación de eventos.

### `useEffect`

Aprenderás:

* Qué problema resuelve `useEffect`.
* Qué significa un efecto secundario.
* Cuándo utilizar `useEffect`.
* Cuándo NO utilizar `useEffect`.
* Cómo ejecutar código después de un render.
* Cómo utilizar el array de dependencias.
* Qué significa `[]`.
* Qué significa tener dependencias.
* Cómo reaccionar ante cambios de estado o props.
* Cómo realizar sincronización con APIs externas.
* Cómo trabajar con timers.
* Cómo trabajar con eventos del navegador.
* Cómo trabajar con suscripciones.
* Cómo realizar cleanup.
* Cómo evitar loops infinitos.
* Cómo evitar efectos innecesarios.
* Cómo entender `StrictMode`.

### `useLayoutEffect`

Aprenderás:

* Qué diferencia existe entre `useEffect` y `useLayoutEffect`.
* Cuándo se ejecuta `useLayoutEffect`.
* Qué relación tiene con el navegador y el proceso de paint.
* Cómo medir elementos del DOM.
* Cómo utilizar `getBoundingClientRect()`.
* Cuándo utilizarlo para evitar parpadeos visuales.
* Por qué no debes utilizarlo innecesariamente.
* Por qué `useEffect` debe ser la opción por defecto en la mayoría de casos.

### `useRef`

Aprenderás:

* Qué es una referencia.
* Cómo acceder a elementos del DOM.
* Cómo utilizar `.current`.
* Cómo enfocar un input.
* Cómo conservar información entre renders.
* Por qué modificar un `ref` no provoca un render.
* Diferencias entre `useRef` y `useState`.
* Cuándo utilizar `useRef`.
* Cuándo NO utilizar `useRef`.

---

# ⭐ Orden recomendado para estudiar los recursos

No necesitas consumir los 30+ recursos completos de manera lineal.

### Primero — Fundamentos

1. [Estado como una instantánea](https://es.react.dev/learn/state-as-a-snapshot)
2. [Responder a eventos](https://es.react.dev/learn/responding-to-events)
3. [useState](https://es.react.dev/reference/react/useState)
4. [useRef](https://es.react.dev/reference/react/useRef)

### Segundo — Effects

5. [useEffect](https://es.react.dev/reference/react/useEffect)
6. [Sincronizar con Effects](https://es.react.dev/learn/synchronizing-with-effects)
7. [Ciclo de vida de los Effects](https://es.react.dev/learn/lifecycle-of-reactive-effects)
8. [¿Necesitas un Effect?](https://es.react.dev/learn/you-might-not-need-an-effect)

### Tercero — Buenas prácticas

9. [Separar eventos de Effects](https://es.react.dev/learn/separating-events-from-effects)
10. [Eliminar dependencias de Effects](https://es.react.dev/learn/removing-effect-dependencies)
11. [Reglas de los Hooks](https://es.react.dev/reference/rules)

### Cuarto — DOM y layout

12. [Manipular el DOM con refs](https://es.react.dev/learn/manipulating-the-dom-with-refs)
13. [useLayoutEffect](https://es.react.dev/reference/react/useLayoutEffect)

### Quinto — Video

14. [Curso de React — midudev](https://cursoreact.dev/)
15. [useEffect + Fetch API — JAB](https://www.youtube.com/watch?v=pBNHeb8QTN0)
16. [Buenas prácticas de useEffect — Manuel Sánchez](https://www.youtube.com/watch?v=fvERkIfFLmo)

---

Lo importante es aprender a identificar **qué problema estás intentando resolver**.

```text
¿Necesito almacenar información que cambia la UI?
                    ↓
                useState


¿Necesito responder a una interacción?
                    ↓
                  Evento


¿Necesito sincronizarme con algo externo?
                    ↓
                useEffect


¿Necesito acceder a un elemento DOM?
                    ↓
                 useRef


¿Necesito medir/modificar layout antes del paint?
                    ↓
            useLayoutEffect
```
---


# 📚 Documentación

> **Prioridad:** documentación oficial de React en español.

---

### 1. Documentación oficial de React

[React — documentación oficial en español](https://es.react.dev/)

Fuente principal para estudiar React. La documentación oficial actual está organizada en aprendizaje y referencia de API.

---

### 2. `useState`

[useState — React](https://es.react.dev/reference/react/useState)

Documentación oficial del Hook:

```text
useState
```

---

### 3. `useEffect`

[useEffect — React](https://es.react.dev/reference/react/useEffect)

Documentación oficial del Hook para sincronización con sistemas externos.

---

### 4. `useLayoutEffect`

[useLayoutEffect — React](https://es.react.dev/reference/react/useLayoutEffect)

Documentación oficial sobre Effects relacionados con el layout.

---

### 5. `useRef`

[useRef — React](https://es.react.dev/reference/react/useRef)

Documentación oficial para referencias y valores persistentes.

---

### 6. Responder a eventos

[Responder a eventos — React](https://es.react.dev/learn/responding-to-events)

Documentación oficial sobre:

* `onClick`
* handlers
* propagación
* eventos
* `preventDefault`

---

### 7. Estado como una instantánea

[Estado como una instantánea — React](https://es.react.dev/learn/state-as-a-snapshot)

Explica uno de los conceptos fundamentales de React:

> El estado pertenece a un render concreto.

---

### 8. Actualizar objetos en el estado

[Actualizar objetos en el estado — React](https://es.react.dev/learn/updating-objects-in-state)

Explica cómo actualizar correctamente objetos sin mutar el estado.

---

### 9. Actualizar arrays en el estado

[Actualizar arrays en el estado — React](https://es.react.dev/learn/updating-arrays-in-state)

Explica las formas correctas de modificar arrays almacenados en el estado.

---

### 10. Sincronizar con Effects

[Sincronizar con Effects — React](https://es.react.dev/learn/synchronizing-with-effects)

Una de las páginas fundamentales para este día.

---

### 11. Ciclo de vida de los Effects

[El ciclo de vida de los Effects — React](https://es.react.dev/learn/lifecycle-of-reactive-effects)

Explica cómo pensar sobre el ciclo de vida de un Effect.

---

### 12. ¿Necesitas un Effect?

[¿Necesitas un Effect? — React](https://es.react.dev/learn/you-might-not-need-an-effect)

Probablemente la documentación más importante para aprender a **no abusar de `useEffect`**.

---

### 13. Separar eventos de Effects

[Separar los Events de los Effects — React](https://es.react.dev/learn/separating-events-from-effects)

Ayuda a distinguir eventos causados por el usuario de sincronizaciones causadas por cambios reactivos.

---

### 14. Eliminar dependencias de Effects

[Eliminar dependencias de Effects — React](https://es.react.dev/learn/removing-effect-dependencies)

Fundamental para entender correctamente:

```jsx
useEffect(() => {
  // ...
}, [dependencies]);
```

---

### 15. Referenciar valores con refs

[Referenciar valores con refs — React](https://es.react.dev/learn/referencing-values-with-refs)

Explica el uso de `useRef` para conservar información entre renders.

---

### 16. Manipular el DOM con refs

[Manipular el DOM con refs — React](https://es.react.dev/learn/manipulating-the-dom-with-refs)

Fundamental para comprender:

```jsx
ref
```

y:

```jsx
ref.current
```

---

### 17. Reutilizar lógica con Hooks personalizados

[Reutilizar lógica con Hooks personalizados — React](https://es.react.dev/learn/reusing-logic-with-custom-hooks)

Te prepara para posteriormente crear Hooks como:

```text
useFetch
usePagination
useDebounce
useModal
useAuth
```

---

### 18. Reglas de los Hooks

[Reglas de los Hooks — React](https://es.react.dev/reference/rules)

Explica las reglas que deben respetarse al utilizar Hooks.

---

### 19. Referencia de Hooks

[Referencia de Hooks — React](https://es.react.dev/reference/react/hooks)

Referencia general de los Hooks disponibles en React.

---

### 20. API de React

[Referencia de API de React](https://es.react.dev/reference/react)

Referencia oficial de las APIs de React.

---

# ✅ Buenas prácticas

> **Objetivo:** aprender no solamente "cómo funciona" cada Hook, sino **cuándo utilizarlo y cuándo evitarlo**.

---

### 1. Buenas prácticas oficiales de `useEffect`

[¿Necesitas un Effect? — React](https://es.react.dev/learn/you-might-not-need-an-effect)

Una de las lecturas más importantes de todo este día.

React explica situaciones donde utilizar `useEffect` es innecesario.

---

### 2. Sincronizar con Effects

[Sincronizar con Effects — React](https://es.react.dev/learn/synchronizing-with-effects)

Explica el concepto moderno de Effects y cómo pensar correctamente sobre ellos.

---

### 3. Lifecycle de Effects

[El ciclo de vida de los Effects — React](https://es.react.dev/learn/lifecycle-of-reactive-effects)

Muy importante para comprender que los Effects tienen su propio ciclo de sincronización.

---

### 4. Separar eventos de Effects

[Separar los Events de los Effects — React](https://es.react.dev/learn/separating-events-from-effects)

Ayuda a diferenciar:

```text
Evento del usuario
        vs
Effect de sincronización
```

Esto evita muchos `useEffect` innecesarios.

---

### 5. Eliminar dependencias de Effects

[Eliminar dependencias de Effects — React](https://es.react.dev/learn/removing-effect-dependencies)

Material importante para comprender correctamente el array de dependencias.

---

### 6. Buenas prácticas de useEffect — Manuel Sánchez

[Vuélvete un experto en las buenas prácticas de useEffect](https://www.youtube.com/watch?v=fvERkIfFLmo)

Video centrado específicamente en buenas prácticas, cleanup, loading, error y dependencias.

---

### 7. Reglas de Hooks

[Reglas de los Hooks — React](https://es.react.dev/reference/rules)

Debes conocer las reglas fundamentales para utilizar Hooks correctamente.

---

### 8. Hooks personalizados

[Reutilizar lógica con Hooks personalizados — React](https://es.react.dev/learn/reusing-logic-with-custom-hooks)

Aprenderás cuándo tiene sentido extraer lógica a un custom Hook.

---

### 9. Estado derivado y Effects

[¿Necesitas un Effect? — React](https://es.react.dev/learn/you-might-not-need-an-effect)

Especialmente importante para evitar patrones como:

```text
state
  ↓
useEffect
  ↓
otro state
  ↓
render
```

cuando simplemente podrías calcular el valor durante el render.

---

### 10. Pensamiento correcto sobre Effects

[Sincronizar con Effects — React](https://es.react.dev/learn/synchronizing-with-effects)

La recomendación fundamental es pensar en un Effect como una forma de **sincronizar el componente con un sistema externo**, no simplemente como "código que se ejecuta después del render".

---

### 11. Buenas prácticas para `useRef`

[Referenciar valores con refs — React](https://es.react.dev/learn/referencing-values-with-refs)

Explica cuándo un ref es apropiado y por qué cambiar `.current` no provoca un render.

---

### 12. Buenas prácticas para eventos

[Responder a eventos — React](https://es.react.dev/learn/responding-to-events)

Explica cómo estructurar correctamente los handlers y cómo funciona la propagación de eventos.

---


# 🔗 Cursos

> **Objetivo:** aquí encontrarás cursos y clases en video en español para aprender React, Hooks, eventos, `useState`, `useEffect` y `useRef`.

### 1. Curso React — midudev

[Curso de React.js desde cero — midudev](https://cursoreact.dev/)

Curso completo de React en español. Es uno de los recursos principales que recomiendo para acompañar este día.

---

### 2. Curso React — JAB

[Curso de React desde cero — JAB](https://www.youtube.com/watch?v=pBNHeb8QTN0)

La serie explica React desde cero y contiene clases específicas sobre eventos, `useRef`, `useState` y `useEffect`. La clase de `useEffect` también aborda `fetch`.

---

### 3. useEffect + Fetch API — JAB

[useEffect, Fetch API y Spread Operator](https://www.youtube.com/watch?v=pBNHeb8QTN0)

Especialmente útil para la parte de este día relacionada con:

* `useEffect`
* Fetch API
* datos externos
* actualización del estado

---

### 4. Eventos + useRef — JAB

[Eventos, funciones, target y useRef](https://www.youtube.com/results?search_query=JAB+React+eventos+useRef+target+espa%C3%B1ol)

Clase centrada en eventos y `useRef`.

---

### 5. useState — JAB

[React useState — JAB](https://www.youtube.com/results?search_query=JAB+React+useState+espa%C3%B1ol)

Para reforzar específicamente el funcionamiento del estado.

---

### 6. useEffect — Manuel Sánchez WEB

[Buenas prácticas de useEffect](https://www.youtube.com/watch?v=fvERkIfFLmo)

Video específicamente dedicado a `useEffect`, incluyendo dependencias, loading, error y cleanup.

---

### 7. Curso React — Fazt

[Curso React en español — Fazt](https://www.youtube.com/results?search_query=Fazt+React+curso+espa%C3%B1ol+Hooks)

Curso y clases de React en español.

---

### 8. Curso React — HolaMundo

[Curso React — HolaMundo](https://www.youtube.com/results?search_query=HolaMundo+React+curso+espa%C3%B1ol)

Contenido de React y desarrollo frontend en español.

---

### 9. Curso React — Fernando Herrera

[React desde cero — Fernando Herrera](https://www.youtube.com/results?search_query=Fernando+Herrera+React+curso+espa%C3%B1ol+Hooks)

Curso y clases de React con especial atención a Hooks y arquitectura de aplicaciones.

---

### 10. Curso React — EDteam

[React en español — EDteam](https://www.youtube.com/results?search_query=EDteam+React+Hooks+espa%C3%B1ol)

Contenido de React y Hooks en español.

---

### 11. Curso React — Código Facilito

[React — Código Facilito](https://www.youtube.com/results?search_query=C%C3%B3digo+Facilito+React+Hooks+espa%C3%B1ol)

Material complementario para React y Hooks.

---

### 12. React Hooks — Pablo Monteserín

[React Hooks — Pablo Monteserín](https://pablomonteserin.com/curso/react/)

Curso en español con contenido relacionado con:

* `useState`
* `useEffect`
* `useRef`
* Fetch
* Axios

---

# 📦 Qué debes entregar hoy

Una pequeña aplicación React que demuestre que puedes trabajar con:

* `useState`
* `useEffect`
* `useRef`
* Eventos de React
* Formularios
* Inputs controlados
* Renderizado condicional
* Renderizado de listas
* `fetch`
* Estados de carga y error
* Cleanup
* Comunicación con una API externa

Los ejercicios aumentarán progresivamente de dificultad.

---

# 💪 Ejercicios

# 🟢 Fácil — Formulario interactivo

## 🎯 Meta

Crear un pequeño formulario interactivo que permita al usuario ingresar su nombre y mostrar información sobre las acciones que realiza.

La pantalla debería tener algo parecido a:

```text
-----------------------------------
       PERFIL DE USUARIO
-----------------------------------

Nombre:
[________________________]

Email:
[________________________]

[ Limpiar ]

Hola, Juan

Estado:
Input activo
-----------------------------------
```

El objetivo principal es practicar **estado y eventos de React**.

---

## 💡 Pistas para resolverlo

### Pista 1 — Estado

Necesitas guardar el valor de los inputs.

Piensa en:

```jsx
const [name, setName] = useState('');
```

Y otro estado para:

```jsx
const [email, setEmail] = useState('');
```

Tú debes decidir cómo conectar cada estado con su input.

---

### Pista 2 — Input controlado

Investiga cómo utilizar:

```jsx
<input
  value={...}
  onChange={...}
/>
```

Pregunta:

> ¿Qué propiedad controla el valor actual del input?

---

### Pista 3 — onChange

Cuando el usuario escriba:

```jsx
onChange={(event) => {
  // ...
}}
```

Investiga:

```jsx
event.target.value
```

La idea es que el estado represente exactamente lo que está escrito.

---

### Pista 4 — onFocus

Cuando el usuario entre al campo:

```jsx
onFocus={() => {
  // ...
}}
```

puedes cambiar un estado que represente:

```text
Campo activo
```

Piensa en algo como:

```jsx
const [focusedField, setFocusedField] = useState(null);
```

---

### Pista 5 — onBlur

Cuando el usuario abandone el campo:

```jsx
onBlur={() => {
  // ...
}}
```

puedes actualizar nuevamente:

```jsx
setFocusedField(...)
```

Pregunta:

> ¿Cómo podrías saber si está enfocado `name` o `email`?

---

### Pista 6 — onKeyDown

Agrega un comportamiento especial cuando el usuario presione:

```text
Enter
```

Investiga:

```jsx
onKeyDown={(event) => {
  // ...
}}
```

y:

```jsx
event.key
```

Puedes detectar:

```jsx
if (event.key === 'Enter') {
  // ...
}
```

Tú decides qué debería suceder.

---

### Pista 7 — onClick

El botón:

```jsx
<button>
  Limpiar
</button>
```

debe eliminar la información introducida.

Piensa en:

```jsx
setName(...)
setEmail(...)
```

No necesitas recargar la página.

---

### Pista 8 — Mostrar información

Debajo del formulario muestra algo como:

```jsx
<p>
  Hola, {name}
</p>
```

Pero piensa:

> ¿Qué debería mostrarse si todavía no existe un nombre?

Investiga:

```text
renderizado condicional
```

---

### Pista 9 — Validación sencilla

Si el usuario abandona el campo vacío, puedes mostrar:

```text
El nombre es obligatorio
```

Investiga:

```jsx
if (!name.trim()) {
  // ...
}
```

No necesitas crear todavía un sistema complejo de validación.

---

### ⭐ Reto extra

Agrega:

```text
Contador de caracteres
```

Por ejemplo:

```text
Nombre:
[ Juan Carlos ]

Caracteres: 11
```

Pista:

```jsx
name.length
```

---

### ⭐ Reto extra 2

Agrega un botón:

```text
[ Mostrar información ]
```

y solamente cuando se presione muestra:

```text
Nombre: Juan
Email: juan@email.com
```

Esto te permitirá diferenciar entre:

```text
estado del input
```

y:

```text
estado de la interfaz
```

---

## 📚 Documentación necesaria

### React

* [useState — React](https://es.react.dev/reference/react/useState)
* [Responder a eventos — React](https://es.react.dev/learn/responding-to-events)
* [Estado como una instantánea — React](https://es.react.dev/learn/state-as-a-snapshot)
* [Renderizado condicional — React](https://es.react.dev/learn/conditional-rendering)
* [Renderizar listas — React](https://es.react.dev/learn/rendering-lists)
* [Input — React](https://es.react.dev/reference/react-dom/components/input)

### Eventos

* [Eventos — React](https://es.react.dev/learn/responding-to-events)
* [KeyboardEvent — MDN](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)
* [Element: focus event — MDN](https://developer.mozilla.org/es/docs/Web/API/Element/focus_event)
* [Element: blur event — MDN](https://developer.mozilla.org/es/docs/Web/API/Element/blur_event)

---

# 🟡 Medio — Formulario de registro con validación

## 🎯 Meta

Crear un formulario de registro que controle diferentes campos y valide la información antes de mostrar un resultado.

La interfaz puede ser:

```text
-----------------------------------
       CREAR CUENTA
-----------------------------------

Nombre
[________________________]

Email
[________________________]

Edad
[________________________]

Contraseña
[________________________]

[ Crear cuenta ]

-----------------------------------
```

Debe reaccionar a diferentes eventos del usuario.

---

## 💡 Pistas para resolverlo

### Pista 1 — Estados

Necesitarás almacenar la información del formulario.

Puedes comenzar investigando:

```jsx
const [form, setForm] = useState({
  name: '',
  email: '',
  age: '',
  password: ''
});
```

Pero no copies directamente una solución.

Piensa:

> ¿Cómo modificaría solamente `email` sin eliminar los otros valores?

---

### Pista 2 — Spread Operator

Investiga:

```jsx
setForm(prev => ({
  ...prev,
  ...
}));
```

La idea es conservar el resto de las propiedades.

---

### Pista 3 — onChange

Puedes utilizar un único handler para varios inputs.

Investiga:

```jsx
event.target.name
```

y:

```jsx
event.target.value
```

La idea conceptual es:

```text
input
 ↓
name
 ↓
value
 ↓
estado correspondiente
```

---

### Pista 4 — onFocus

Cuando el usuario entre en un campo:

```jsx
onFocus={...}
```

puedes almacenar:

```text
campo actualmente enfocado
```

Por ejemplo:

```jsx
const [activeField, setActiveField] = useState(null);
```

---

### Pista 5 — onBlur

Cuando salga:

```jsx
onBlur={...}
```

puedes realizar una validación.

Por ejemplo:

```text
Email
 ↓
blur
 ↓
validar
```

No necesitas validar todo mientras escribe.

---

### Pista 6 — onSubmit

El formulario debería utilizar:

```jsx
<form onSubmit={...}>
```

Dentro del handler necesitarás investigar:

```jsx
event.preventDefault();
```

Pregunta:

> ¿Qué ocurriría si no utilizas `preventDefault()`?

---

### Pista 7 — Estado de errores

Puedes tener un estado similar a:

```jsx
const [errors, setErrors] = useState({});
```

Tú debes decidir cómo almacenar errores como:

```text
name
email
age
password
```

---

### Pista 8 — Validación

Piensa en reglas como:

```text
Nombre
→ obligatorio

Email
→ obligatorio
→ debe tener formato válido

Edad
→ debe ser un número

Contraseña
→ debe tener cierta longitud
```

No necesitas utilizar una librería de validación.

El objetivo es practicar React.

---

### Pista 9 — Submit

Cuando todo sea válido, muestra algo como:

```text
✅ Cuenta creada correctamente
```

Puedes tener un estado:

```jsx
const [submitted, setSubmitted] = useState(false);
```

Pregunta:

> ¿Cuándo debería cambiar a `true`?

---

### Pista 10 — useEffect

Agrega una pequeña funcionalidad:

> Cuando el formulario sea enviado correctamente, modifica el título del documento.

Investiga:

```jsx
useEffect(() => {
  document.title = ...;
}, [...]);
```

Pregunta:

> ¿Qué estado debería ser una dependencia?

---

### Pista 11 — useRef

Agrega un comportamiento:

> Cuando exista un error en el formulario, el primer campo con error debería recibir focus.

Para eso necesitarás investigar:

```jsx
const inputRef = useRef(null);
```

y:

```jsx
ref={...}
```

Después:

```jsx
inputRef.current?.focus();
```

No implementes todos los refs todavía.

Primero intenta resolver solamente el primer campo.

---

### ⭐ Reto extra

Cuando el usuario presione:

```text
Escape
```

limpia los errores actuales.

Investiga:

```jsx
event.key === 'Escape'
```

---

### ⭐ Reto extra 2

Agrega un estado:

```text
Guardando...
```

cuando se envía el formulario.

Simula una operación asíncrona con:

```jsx
setTimeout(...)
```

Después muestra:

```text
✅ Registro completado
```

Recuerda investigar cómo limpiar correctamente el timer.

---

### 📚 Documentación necesaria

### Estado

* [useState — React](https://es.react.dev/reference/react/useState)
* [Actualizar objetos en el estado — React](https://es.react.dev/learn/updating-objects-in-state)
* [Estado como una instantánea — React](https://es.react.dev/learn/state-as-a-snapshot)

### Eventos

* [Responder a eventos — React](https://es.react.dev/learn/responding-to-events)
* [Input — React](https://es.react.dev/reference/react-dom/components/input)
* [Form — React](https://es.react.dev/reference/react-dom/components/form)

### Effects

* [useEffect — React](https://es.react.dev/reference/react/useEffect)
* [Sincronizar con Effects — React](https://es.react.dev/learn/synchronizing-with-effects)
* [¿Necesitas un Effect? — React](https://es.react.dev/learn/you-might-not-need-an-effect)

### Refs

* [useRef — React](https://es.react.dev/reference/react/useRef)
* [Manipular el DOM con refs — React](https://es.react.dev/learn/manipulating-the-dom-with-refs)

### Web APIs

* [setTimeout — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout)
* [clearTimeout — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/clearTimeout)
* [KeyboardEvent — MDN](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)

---

# 🔴 Difícil — Buscador de usuarios con Fake API

## 🎯 Meta

Crear un buscador de usuarios utilizando una **Fake API**.

La aplicación deberá:

1. Obtener usuarios desde una API.
2. Mostrar un mensaje mientras carga.
3. Mostrar los usuarios obtenidos.
4. Permitir buscar usuarios.
5. Actualizar la búsqueda mediante `onChange`.
6. Permitir ejecutar la búsqueda con `Enter`.
7. Permitir limpiar la búsqueda.
8. Mostrar un mensaje si ocurre un error.
9. Evitar mostrar resultados antiguos.
10. Manejar correctamente las peticiones anteriores.

---

# 🌐 Fake API

Puedes utilizar:

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

Es una API REST falsa diseñada para realizar pruebas y practicar consumo de APIs.

Puedes utilizar:

```text
https://jsonplaceholder.typicode.com/users
```

Y para buscar un usuario específico:

```text
https://jsonplaceholder.typicode.com/users/1
```

También puedes consultar:

[Documentación oficial de JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)

---

## 🖥️ Interfaz esperada

Conceptualmente:

```text
------------------------------------------
             BUSCADOR DE USUARIOS
------------------------------------------

Buscar usuario

[________________________] [Buscar]

[ Limpiar ]

------------------------------------------

Cargando usuarios...

------------------------------------------

Juan
juan@email.com
Lima

Pedro
pedro@email.com
Arequipa

------------------------------------------
```

Cuando exista un error:

```text
❌ No se pudieron obtener los usuarios
```

Cuando no existan resultados:

```text
No se encontraron usuarios
```

---

# 💡 Pistas para resolverlo

## Pista 1 — Estado inicial

Necesitas almacenar:

```text
usuarios
búsqueda
loading
error
```

Piensa en estructuras como:

```jsx
const [users, setUsers] = useState(...);

const [search, setSearch] = useState('');

const [loading, setLoading] = useState(...);

const [error, setError] = useState(...);
```

Tú debes decidir los valores iniciales.

---

## Pista 2 — Primera petición

Cuando la pantalla aparezca necesitas obtener los usuarios.

Investiga:

```jsx
useEffect(() => {
  // ...
}, []);
```

Pregunta:

> ¿Por qué no quieres hacer el `fetch` directamente dentro del cuerpo del componente?

---

## Pista 3 — fetch

La petición tendrá conceptualmente:

```jsx
const response = await fetch(
  'https://jsonplaceholder.typicode.com/users'
);
```

Después tendrás que investigar:

```jsx
const data = await response.json();
```

Pregunta:

> ¿Qué contiene `response` y qué contiene `data`?

---

## Pista 4 — loading

Antes de comenzar la petición:

```jsx
setLoading(...)
```

Cuando termine:

```jsx
setLoading(...)
```

Pregunta:

> ¿Qué valor debería tener `loading` mientras `fetch()` está esperando?

---

## Pista 5 — error

Investiga:

```jsx
try {
  // ...
} catch (error) {
  // ...
}
```

Y no olvides investigar:

```jsx
response.ok
```

Importante:

> `fetch()` no considera automáticamente todos los códigos HTTP como excepciones.

---

## Pista 6 — Mostrar usuarios

La API devuelve un array.

Necesitarás investigar:

```jsx
users.map(user => (
  ...
))
```

Puedes comenzar mostrando solamente:

```text
name
email
```

Después puedes agregar:

```text
phone
website
company
address
```

---

## Pista 7 — key

Cada elemento debe tener una identidad estable.

Investiga:

```jsx
key={user.id}
```

Pregunta:

> ¿Por qué no sería recomendable utilizar el índice del array como `key` en todos los casos?

---

# 🔎 Segunda parte — Buscar usuarios

Ahora viene la parte realmente importante.

Agrega:

```text
[ Buscar usuario ]
```

---

## Pista 8 — onChange

El texto del input debe almacenarse:

```jsx
onChange={(event) => {
  // ...
}}
```

Investiga:

```jsx
event.target.value
```

---

## Pista 9 — Búsqueda

No necesitas volver a llamar a la API por cada letra.

Como ya tienes:

```text
users
```

puedes investigar cómo utilizar:

```jsx
users.filter(...)
```

La idea conceptual:

```text
usuarios
   ↓
filter()
   ↓
usuarios que coinciden
```

---

## Pista 10 — case insensitive

Quieres que:

```text
juan
```

y:

```text
Juan
```

se consideren iguales.

Investiga:

```jsx
.toLowerCase()
```

Puedes pensar en:

```jsx
user.name.toLowerCase()
```

y:

```jsx
search.toLowerCase()
```

---

## Pista 11 — onSubmit

Haz que el buscador sea un formulario:

```jsx
<form onSubmit={...}>
```

Así podrás ejecutar la búsqueda cuando el usuario presione:

```text
Enter
```

Investiga:

```jsx
event.preventDefault();
```

---

## Pista 12 — botón Buscar

Puedes tener:

```jsx
<button type="submit">
  Buscar
</button>
```

Esto hará que:

```text
Click
   +
Enter
```

puedan ejecutar el mismo comportamiento.

---

## Pista 13 — botón Limpiar

Agrega:

```jsx
<button type="button">
  Limpiar
</button>
```

Este botón debería:

```text
limpiar búsqueda
+
mostrar nuevamente usuarios
```

Tú debes decidir qué estados necesitan cambiar.

---

# ⏳ Tercera parte — Loading

Ahora agrega un estado específico para cuando estés realizando una operación.

Por ejemplo:

```text
Cargando usuarios...
```

Puedes investigar el patrón:

```jsx
if (loading) {
  return ...;
}
```

Pero piensa:

> ¿Quieres ocultar toda la interfaz cuando estás buscando o solamente mostrar un indicador?

---

# 🚨 Cuarta parte — Error

Si la API falla:

```text
❌ No se pudieron cargar los usuarios
```

Investiga cómo utilizar:

```jsx
try {
  ...
} catch {
  ...
}
```

También investiga:

```jsx
response.ok
```

---

# 🧹 Quinta parte — Cleanup

Ahora agrega cancelación de peticiones.

Investiga:

```jsx
const controller = new AbortController();
```

y:

```jsx
fetch(url, {
  signal: controller.signal
});
```

Después piensa en:

```jsx
return () => {
  controller.abort();
};
```

Pregunta:

> ¿Qué problema intenta resolver este cleanup?

---

# 🔄 Sexta parte — Evitar resultados obsoletos

Imagina:

```text
Petición A
   ↓
Usuarios

Petición B
   ↓
Nueva búsqueda
```

Si la petición A termina después que B, podría sobrescribir información.

Investiga:

```text
AbortController
AbortSignal
cleanup
```

Tu objetivo es entender cómo evitar que una petición anterior interfiera con la nueva.

---

# 🧠 Séptima parte — useEffect y dependencias

Si decides realizar una búsqueda automática cuando cambia:

```jsx
search
```

debes investigar:

```jsx
useEffect(() => {
  // búsqueda
}, [search]);
```

Pero antes de implementarlo, piensa:

> ¿Quieres hacer una petición a la API por cada letra?

Si no:

```text
r
re
rea
reac
react
```

investiga:

```text
debounce
```

---

# ⏱️ Octava parte — Debounce

Investiga:

```jsx
setTimeout(...)
```

y:

```jsx
clearTimeout(...)
```

Una estructura conceptual puede ser:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    // operación
  }, 500);

  return () => {
    clearTimeout(timer);
  };
}, [search]);
```

⚠️ Este fragmento es una **pista**, no la solución.

Debes comprender:

```text
search cambia
     ↓
se crea timer
     ↓
usuario vuelve a escribir
     ↓
cleanup
     ↓
timer anterior se cancela
     ↓
nuevo timer
```

---

# 🧹 Novena parte — Búsqueda vacía

Cuando:

```text
search === ''
```

no deberías realizar una búsqueda innecesaria.

Investiga:

```jsx
if (!search.trim()) {
  // ...
}
```

Puedes decidir que:

```text
input vacío
    ↓
mostrar todos
```

o:

```text
input vacío
    ↓
limpiar resultados
```

---

# ⭐ Reto extra 1 — Enter

El usuario debe poder escribir:

```text
Juan
```

y presionar:

```text
Enter
```

para ejecutar la búsqueda.

Pista:

```jsx
<form onSubmit={...}>
```

---

# ⭐ Reto extra 2 — Escape

Si el usuario presiona:

```text
Escape
```

debes limpiar la búsqueda.

Investiga:

```jsx
event.key === 'Escape'
```

---

# ⭐ Reto extra 3 — Focus automático

Cuando la pantalla aparezca, el input de búsqueda debería recibir focus.

Investiga:

```jsx
const searchRef = useRef(null);
```

y:

```jsx
ref={searchRef}
```

Después investiga:

```jsx
searchRef.current?.focus();
```

Pregunta:

> ¿Por qué este caso utiliza `useRef` y no `useState`?

---

# ⭐ Reto extra 4 — Estados de interfaz

Diferencia entre:

```text
Cargando...
```

```text
No se encontraron resultados
```

```text
Usuarios encontrados
```

```text
Error al cargar usuarios
```

Debes pensar en qué combinación de estados representa cada situación.

---

# ⭐ Reto extra 5 — Recargar

Agrega:

```text
[ Recargar usuarios ]
```

El botón debe volver a solicitar los usuarios desde:

```text
https://jsonplaceholder.typicode.com/users
```

sin recargar el navegador.

Investiga cómo compartir una función de fetching entre:

```text
useEffect
```

y:

```text
onClick
```

---

# 📚 Documentación necesaria — Ejercicio difícil

### React

* [useState — React](https://es.react.dev/reference/react/useState)
* [useEffect — React](https://es.react.dev/reference/react/useEffect)
* [useRef — React](https://es.react.dev/reference/react/useRef)
* [Responder a eventos — React](https://es.react.dev/learn/responding-to-events)
* [Sincronizar con Effects — React](https://es.react.dev/learn/synchronizing-with-effects)
* [Ciclo de vida de los Effects — React](https://es.react.dev/learn/lifecycle-of-reactive-effects)
* [¿Necesitas un Effect? — React](https://es.react.dev/learn/you-might-not-need-an-effect)
* [Eliminar dependencias de Effects — React](https://es.react.dev/learn/removing-effect-dependencies)
* [Renderizar listas — React](https://es.react.dev/learn/rendering-lists)
* [Renderizado condicional — React](https://es.react.dev/learn/conditional-rendering)
* [Input — React](https://es.react.dev/reference/react-dom/components/input)
* [Form — React](https://es.react.dev/reference/react-dom/components/form)
* [Manipular el DOM con refs — React](https://es.react.dev/learn/manipulating-the-dom-with-refs)

### JavaScript / Web APIs

* [Fetch API — MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
* [Using Fetch — MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
* [Response.ok — MDN](https://developer.mozilla.org/es/docs/Web/API/Response/ok)
* [Response.json — MDN](https://developer.mozilla.org/es/docs/Web/API/Response/json)
* [AbortController — MDN](https://developer.mozilla.org/es/docs/Web/API/AbortController)
* [AbortSignal — MDN](https://developer.mozilla.org/es/docs/Web/API/AbortSignal)
* [setTimeout — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout)
* [clearTimeout — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/clearTimeout)
* [Array.filter — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.map — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Fake API

* [JSONPlaceholder — Fake REST API](https://jsonplaceholder.typicode.com/)
* [JSONPlaceholder — Guía](https://jsonplaceholder.typicode.com/guide/)
* [JSONPlaceholder — Usuarios](https://jsonplaceholder.typicode.com/users)

------------------------------------------------------------------------

## Día 5 — 🧩 Hooks avanzados y creación de Custom Hooks
**`useMemo` · `useCallback` · `useContext` · `useTransition` · `useDeferredValue` · `useImperativeHandle` · Custom Hooks**

### 🎯 Qué aprender

-   Cómo acceder directamente a un elemento de la pantalla (por ejemplo,
    para enfocar un campo de texto).
-   Cómo evitar que tu página recalcule cosas innecesariamente (para que
    sea más rápida).
-   Cómo compartir información entre muchos componentes sin tener que
    pasarla de mano en mano.
-   Cómo empaquetar una lógica que se repite en algo reutilizable (una
    "herramienta" propia).

### 📦 Qué debes entregar hoy

Una pantalla donde varios componentes comparten información sin que tú
se la pases manualmente a cada uno, más al menos una herramienta propia
reutilizable.

### 💪 Ejercicios

**Fácil --- Enfocar un campo automáticamente** Meta: que un campo de
texto quede seleccionado (listo para escribir) apenas se abre la
pantalla. Pistas para resolverlo:

1.  Busca cómo se obtiene una "referencia directa" a un elemento de la
    pantalla.
2.  Investiga qué función se usa para "enfocar" ese elemento.
3.  Ejecuta esa acción apenas la pantalla se abre.

-   Reto extra: agrega un botón que también enfoque el campo cuando el
    usuario lo presiona.

**Medio --- Herramienta propia de contador** Meta: empaquetar la lógica
de un contador (subir, bajar, reiniciar) para poder usarla en dos
componentes distintos sin repetir código. Pistas para resolverlo:

1.  Piensa qué partes del contador se repiten siempre: el valor guardado
    y las acciones para cambiarlo.
2.  Junta esas partes en una función reutilizable que cualquier
    componente pueda usar.
3.  Usa esa función en dos componentes diferentes y verifica que cada
    uno tenga su propio conteo.

-   Reto extra: evita que las funciones de esa herramienta se vuelvan a
    crear en cada actualización de pantalla (investiga por qué esto
    importa).

**Difícil --- Modo oscuro / claro** Meta: permitir que el usuario cambie
entre un tema oscuro y uno claro, y que ese tema se pueda usar en
cualquier componente sin pasarlo manualmente. Pistas para resolverlo:

1.  Investiga cómo compartir un dato (el tema actual) con toda tu
    aplicación, sin tener que pasarlo componente por componente.
2.  Piensa cómo cambiar ese dato cuando el usuario hace clic en un botón
    de "cambiar tema".
3.  Usa ese dato compartido en al menos dos componentes distintos para
    cambiar sus colores.

-   Reto extra: evita que los colores se vuelvan a calcular si el tema
    no cambió.

> En los siguientes ejercicios agrega pistas similares como:
>
> ``` jsx
> useState(...)
> useEffect(()=>{},[])
> lista.map(...)
> useContext(...)
> <Routes />
> lazy(...)
> ```

### 🔗 Cursos

-   \[ \]

### ✅ Buenas prácticas

-   \[ \]

### 📚 Documentación

-   \[ \]

------------------------------------------------------------------------

## Día 6 — 🌐 Componentes, rutas y estado compartido
**Componentes · `useContext` · `useReducer` · React Router · Custom Hooks**

### 🎯 Qué aprender

-   Cómo tener varias "pantallas" dentro de una misma aplicación y
    moverte entre ellas.
-   Cómo crear pantallas que cambian según un dato en la dirección web
    (por ejemplo, el detalle de un producto según su número).
-   Cómo organizar tus carpetas y archivos a medida que el proyecto
    crece.
-   Una primera forma de manejar datos que muchas pantallas necesitan
    compartir (como un carrito de compras).

### 📦 Qué debes entregar hoy

Una app con al menos 3 pantallas distintas, navegación entre ellas, y
una pantalla que cambia su contenido según un dato en la dirección web.

### 💪 Ejercicios

**Fácil --- Tres pantallas** Meta: crear 3 pantallas (Inicio, Sobre mí,
Contacto) y un menú para moverte entre ellas. Pistas para resolverlo:

1.  Investiga la herramienta que te permite definir varias "pantallas"
    dentro de una sola aplicación.
2.  Crea un componente para cada pantalla.
3.  Arma un menú con enlaces que lleven a cada una.

-   Reto extra: agrega una pantalla especial que se muestre cuando
    alguien visita una dirección que no existe.

**Medio --- Detalle de producto** Meta: crear una pantalla que muestre
información distinta según un número en la dirección web (por ejemplo,
`/producto/3`). Pistas para resolverlo:

1.  Investiga cómo una pantalla puede "leer" ese número desde la
    dirección web.
2.  Usa ese número para buscar y mostrar el producto correspondiente en
    una lista que ya tengas.

-   Reto extra: agrega un botón "volver" que regrese a la pantalla
    anterior sin usar el botón del navegador.

**Difícil --- Carrito de compras simple** Meta: crear una app con un
catálogo de productos y un carrito, donde agregar un producto desde el
catálogo se refleje también en la pantalla del carrito. Pistas para
resolverlo:

1.  Piensa dónde debería "vivir" la información del carrito para que
    varias pantallas puedan usarla y modificarla.
2.  Investiga una forma de compartir esa información sin pasarla
    manualmente por cada componente.
3.  Define qué acciones necesita el carrito: agregar, quitar, y ver el
    total.

-   Reto extra: haz que el carrito no se borre si el usuario recarga la
    página.

> En los siguientes ejercicios agrega pistas similares como:
>
> ``` jsx
> useState(...)
> useEffect(()=>{},[])
> lista.map(...)
> useContext(...)
> <Routes />
> lazy(...)
> ```

### 🔗 Cursos

-   \[ \]

### ✅ Buenas prácticas

-   \[ \]

### 📚 Documentación

-   \[ \]

------------------------------------------------------------------------

## Día 7 — 🚀 Proyecto final: integrar Hooks, componentes y publicar

### 🎯 Qué aprender

-   Cómo juntar todo lo aprendido en un solo proyecto pequeño pero
    completo.
-   Cómo hacer que tu página cargue partes solo cuando se necesitan,
    para que sea más rápida.
-   Cómo preparar tu proyecto para subirlo a internet y que cualquiera
    pueda verlo.

### 📦 Qué debes entregar hoy

Un proyecto pequeño pero funcional, publicado en internet con un enlace
que puedas compartir.

### 💪 Ejercicios

**Fácil --- Lista desde internet** Meta: crear una app que muestre una
lista de elementos (películas, libros, lo que prefieras) traída desde
una página de prueba. Pistas para resolverlo:

1.  Reutiliza lo aprendido sobre pedir datos a internet y mostrarlos.
2.  Agrega un campo de búsqueda que filtre lo que ya está en pantalla
    (sin pedir datos nuevos).

-   Reto extra: ordena la lista alfabéticamente o por otro criterio que
    elijas.

**Medio --- Agregar elementos nuevos** Meta: agregar un formulario que
permita crear un nuevo elemento y que aparezca en la lista sin recargar
la página. Pistas para resolverlo:

1.  Piensa cómo enviar los datos del formulario a la página de prueba.
2.  Una vez enviado, piensa cómo agregar ese nuevo elemento a la lista
    que ya tienes en pantalla.

-   Reto extra: haz que el formulario se muestre solo cuando el usuario
    hace clic en "Agregar", y que no cargue hasta ese momento.

**Difícil --- Proyecto completo y publicado** Meta: completar las
acciones de crear, ver, editar y eliminar elementos, y subir tu proyecto
a internet. Pistas para resolverlo:

1.  Revisa qué acciones te faltan (¿ya puedes editar y eliminar, o solo
    crear y ver?).
2.  Investiga cómo se prepara un proyecto para "producción" antes de
    publicarlo.
3.  Busca una plataforma gratuita para subir proyectos como el tuyo y
    sigue sus pasos.

-   Reto extra: divide tu proyecto en partes que carguen solo cuando el
    usuario visita esa pantalla, y compara el tamaño del proyecto antes
    y después.

> En los siguientes ejercicios agrega pistas similares como:
>
> ``` jsx
> useState(...)
> useEffect(()=>{},[])
> lista.map(...)
> useContext(...)
> <Routes />
> lazy(...)
> ```

### 🔗 Cursos

-   \[ \]

### ✅ Buenas prácticas

-   \[ \]

### 📚 Documentación

-   \[ \]

------------------------------------------------------------------------

## 📝 Notas generales

-   [ ] Espacio libre para anotaciones personales, dudas o temas que
    quieras reforzar.
