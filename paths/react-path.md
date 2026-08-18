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

## Día 5 — 🧩 Optimización y Compartir Datos

**`useMemo` · `useCallback` · `useContext` · Custom Hooks**

---

### 🎯 Qué aprenderás

* Cómo optimizar el rendimiento de tu aplicación evitando recálculos pesados de datos y renderizados innecesarios (`useMemo`).
* Cómo mantener la estabilidad referencial de las funciones para evitar que los componentes hijos optimizados se vuelvan a renderizar sin necesidad (`useCallback`).
* Cómo compartir estados y datos globales de manera limpia entre componentes sin tener que pasar props de mano en mano (*prop drilling*) utilizando `useContext`.
* Cómo empaquetar lógica repetitiva con estados y efectos en funciones reutilizables y limpias (*Custom Hooks*).

---

### 🔍 Desglose y utilidad de cada Hook

| Hook / Concepto | Qué problema resuelve | Qué mejora aporta |
| --- | --- | --- |
| **`useMemo`** | Cálculos matemáticos o transformaciones de datos pesadas que se ejecutan en cada renderizado, aunque los datos no hayan cambiado. | **Rendimiento:** Memoriza el resultado de una función para que solo se vuelva a calcular si sus dependencias cambian. |
| **`useCallback`** | Funciones que se recrean en memoria en cada renderizado, provocando que los componentes hijos se vuelvan a renderizar innecesariamente. | **Estabilidad referencial:** Memoriza la definición de una función entre renderizados para evitar ejecuciones y renders en cascada. |
| **`useContext`** | El paso excesivo de propiedades (*prop drilling*) a través de múltiples niveles de componentes para compartir datos globales (como temas, autenticación o idioma). | **Arquitectura:** Permite acceder a un estado o función global desde cualquier componente descendiente de forma directa y limpia. |
| **Custom Hooks** | Duplicación de lógica con estados y efectos (`useState`, `useEffect`) repartida y copiada en múltiples componentes de la aplicación. | **Reutilización y Mantenimiento:** Extrae la lógica de negocio o de efectos en funciones independientes, limpiando los componentes visuales. |

---

### 🔗 Cursos (Deep Dive)

* 🎥 **[Curso Avanzado de React: Hooks, Rendimiento y Patrones](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DF0fR-xV4H8o)** — *Duración: 2h 45min (Ideal para dominar `useMemo`, `useCallback` y `useContext` en escenarios reales)*
* 🎥 **[Masterclass de Custom Hooks en React](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D6ThxsUwLWVc)** — *Duración: 45min (Cómo abstraer lógica reutilizable de forma profesional)*
* 🎥 **[React Hooks & Custom Hooks Completo](https://www.youtube.com/watch?v=hJ5UEtdS8qE)** — *Tutorial práctico cubriendo desde estados básicos hasta la creación de hooks personalizados.*
* 🎥 **[TypeScript & React: Tipado avanzado de Custom Hooks](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dv7ofBf42o5c)** — *Duración: 4h 10min (Cómo tipar correctamente contextos y hooks customizados)*
* 🎥 **[Clean Code & SOLID en Componentes React](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D2591W45BvDk)** — *Aplicación práctica de principios para desacoplar lógica mediante hooks.*
* 🎥 **[JavaScript Moderno (ES6+): Deep Dive](https://www.youtube.com/watch?v=W6NZfCO5SIk)** — *Análisis de las características modernas del lenguaje para lógica avanzada en Custom Hooks.*
* 🎥 **[Curso de React: Patrones y Arquitectura](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DF0fR-xV4H8o)** — *Enfoque en escalabilidad y estructura de proyectos basada en contextos.*
* 🎥 **[Patrones de diseño en React (GeeksforGeeks)](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D0k5Uv61L_4c)** — *Introducción a HOCs, Render Props y abstracción con Context API.*
* 🎥 **[Optimización de Rendimiento en React (Evita Renders Innecesarios)](https://www.youtube.com/watch?v=x_0DE_l6pgk)** — *Enfoque práctico sobre cuándo usar `useMemo` y `useCallback` sin sobreoptimizar.*
* 🎥 **[Arquitectura Frontend y Gestión de Estado Global](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DmH2nS81z7-Y)** — *Cómo estructurar estados compartidos y contextos escalables.*

---

### ✅ Buenas prácticas

* 📄 **[React Hooks Rules & Best Practices](https://es.react.dev/reference/react/hooks)** — *Documentación oficial sobre el uso correcto, restricciones y reglas de los hooks.*
* 📄 **[Optimización de Renders (useMemo/useCallback)](https://react.dev/reference/react/useMemo)** — *Guía sobre cuándo realmente optimizar y cuándo evitar la sobreoptimización prematura.*
* 📄 **[Custom Hooks Reusability Guide](https://es.react.dev/learn/reusing-logic-with-custom-hooks)** — *Documentación oficial sobre cómo extraer y estructurar lógica reutilizable.*
* 📄 **[Patterns.dev: React Design Patterns](https://www.patterns.dev/react/)** — *Patrones de diseño avanzados para el uso correcto de Context y Custom Hooks.*
* 📄 **[Principios de Clean Code en JavaScript/TypeScript](https://github.com/ryanmcdermott/clean-code-javascript)** — *Buenas prácticas para mantener funciones y hooks limpios y mantenibles.*
* 📄 **[SOLID Principles: React Context](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html)** — *Aplicación de principios de diseño a nivel de arquitectura con Context y Hooks.*
* 📄 **[Guía de Estilo TypeScript (Airbnb)](https://github.com/airbnb/javascript/tree/master/react)** — *Estándares de código para equipos de alto rendimiento al escribir hooks tipados.*
* 📄 **[Estructuras de directorios en React](https://www.google.com/search?q=https://react.dev/learn/structure-your-project)** — *Recomendaciones oficiales para organizar archivos y custom hooks.*
* 📄 **[React Ecosystem Best Practices](https://www.google.com/search?q=https://github.com/goldbergyoni/react-best-practices)** — *Repositorio curado de estándares para gestión de estado y rendimiento.*
* 📄 **[React Performance Best Practices Guide](https://react.dev/learn/render-and-commit)** — *Buenas prácticas para entender el ciclo de vida y evitar cuellos de botella.*

---

### 📚 Documentación Técnica

* 📄 **[useMemo - Documentación Oficial](https://es.react.dev/reference/react/useMemo)** — *Referencia oficial para memorizar resultados de cálculos pesados.*
* 📄 **[useCallback - Documentación Oficial](https://es.react.dev/reference/react/useCallback)** — *Referencia oficial para memorizar definiciones de funciones.*
* 📄 **[useContext - Documentación Oficial](https://es.react.dev/reference/react/useContext)** — *Referencia oficial para lectura y suscripción a contextos globales.*
* 📄 **[React Performance Guide (Render and Commit)](https://react.dev/learn/render-and-commit)** — *Entendiendo a fondo el ciclo de renderizado de React y por qué ocurren los re-renders.*
* 📄 **[TypeScript Generic Patterns for Hooks](https://www.typescriptlang.org/docs/handbook/2/generics.html)** — *Dominio de genéricos aplicados al tipado de Custom Hooks y Contextos.*
* 📄 **[React Hooks API Overview](https://es.react.dev/reference/react)** — *Documentación detallada de cada hook individual del ecosistema.*
* 📄 **[TypeScript Documentation (Handbook)](https://www.typescriptlang.org/docs/)** — *Manual oficial y avanzado para tipado estricto en frontend.*
* 📄 **[MDN Web Docs: JavaScript Closures & Scope](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)** — *Entendiendo el comportamiento interno de los closures detrás de `useCallback` y Custom Hooks.*
* 📄 **[React Sharing State Between Components](https://es.react.dev/learn/sharing-state-between-components)** — *Guía oficial sobre cómo elegir entre props, state local y Context API.*
* 📄 **[React Passing Data Deeply with Context](https://es.react.dev/learn/passing-data-deeply-with-context)** — *Documentación conceptual paso a paso sobre el funcionamiento de Context.*

* 📄 **[React Reference Hooks](https://es.react.dev/reference/react)** — *Documentación detallada de cada hook individual.*
* 📄 **[TypeScript Documentation](https://www.typescriptlang.org/docs/)** — *Manual oficial y avanzado del lenguaje.*
* 📄 **[MDN Web Docs: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)** — *La mejor fuente de verdad para JS puro.*
* 📄 **[Tailwind CSS Docs](https://tailwindcss.com/docs)** — *Configuración, utilidades y personalización.*
* 📄 **[React Performance Guide](https://react.dev/learn/render-and-commit)** — *Entendiendo el ciclo de renderizado de React.*
* 📄 **[TypeScript Generic Patterns](https://www.typescriptlang.org/docs/handbook/2/generics.html)** — *Dominio de genéricos en componentes.*
* 📄 **[CSS Moderno (Flexbox & Grid)](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)** — *Fundamentos de layout.*
* 📄 **[Atomic Design Pattern Implementation](https://codebrahma.com/atomic-design-react-component-structure-guide/)** — *Guía paso a paso de implementación.*
* 📄 **[SOLID in React Components](https://lightbulb.mainhub.pt/mastering-s-o-l-i-d-principles-in-react-best-practices-for-beginners-577ace3486e8)** — *Ejemplos concretos de SRP, OCP y LSP.*
* 📄 **[React Ecosystem Best Practices](https://www.google.com/search?q=https://github.com/goldbergyoni/react-best-practices)** — *Repositorio curado de estándares.*

---

### 📦 Qué debes entregar hoy

Una pantalla donde varios componentes comparten información sin que tú se la pases manualmente a cada uno, más al menos una herramienta propia reutilizable aplicando estrictamente Atomic Design, principios SOLID y nomenclatura en *kebab-case*.

---

### 💪 Ejercicios

---

### **Fácil --- Catálogo Interactivo de Productos con Control Imperativo**

* **Meta:** Desarrollar un buscador de productos utilizando un archivo JSON local estático enriquecido como fuente de datos. La interfaz debe permitir filtrar los elementos en tiempo real aplicando lógica de arrays nativa y limpiar la selección o enfocar el campo de búsqueda de manera imperativa mediante una referencia expuesta.
* **Estructura de Datos (Mock JSON - Archivo: `products-data.json`):**

```json
[
  { "id": 1, "name": "Laptop Pro 16\"", "category": "Tecnología", "price": 1500, "stock": 12 },
  { "id": 2, "name": "Teclado Mecánico RGB", "category": "Accesorios", "price": 85, "stock": 45 },
  { "id": 3, "name": "Monitor UltraWide 34\"", "category": "Tecnología", "price": 450, "stock": 8 },
  { "id": 4, "name": "Mouse Ergonómico Inalámbrico", "category": "Accesorios", "price": 45, "stock": 60 },
  { "id": 5, "name": "Silla de Escritorio Gamer", "category": "Mobiliario", "price": 280, "stock": 5 },
  { "id": 6, "name": "Hub USB-C Multipuerto", "category": "Accesorios", "price": 35, "stock": 30 },
  { "id": 7, "name": "Audífonos Cancelación Ruido", "category": "Tecnología", "price": 200, "stock": 15 },
  { "id": 8, "name": "Lámpara LED Escritorio", "category": "Mobiliario", "price": 50, "stock": 25 }
]

```

* **Estructura de Archivos (Kebab-case obligatorio):**
* `components/atoms/search-input.jsx`
* `components/atoms/action-button.jsx`
* `components/molecules/product-card.jsx`
* `components/organisms/product-catalog-list.jsx`
* `components/templates/catalog-template.jsx`


* **Criterios de Aceptación:**
1. El archivo JSON debe ser consumido localmente estructurando la información mediante objetos y arrays tipados en JavaScript.
2. El filtrado de productos debe implementarse obligatoriamente usando `Array.prototype.filter()` combinado con transformaciones de texto (`String.prototype.toLowerCase()` y `String.prototype.includes()`).
3. El cálculo dinámico del stock total disponible y el costo promedio de los productos filtrados debe realizarse utilizando métodos acumulativos de JavaScript (`Array.prototype.reduce()`).
4. Las operaciones de filtrado pesado sobre el catálogo deben estar optimizadas y envueltas estrictamente en el hook `useMemo` para evitar recálculos en cada render.
5. Se debe implementar `useImperativeHandle` y `useRef` para que el componente padre pueda invocar de forma imperativa métodos de limpieza del input y enfoque automático.
6. **Principio SOLID (SRP):** El componente visual (`product-catalog-list`) no debe contener la lógica de filtrado de datos; esta debe delegarse a funciones puras o contenedores independientes.



---

### **Medio --- Panel de Control de Inventario con Custom Hooks**

* **Meta:** Construir un sistema de gestión de stock que consuma un JSON local ampliado simulando datos de almacén. Toda la lógica de negocio (filtrado avanzado, ordenamiento dinámico por criterios múltiples y cálculo de métricas de almacén) debe estar completamente abstraída mediante un Custom Hook.
* **Estructura de Datos (Mock JSON - Archivo: `inventory-data.json`):**

```json
[
  { "sku": "SKU-001", "itemName": "Papel Bond A4", "quantity": 300, "unitCost": 5.50, "supplier": "Distribuidora Lima" },
  { "sku": "SKU-002", "itemName": "Bolígrafo Azul Pack", "quantity": 150, "unitCost": 12.00, "supplier": "Importaciones Sur" },
  { "sku": "SKU-003", "itemName": "Carpeta Manila", "quantity": 500, "unitCost": 0.80, "supplier": "Papelería Central" },
  { "sku": "SKU-004", "itemName": "Cuaderno rayado 100h", "quantity": 220, "unitCost": 3.20, "supplier": "Distribuidora Lima" },
  { "sku": "SKU-005", "itemName": "Calculadora Científica", "quantity": 40, "unitCost": 45.00, "supplier": "Importaciones Sur" },
  { "sku": "SKU-006", "itemName": "Corrector Líquido", "quantity": 110, "unitCost": 2.50, "supplier": "Papelería Central" },
  { "sku": "SKU-007", "itemName": "Marcadores Indelebles x4", "quantity": 85, "unitCost": 8.00, "supplier": "Distribuidora Lima" },
  { "sku": "SKU-008", "itemName": "Archivador de Palanca", "quantity": 90, "unitCost": 6.50, "supplier": "Papelería Central" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio):**
* `hooks/use-inventory-management.js`
* `components/atoms/status-badge.jsx`
* `components/atoms/table-cell.jsx`
* `components/organisms/inventory-table.jsx`
* `components/templates/inventory-template.jsx`


* **Criterios de Aceptación:**
1. La lógica de negocio debe estar aislada en un Custom Hook propio llamado `use-inventory-management`, el cual debe gestionar de forma interna los estados de búsqueda, ordenamiento y selección.
2. El ordenamiento de la tabla debe implementarse mediante `Array.prototype.sort()` aplicando lógica de comparación numérica y alfabética segura (sin mutar el array original, utilizando propagación o copias previas).
3. Las funciones de manipulación de datos expuestas por el Custom Hook deben estar estabilizadas utilizando `useCallback` para evitar renders innecesarios en cascada al pasarse a los componentes hijos.
4. Se deben procesar agrupaciones de proveedores utilizando estructuras de datos avanzadas como `Map` o `Set` para extraer listados únicos de proveedores disponibles en el inventario.
5. **Principio SOLID (OCP - Abierto/Cerrado):** La tabla de inventario (`inventory-table`) debe estructurarse de forma que permita extender nuevas columnas de datos o tipos de celdas mediante composición, sin necesidad de modificar el núcleo del componente.



---

### **Difícil --- Dashboard Financiero Masivo con Concurrencia de UI**

* **Meta:** Diseñar un dashboard analítico que procese un listado masivo de transacciones desde un archivo JSON local. La aplicación debe administrar estado global mediante `useContext`, optimizando el renderizado concurrente y evitando bloqueos visuales mediante las APIs de concurrencia de React al procesar volúmenes altos de datos.
* **Estructura de Datos (Mock JSON - Archivo: `transactions-data.json`):**

```json
[
  { "transId": "T-9001", "date": "2026-08-01", "amount": 1250.00, "type": "Ingreso", "department": "Ventas" },
  { "transId": "T-9002", "date": "2026-08-02", "amount": 340.50, "type": "Egreso", "department": "Logística" },
  { "transId": "T-9003", "date": "2026-08-03", "amount": 890.00, "type": "Ingreso", "department": "Marketing" },
  { "transId": "T-9004", "date": "2026-08-04", "amount": 4200.00, "type": "Ingreso", "department": "Ventas" },
  { "transId": "T-9005", "date": "2026-08-05", "amount": 150.00, "type": "Egreso", "department": "Administración" },
  { "transId": "T-9006", "date": "2026-08-06", "amount": 620.00, "type": "Ingreso", "department": "Marketing" },
  { "transId": "T-9007", "date": "2026-08-07", "amount": 2100.00, "type": "Egreso", "department": "Logística" },
  { "transId": "T-9008", "date": "2026-08-08", "amount": 950.00, "type": "Ingreso", "department": "Ventas" },
  { "transId": "T-9009", "date": "2026-08-09", "amount": 75.00, "type": "Egreso", "department": "Administración" },
  { "transId": "T-9010", "date": "2026-08-10", "amount": 3100.00, "type": "Ingreso", "department": "Logística" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio):**
* `context/dashboard-theme-context.jsx`
* `components/atoms/theme-toggle-button.jsx`
* `components/molecules/metric-card.jsx`
* `components/organisms/financial-analytics-grid.jsx`
* `components/templates/dashboard-template.jsx`


* **Criterios de Aceptación:**
1. Se debe crear un proveedor de contexto global (`dashboard-theme-context`) que gestione el estado del tema visual y filtros activos, consumido mediante `useContext` en al menos dos componentes independientes sin recurrir a *prop drilling*.
2. La consolidación de métricas financieras por departamento debe realizarse utilizando lógica avanzada de agrupación de JavaScript (`Object.groupBy()` o estructuras `Map`).
3. Se debe implementar `useTransition` para marcar las actualizaciones masivas de filtros analíticos como transacciones de UI no urgentes, manteniendo la fluidez interactiva del usuario.
4. Se debe integrar `useDeferredValue` para desvincular la respuesta del input de búsqueda instantánea de la renderización del listado pesado de transacciones financieras.
5. **Principio SOLID (DIP - Inversión de Dependencias):** Los componentes de presentación (`metric-card`, `financial-analytics-grid`) no deben acoplarse directamente a la lógica de negocio ni a fuentes de datos globales brutas; deben recibir abstracciones desacopladas a través de contratos de contexto e interfaces claras.

------------------------------------------------------------------------

## Día 6 — ⚡ Control de Concurrencia, Estado Complejo y Arquitectura Ágil

**`useTransition` · `useDeferredValue` · `useImperativeHandle` · `useReducer`**

---

### 🎯 Qué aprenderás

* Cómo gestionar estados complejos, predecibles y escalables basados en múltiples acciones y transiciones utilizando el patrón Reducer (`useReducer`).
* Cómo mantener la interfaz de usuario fluida y receptiva al procesar actualizaciones masivas de datos mediante la concurrencia de React (`useTransition`).
* Cómo diferir la actualización de valores no urgentes para priorizar las interacciones del usuario frente a renders pesados (`useDeferredValue`).
* Cómo controlar elementos hijos de manera imperativa y segura desde componentes padres mediante referencias controladas (`useImperativeHandle` y `useRef`).
* Cómo estructurar arquitecturas frontend alineadas con metodologías ágiles (Scrum) y principios de diseño para el manejo de flujos de trabajo empresariales.

---

### 🔍 Desglose y utilidad de cada Hook

| Hook / Concepto | Qué problema resuelve | Qué mejora aporta |
| --- | --- | --- |
| **`useReducer`** | Estados locales complejos con múltiples interdependencias, donde `useState` se vuelve difícil de mantener y predecir. | **Mantenibilidad y Predictibilidad:** Centraliza la lógica de transición de estado en funciones puras aplicando el Patrón Reducer. |
| **`useTransition`** | Bloqueos o congelamientos en la interfaz de usuario al ejecutar tareas pesadas o filtrados masivos en aplicaciones corporativas. | **Experiencia de Usuario (UX):** Marca actualizaciones como no urgentes, permitiendo mantener la UI interactiva (ideal para flujos de Scrum y tableros ágiles). |
| **`useDeferredValue`** | Pérdida de fluidez al escribir en campos de búsqueda que disparan renderizados masivos de listas de datos en tiempo real. | **Fluidez Interactiva:** Aplaza la actualización de valores derivados costosos para priorizar la respuesta inmediata del input. |
| **`useImperativeHandle`** | La limitación de React donde el flujo de datos es estrictamente descendiente, requiriendo control imperativo directo sobre un hijo. | **Control Encapsulado:** Personaliza y expone métodos específicos a través de una `ref` de manera segura y limpia. |

---

### 🔗 Cursos (Deep Dive)

* 🎥 **[Curso Avanzado de React: Concurrencia y Performance](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DF0fR-xV4H8o)** — *Duración: 2h 45min (Dominando `useTransition` y `useDeferredValue` en escenarios reales)*
* 🎥 **[Masterclass de useReducer y Patrones de Estado Avanzados](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D6ThxsUwLWVc)** — *Duración: 45min (Arquitectura de estados complejos y predecibles)*
* 🎥 **[React Hooks Avanzados: Imperative Handle y Control de Refs](https://www.youtube.com/watch?v=hJ5UEtdS8qE)** — *Tutorial práctico cubriendo control imperativo de componentes.*
* 🎥 **[TypeScript & React: Tipado Estricto de Reducers y Acciones](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dv7ofBf42o5c)** — *Duración: 4h 10min (Tipado con discriminated unions para reducers)*
* 🎥 **[Clean Code & SOLID en Arquitectura Frontend](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D2591W45BvDk)** — *Aplicación práctica de principios de diseño para desacoplar lógica compleja.*
* 🎥 **[JavaScript Moderno: Concurrencia, Event Loop y UI Rendering](https://www.youtube.com/watch?v=W6NZfCO5SIk)** — *Análisis profundo del rendimiento de JavaScript en el navegador.*
* 🎥 **[Patrones de Diseño en React y Arquitectura Escalable](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D0k5Uv61L_4c)** — *Implementación de patrones de control y estado global/local.*
* 🎥 **[Optimización de UI Concurrente en React 18+](https://www.youtube.com/watch?v=x_0DE_l6pgk)** — *Enfoque práctico de rendimiento para evitar bloqueos en la interfaz.*
* 🎥 **[Metodologías Ágiles y Scrum para Equipos de Desarrollo Frontend](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DmH2nS81z7-Y)** — *Organización de tableros, backlogs y componentes escalables.*
* 🎥 **[Arquitectura de Software Clean Architecture en Aplicaciones Frontend](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dn7uL-8h3l_c)** — *Estructuración de capas de datos y componentes de UI.*

---

### ✅ Buenas prácticas

* 📄 **[React Docs: Concurrency & State Management Rules](https://es.react.dev/reference/react/hooks)** — *Documentación oficial sobre el uso correcto de hooks concurrentes y reducers.*
* 📄 **[Patterns.dev: State Reducer Pattern](https://www.patterns.dev/react/)** — *Patrones de diseño avanzados para la gestión predecible de estados complejos.*
* 📄 **[Clean Code Architecture: Separación de Lógica en Reducers](https://github.com/ryanmcdermott/clean-code-javascript)** — *Buenas prácticas para mantener funciones reductoras puras y testeables.*
* 📄 **[Atomic Design: Integración de Componentes con Estado Complejo](https://atomicdesign.bradfrost.com/chapter-2/)** — *Guía para estructurar organismos y templates interactivos.*
* 📄 **[Guía de Estilo TypeScript (Airbnb) para Actions y Reducers](https://github.com/airbnb/javascript/tree/master/react)** — *Estándares de código para tipado estricto en equipos ágiles.*
* 📄 **[Scrum Best Practices: Gestión de Estados de Tareas en el Sprint Backlog](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html)** — *Alineación de componentes de UI con flujos de trabajo ágiles.*
* 📄 **[Refactoring UI for Developers: Interacciones fluidas bajo alta carga](https://www.refactoringui.com/)** — *Mejores prácticas de diseño y rendimiento en interfaces concurrentes.*
* 📄 **[Optimización de Renders Concurrentes en React](https://react.dev/learn/render-and-commit)** — *Guía oficial sobre el comportamiento del ciclo de renderizado concurrente.*
* 📄 **[SOLID Principles: Single Responsibility en Acciones de Reducer](https://lightbulb.mainhub.pt/mastering-s-o-l-i-d-principles-in-react-best-practices-for-beginners-577ace3486e8)** — *Principio de responsabilidad única aplicado a la gestión de estado.*
* 📄 **[React Ecosystem Best Practices & Repository Architecture](https://www.google.com/search?q=https://github.com/goldbergyoni/react-best-practices)** — *Estándares corporativos para escalabilidad de proyectos.*

---

### 📚 Documentación Técnica

* 📄 **[useReducer - Documentación Oficial](https://es.react.dev/reference/react/useReducer)** — *Referencia oficial para gestión de estados complejos con dispatch.*
* 📄 **[useTransition - Documentación Oficial](https://es.react.dev/reference/react/useTransition)** — *Referencia oficial para marcar actualizaciones de estado como no urgentes.*
* 📄 **[useDeferredValue - Documentación Oficial](https://es.react.dev/reference/react/useDeferredValue)** — *Referencia oficial para diferir valores no críticos en la UI.*
* 📄 **[useImperativeHandle - Documentación Oficial](https://es.react.dev/reference/react/useImperativeHandle)** — *Referencia oficial para personalizar instancias expuestas por refs.*
* 📄 **[React Concurrent Rendering Guide](https://react.dev/blog/2022/03/29/react-v18)** — *Documentación técnica sobre el modo concurrente en React.*
* 📄 **[TypeScript Discriminated Unions Handbook](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)** — *Patrones avanzados de tipado para payloads de acciones en reducers.*
* 📄 **[MDN Web Docs: Concurrency Model and Event Loop](https://www.google.com/search?q=https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop)** — *Fundamentos del motor de JavaScript detrás de la concurrencia.*
* 📄 **[Atomic Design Pattern Implementation Guide](https://codebrahma.com/atomic-design-react-component-structure-guide/)** — *Estructuración avanzada de carpetas orientada a metodologías ágiles.*
* 📄 **[SOLID Principles in Component Design Patterns](https://www.typescriptlang.org/docs/)** — *Aplicación de principios de diseño a nivel de arquitectura frontend.*
* 📄 **[Scrum Guide Official Framework Overview](https://scrumguides.org/)** — *Marco de referencia para la gestión de productos y tableros ágiles.*

---

### 📦 Qué debes entregar hoy

Una pantalla de gestión interactiva donde se aplique control de concurrencia de UI, estado predecible mediante patrones de diseño avanzados y control imperativo de componentes, cumpliendo estrictamente con **Atomic Design**, principios **SOLID** y nomenclatura en **kebab-case** para todos los archivos.

---

### 💪 Ejercicios

---

### **Fácil --- Tablero de Tareas de Sprint con Patrón Reducer**

* **Meta:** Desarrollar un componente de gestión de tareas del Sprint Backlog utilizando un archivo JSON local estático enriquecido. El cambio de estados de las tareas (Pendiente, En Progreso, Completado) debe administrarse estrictamente mediante el hook `useReducer`, aplicando funciones puras y acciones predecibles.
* **Estructura de Datos (Mock JSON - Archivo: `sprint-tasks-data.json`):**

```json
[
  { "taskId": "SPRINT-101", "title": "Diseñar esquema de base de datos", "status": "Completado", "storyPoints": 5, "assignee": "Ana Pérez" },
  { "taskId": "SPRINT-102", "title": "Configurar autenticación JWT", "status": "En Progreso", "storyPoints": 8, "assignee": "Carlos Gómez" },
  { "taskId": "SPRINT-103", "title": "Implementar endpoints de usuarios", "status": "Pendiente", "storyPoints": 5, "assignee": "Lucía Torres" },
  { "taskId": "SPRINT-104", "title": "Maquetar vista de perfil en Tailwind", "status": "Pendiente", "storyPoints": 3, "assignee": "Ana Pérez" },
  { "taskId": "SPRINT-105", "title": "Escribir pruebas unitarias para servicios", "status": "Pendiente", "storyPoints": 5, "assignee": "Carlos Gómez" },
  { "taskId": "SPRINT-106", "title": "Optimizar consultas SQL en reportes", "status": "En Progreso", "storyPoints": 8, "assignee": "Lucía Torres" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `reducers/sprint-task-reducer.js`: Este archivo de lógica recibe el estado actual de las tareas y una acción enviada mediante `dispatch`. Su sentido es actuar como una función pura que procesa los cambios de estado (como mover tareas de pendiente a completado) utilizando inmutabilidad estricta de JavaScript, cumpliendo con el patrón Reducer y el Principio de Responsabilidad Única (SRP).
* `components/atoms/task-status-badge.jsx`: Este átomo recibe el texto descriptivo del estado de la tarea. Su sentido es encapsular la representación visual de la etiqueta, manteniendo la interfaz desacoplada y reutilizable en cualquier parte del tablero ágil.
* `components/molecules/task-card.jsx`: Esta molécula recibe la información individual de una tarea del JSON y las funciones de despacho de acciones. Su sentido es agrupar el contenido textual, los puntos de historia y el átomo de estado para representar una tarjeta de tarea interactiva.
* `components/organisms/sprint-board.jsx`: Este organismo recibe el listado completo de tareas gestionadas por el reducer y los disparadores de eventos. Su sentido es estructurar las columnas del tablero aplicando métodos nativos de arrays como `filter()` y estructuras `Map` para calcular métricas dinámicas por columna.
* `components/templates/sprint-template.jsx`: Este template recibe el organismo del tablero de sprint y la estructura general del layout. Su sentido es unificar la vista completa bajo Atomic Design y Clean Architecture, asegurando una separación limpia entre la lógica de negocio y la presentación visual.


* **Criterios de Aceptación:**
1. El estado del tablero de tareas debe gestionarse obligatoriamente mediante `useReducer`, separando la lógica de las acciones (`dispatch`) del componente visual.
2. Las funciones del reducer deben ser puras, garantizando inmutabilidad estricta al actualizar el array de tareas (utilizando copias y operadores de propagación).
3. El filtrado de tareas por estado debe implementarse utilizando métodos nativos como `Array.prototype.filter()` combinado con estructuras `Map` para conteo dinámico.
4. **Atomic Design:** Estructuración modular estricta desde átomos (`task-status-badge`) hasta templates (`sprint-template`).
5. **Principio SOLID (SRP):** El componente visual no debe contener la lógica de transición de estados; dicha lógica debe residir enteramente en el archivo reducer.



---

### **Medio --- Tablero Kanban con Control Imperativo de Edición**

* **Meta:** Construir una vista interactiva de tablero Kanban alimentada por un JSON local de historias de usuario. La aplicación debe permitir que el componente padre invoque de forma imperativa métodos expuestos por los componentes hijos (como enfocar campos de texto o desplegar ediciones rápidas) mediante `useImperativeHandle` y `useRef`.
* **Estructura de Datos (Mock JSON - Archivo: `kanban-stories-data.json`):**

```json
[
  { "storyId": "US-201", "feature": "Pasarela de Pagos", "priority": "Alta", "effort": 13, "status": "Backlog" },
  { "storyId": "US-202", "feature": "Filtros Avanzados de Búsqueda", "priority": "Media", "effort": 5, "status": "En Análisis" },
  { "storyId": "US-203", "feature": "Exportación de Reportes PDF", "priority": "Baja", "effort": 3, "status": "Backlog" },
  { "storyId": "US-204", "feature": "Gestión de Roles y Permisos", "priority": "Alta", "effort": 8, "status": "En Desarrollo" },
  { "storyId": "US-205", "feature": "Notificaciones Push en tiempo real", "priority": "Media", "effort": 5, "status": "Backlog" },
  { "storyId": "US-206", "feature": "Optimización de imágenes WebP", "priority": "Baja", "effort": 2, "status": "En Desarrollo" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `components/atoms/editable-input.jsx`: Este átomo recibe valores iniciales de texto y referencias controladas. Su sentido es manejar las interacciones directas del teclado y el foco del cursor cuando el componente superior lo solicite de manera imperativa.
* `components/molecules/kanban-card.jsx`: Esta molécula recibe la información de la historia de usuario y utiliza `forwardRef` en conjunto con `useImperativeHandle`. Su sentido es exponer métodos personalizados (como activar la edición rápida o enfocar campos internos) hacia el componente padre, resolviendo necesidades complejas fuera del flujo declarativo tradicional.
* `components/organisms/kanban-column.jsx`: Este organismo recibe las tarjetas agrupadas por estado y las referencias de control. Su sentido es coordinar la distribución de las tarjetas en columnas estructuradas, facilitando la gestión visual del flujo Kanban.
* `components/templates/kanban-template.jsx`: Este template recibe el organismo de columnas y la estructura base de la vista. Su sentido es consolidar el diseño modular del tablero aplicando Atomic Design y principios de diseño escalable.


* **Criterios de Aceptación:**
1. Se debe implementar `useImperativeHandle` en conjunto con `forwardRef` dentro de un componente hijo de tarjeta para exponer métodos controlados (`focusInput`, `triggerQuickEdit`) hacia el componente padre.
2. La manipulación y reorganización de elementos entre columnas debe realizarse utilizando métodos nativos de arrays de JavaScript sin mutar el origen de datos.
3. **Atomic Design:** Separación clara en componentes desde átomos (`editable-input`) hasta organismos de columnas (`kanban-column`).
4. **Principio SOLID (OCP - Abierto/Cerrado):** Los componentes de tarjeta deben diseñarse mediante composición para permitir la extensión de nuevas funcionalidades (como etiquetas o prioridades) sin modificar el núcleo de la estructura base.



---

### **Difícil --- Sistema de Filtrado Masivo de Backlog con Concurrencia de UI**

* **Meta:** Desarrollar un buscador y panel analítico avanzado para el Product Backlog completo consumiendo un archivo JSON masivo. La interfaz debe integrar concurrencia de React mediante `useTransition` y `useDeferredValue` para evitar bloqueos visuales al filtrar miles de historias de usuario, combinado con un contexto global de configuración del sprint.
* **Estructura de Datos (Mock JSON - Archivo: `product-backlog-data.json`):**

```json
[
  { "id": "PB-501", "epic": "Core System", "title": "Migración a React 19", "estimate": 21, "status": "Ready", "risk": "Alto" },
  { "id": "PB-502", "epic": "E-Commerce", "title": "Integración con pasarela Stripe", "estimate": 13, "status": "Refining", "risk": "Medio" },
  { "id": "PB-503", "epic": "Security", "title": "Auditoría de vulnerabilidades OAuth", "estimate": 8, "status": "Ready", "risk": "Alto" },
  { "id": "PB-504", "epic": "Analytics", "title": "Dashboard de métricas de conversión", "estimate": 5, "status": "Backlog", "risk": "Bajo" },
  { "id": "PB-505", "epic": "Core System", "title": "Refactorización de Custom Hooks globales", "estimate": 8, "status": "Ready", "risk": "Medio" },
  { "id": "PB-506", "epic": "E-Commerce", "title": "Optimización del carrito de compras", "estimate": 5, "status": "Refining", "risk": "Bajo" },
  { "id": "PB-507", "epic": "Security", "title": "Implementación de Rate Limiting", "estimate": 13, "status": "Backlog", "risk": "Alto" },
  { "id": "PB-508", "epic": "Analytics", "title": "Reportes automáticos semanales", "estimate": 3, "status": "Backlog", "risk": "Bajo" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `context/scrum-project-context.jsx`: Este contexto global recibe las configuraciones del sprint y los filtros activos corporativos. Su sentido es aplicar Inversión de Dependencias (DIP), proveyendo un canal de comunicación centralizado para evitar el paso manual de propiedades (*prop drilling*) a través de los componentes de la aplicación.
* `components/atoms/search-bar.jsx`: Este átomo recibe eventos de cambio de texto instantáneos. Su sentido es capturar las entradas del usuario de inmediato, sirviendo como el punto de control de entrada para la búsqueda concurrente.
* `components/molecules/story-card.jsx`: Esta molécula recibe la información detallada de una historia de usuario. Su sentido es estructurar visualmente los datos de la tarjeta desacoplados del motor de cálculo masivo.
* `components/organisms/backlog-analytics-grid.jsx`: Este organismo recibe el listado masivo de historias y los valores diferidos (`useDeferredValue`). Su sentido es procesar cálculos pesados y agrupaciones avanzadas (como `Object.groupBy()` o estructuras `Map`) de forma asíncrona mediante `useTransition`, manteniendo la interfaz fluida y sin bloqueos de render.
* `components/templates/backlog-template.jsx`: Este template recibe el organismo analítico y el proveedor de contexto. Su sentido es consolidar la vista completa bajo Clean Architecture y Atomic Design, asegurando una separación total entre la lógica global y la presentación visual.


* **Criterios de Aceptación:**
1. Se debe implementar un proveedor de contexto global (`scrum-project-context`) consumido mediante `useContext` para gestionar parámetros de filtrado y métricas del sprint en múltiples componentes sin *prop drilling*.
2. Se debe utilizar `useTransition` para marcar las actualizaciones masivas de filtros analíticos como transacciones de UI no urgentes, manteniendo la fluidez interactiva.
3. Se debe integrar `useDeferredValue` para desvincular la respuesta del input de búsqueda instantánea de la renderización del listado pesado de historias de usuario.
4. La consolidación de estimaciones por épica y nivel de riesgo debe realizarse utilizando lógica avanzada de agrupación de JavaScript (`Object.groupBy()` o estructuras `Map`).
5. **Principio SOLID (DIP - Inversión de Dependencias):** Los componentes de presentación (`story-card`, `backlog-analytics-grid`) no deben acoplarse directamente a fuentes de datos brutas, recibiendo abstracciones desacopladas a través de contratos de contexto.

------------------------------------------------------------------------

## Día 7 — ⚛️ Arquitectura de Componentes, Patrones de Diseño, Optimización Extrema y Testing

**`lazy` · `Suspense` · `memo` · Componentes de Alto Rendimiento · Patrones de Diseño · Clean Architecture · Testing**

---

### 🎯 Qué aprenderás

* Cómo optimizar el rendimiento y la carga inicial de aplicaciones corporativas a gran escala utilizando componentes de carga perezosa (`lazy` y `Suspense`).
* Cómo prevenir renders innecesarios en componentes puros a nivel de renderizado utilizando la API de memorización de componentes (`memo`).
* Cómo aplicar patrones de diseño avanzados en React (como *Compound Components*, *Render Props* y *Custom Hooks* desacoplados) para crear arquitecturas altamente escalables y mantenibles.
* Cómo estructurar proyectos complejos bajo una **Arquitectura de Software Limpia** (*Clean Architecture* y *Atomic Design*), separando estrictamente la lógica de negocio, las capas de datos y los componentes visuales.
* Cómo aplicar los principios **SOLID** y buenas prácticas de **Clean Code** en JavaScript moderno y TypeScript, asegurando la mantenibilidad a lo largo del ciclo de vida del desarrollo.
* Cómo implementar pruebas unitarias y de integración robustas utilizando herramientas nativas del ecosistema moderno para validar el comportamiento de componentes y hooks.

---

### 🔍 Desglose y Utilidad de Conceptos (Día 7)

| Concepto / API de React | Qué problema resuelve | Qué mejora aporta |
| --- | --- | --- |
| **`lazy` & `Suspense**` | Tiempos de carga inicial lentos debido a paquetes JavaScript gigantes y monolíticos descargados de golpe en el navegador. | **Rendimiento de Carga:** Divide el código en fragmentos (*code-splitting*) descargando componentes solo bajo demanda con estados de carga controlados. |
| **`memo`** | Renderizados en cascada innecesarios cuando un componente padre se actualiza, pero las propiedades de los hijos no han cambiado. | **Optimización de Render:** Memoriza el resultado del renderizado del componente basado en la comparación superficial o profunda de props. |
| **Patrones de Diseño** | Acoplamiento excesivo y falta de flexibilidad al reutilizar componentes visuales complejos entre diferentes módulos de negocio. | **Arquitectura Escalable:** Proporciona contratos de diseño predecibles (`Compound Components`, `Provider Pattern`) para desacoplar responsabilidades. |
| **Clean Architecture** | Mezcla caótica de lógica de negocio, llamadas a datos y diseño visual dentro de un mismo componente (*Spaghetti Code*). | **Mantenibilidad:** Aislar la lógica en capas independientes (presentación, dominio y datos), facilitando la refactorización y el mantenimiento a largo plazo. |

---

### 🔗 Cursos (Deep Dive)

* 🎥 **[Curso Avanzado de React: Arquitectura, Patrones y Rendimiento Extremo](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DF0fR-xV4H8o)** — *Duración: 2h 45min (Dominando `lazy`, `Suspense`, `memo` y patrones de diseño en producción)*
* 🎥 **[Masterclass de Clean Architecture y Patrones de Diseño en Frontend](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D6ThxsUwLWVc)** — *Duración: 45min (Estructuración de proyectos escalables)*
* 🎥 **[React Design Patterns & Compound Components Workshop](https://www.youtube.com/watch?v=hJ5UEtdS8qE)** — *Tutorial práctico cubriendo patrones avanzados de componentes reutilizables.*
* 🎥 **[TypeScript & React: Tipado Avanzado de Componentes y Patrones](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dv7ofBf42o5c)** — *Duración: 4h 10min (Tipado estricto para arquitecturas complejas)*
* 🎥 **[Clean Code & SOLID Principles en Ecosistemas React](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D2591W45BvDk)** — *Aplicación práctica de principios para desacoplar componentes y servicios.*
* 🎥 **[JavaScript Moderno (ES6+): Closures, Prototipos y Motor de Renderizado](https://www.youtube.com/watch?v=W6NZfCO5SIk)** — *Análisis profundo de JavaScript para optimizar la ejecución del DOM.*
* 🎥 **[Arquitectura Frontend con Atomic Design y Domain-Driven Design](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dn7uL-8h3l_c)** — *Cómo organizar componentes y carpetas a gran escala empresarial.*
* 🎥 **[Optimización Extrema y Code Splitting en React 18+](https://www.youtube.com/watch?v=x_0DE_l6pgk)** — *Enfoque práctico de rendimiento para evitar bloqueos de render.*
* 🎥 **[Testing en React: Vitest y React Testing Library desde Cero](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DmH2nS81z7-Y)** — *Cómo probar componentes, hooks y flujos de usuario complejos.*
* 🎥 **[Metodologías Ágiles y Refactorización Continua en Equipos de Software](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D0k5Uv61L_4c)** — *Estrategias de desarrollo iterativo y calidad de código.*

---

### ✅ Buenas prácticas

* 📄 **[React Docs: Code-Splitting and Suspense Best Practices](https://es.react.dev/reference/react/lazy)** — *Documentación oficial sobre el uso correcto de carga perezosa.*
* 📄 **[Patterns.dev: React Design Patterns & Compound Components](https://www.patterns.dev/react/)** — *La biblia de los patrones de diseño modernos aplicados al desarrollo frontend.*
* 📄 **[Clean Code JavaScript / TypeScript Standards](https://github.com/ryanmcdermott/clean-code-javascript)** — *Buenas prácticas para escribir código limpio, legible y mantenible.*
* 📄 **[Atomic Design Methodology: Estructura de Componentes Escalables](https://atomicdesign.bradfrost.com/chapter-2/)** — *Guía de Brad Frost para organizar átomos, moléculas, organismos y templates.*
* 📄 **[SOLID Principles in Component Design Architecture](https://lightbulb.mainhub.pt/mastering-s-o-l-i-d-principles-in-react-best-practices-for-beginners-577ace3486e8)** — *Principio de responsabilidad única y abierto/cerrado en componentes.*
* 📄 **[Guía de Estilo TypeScript (Airbnb Standards)](https://github.com/airbnb/javascript/tree/master/react)** — *Estándares corporativos para tipado estricto y convenciones de nomenclatura en kebab-case.*
* 📄 **[Refactoring UI: Integración de Rendimiento y Diseño Visual](https://www.refactoringui.com/)** — *Mejores prácticas para mantener una interfaz rápida y visualmente coherente.*
* 📄 **[React Performance Guide: Render, Commit and Memoization](https://react.dev/learn/render-and-commit)** — *Guía oficial sobre cómo y cuándo utilizar la API `memo` sin caer en sobreoptimización.*
* 📄 **[Testing Library Guiding Principles](https://testing-library.com/docs/react-testing-library/intro/)** — *Buenas prácticas para escribir pruebas centradas en el comportamiento del usuario.*
* 📄 **[React Ecosystem Best Practices & Repository Structure](https://www.google.com/search?q=https://github.com/goldbergyoni/react-best-practices)** — *Repositorio curado de estándares corporativos para arquitectura de software.*

---

### 📚 Documentación Técnica

* 📄 **[React lazy - Documentación Oficial](https://es.react.dev/reference/react/lazy)** — *Referencia oficial para importación dinámica de componentes.*
* 📄 **[React Suspense - Documentación Oficial](https://es.react.dev/reference/react/Suspense)** — *Referencia oficial para mostrar estados de carga provisionales.*
* 📄 **[React memo - Documentación Oficial](https://es.react.dev/reference/react/memo)** — *Referencia oficial para evitar re-renders omitiendo memorización de componentes.*
* 📄 **[React Performance Reference Guide](https://react.dev/learn/render-and-commit)** — *Documentación técnica sobre el ciclo de vida y optimización de renderizado.*
* 📄 **[TypeScript Handbook: Generics & Advanced Component Types](https://www.typescriptlang.org/docs/)** — *Manual oficial avanzado para tipado de componentes complejos.*
* 📄 **[MDN Web Docs: JavaScript Modules & Dynamic Imports](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)** — *Fundamentos nativos del navegador para carga asíncrona de código.*
* 📄 **[Vitest Documentation & Testing Framework Guide](https://vitest.dev/guide/)** — *Referencia oficial para configuración y ejecución de pruebas de alto rendimiento.*
* 📄 **[Atomic Design Implementation Guide](https://codebrahma.com/atomic-design-react-component-structure-guide/)** — *Estructuración avanzada de carpetas orientada a metodologías ágiles.*
* 📄 **[SOLID Principles Core Concepts (Uncle Bob)](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html)** — *Fundamentos de arquitectura de software orientada a objetos y componentes.*
* 📄 **[Scrum Guide Official Framework Overview](https://scrumguides.org/)** — *Marco de referencia ágil para la gestión de entregas incrementales en sprints.*

---

### 📦 Qué debes entregar hoy

Una aplicación optimizada bajo arquitecturas escalables, implementando carga perezosa de vistas, componentes memorizados de alto rendimiento, patrones de diseño profesionales y pruebas unitarias, cumpliendo estrictamente con **Atomic Design**, principios **SOLID** y nomenclatura en **kebab-case** para todos los archivos.

---

### 💪 Ejercicios

---

### **Fácil --- Portal de Módulos con Carga Perezosa (`lazy` y `Suspense`)**

* **Meta:** Desarrollar un sistema de navegación que cargue diferentes paneles analíticos y operativos bajo demanda utilizando importaciones dinámicas con `lazy` y `Suspense`, desacoplando los componentes para optimizar el rendimiento inicial del paquete principal (*code-splitting*).
* **Estructura de Datos (Mock JSON - Archivo: `modules-registry-data.json`):**

```json
[
  { "moduleId": "MOD-01", "name": "Panel de Ventas", "route": "sales-panel", "status": "Activo", "bundleSize": "120KB" },
  { "moduleId": "MOD-02", "name": "Control de Inventario", "route": "inventory-panel", "status": "Activo", "bundleSize": "145KB" },
  { "moduleId": "MOD-03", "name": "Analíticas Financieras", "route": "finance-panel", "status": "En Mantenimiento", "bundleSize": "210KB" },
  { "moduleId": "MOD-04", "name": "Gestión de Personal", "route": "hr-panel", "status": "Activo", "bundleSize": "95KB" },
  { "moduleId": "MOD-05", "name": "Reportes de Rendimiento", "route": "reports-panel", "status": "Activo", "bundleSize": "180KB" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `components/atoms/loading-spinner.jsx`: Este átomo recibe únicamente una propiedad visual (como un texto o indicador estético) para mostrar un estado de espera estandarizado. Su sentido es actuar como el componente de respaldo (fallback) controlado por el sistema de concurrencia mientras los módulos pesados se descargan de forma asíncrona.
* `components/molecules/module-card.jsx`: Esta molécula recibe la información individual de cada registro del archivo JSON y una función de selección de ruta. Su sentido es representar visualmente los datos del módulo y permitir al usuario interactuar para disparar la navegación y la carga perezosa correspondiente.
* `components/organisms/lazy-module-loader.jsx`: Este organismo recibe el listado completo de módulos y el identificador de la ruta activa. Su sentido es orquestar la lógica de importación dinámica combinando la API `lazy` de React y envolviendo el resultado dentro de un componente `Suspense` que utiliza el `loading-spinner` anterior, evitando que el paquete principal colapse en la carga inicial.
* `components/templates/portal-template.jsx`: Este template recibe la estructura general del layout de la aplicación y el organismo cargador. Su sentido es proveer el contenedor visual maestro donde se distribuyen los elementos de navegación y las vistas dinámicas, cumpliendo con Atomic Design y Clean Architecture.


* **Criterios de Aceptación:**
1. Los módulos funcionales deben importarse de forma dinámica utilizando la API `lazy` de React y envolverse en componentes `Suspense` con un indicador de carga visual (`loading-spinner`).
2. El consumo del archivo JSON local debe estructurarse mediante objetos tipados y métodos nativos de búsqueda de JavaScript.
3. **Atomic Design:** Estructuración modular estricta desde átomos (`loading-spinner`) hasta templates (`portal-template`).
4. **Principio SOLID (SRP):** La lógica de ruteo y carga asíncrona debe estar separada de la representación visual de las tarjetas de módulos.



---

### **Medio --- Panel de Métricas Masivas con Componentes Memorizados (`memo`)**

* **Meta:** Construir una vista analítica que procese un listado masivo de indicadores de rendimiento desde un JSON local. La aplicación debe evitar re-renders en cascada utilizando la API `memo` en los componentes hijos y aplicando funciones de ordenamiento y filtrado altamente optimizadas mediante métodos de arrays de JavaScript.
* **Estructura de Datos (Mock JSON - Archivo: `performance-metrics-data.json`):**

```json
[
  { "metricId": "MET-101", "department": "Ventas", "kpi": "Conversión Leads", "score": 88.5, "target": 80.0 },
  { "metricId": "MET-102", "department": "Logística", "kpi": "Tiempo de Entrega", "score": 94.2, "target": 90.0 },
  { "metricId": "MET-103", "department": "Soporte", "kpi": "Satisfacción Cliente", "score": 79.8, "target": 85.0 },
  { "metricId": "MET-104", "department": "Marketing", "kpi": "Retorno de Inversión", "score": 91.0, "target": 88.0 },
  { "metricId": "MET-105", "department": "Desarrollo", "kpi": "Velocidad de Sprint", "score": 96.5, "target": 90.0 },
  { "metricId": "MET-106", "department": "Ventas", "kpi": "Ticket Promedio", "score": 82.1, "target": 85.0 }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `components/atoms/metric-badge.jsx`: Este átomo recibe el valor numérico y el objetivo de cumplimiento de un indicador. Su sentido es calcular lógicamente si la métrica es exitosa o deficiente utilizando operadores nativos y renderizar una etiqueta visual estilizada y desacoplada de la tabla.
* `components/molecules/metric-row-item.jsx`: Esta molécula recibe la información individual de una fila de métrica y el átomo de etiqueta. Su sentido es estructurar una fila de datos optimizada y envuelta estrictamente en la API `memo` de React, garantizando que solo se vuelva a renderizar si sus propiedades específicas cambian, evitando bloqueos cuando la tabla principal se actualiza.
* `components/organisms/metrics-table-grid.jsx`: Este organismo recibe el listado masivo de datos filtrados y las funciones de ordenamiento. Su sentido es coordinar la renderización de la tabla aplicando métodos nativos de transformación de arrays (como `filter` y `reduce`), manteniendo un alto rendimiento al manejar colecciones grandes de datos.
* `components/templates/metrics-template.jsx`: Este template recibe el organismo de la tabla de métricas y los controles globales de filtrado. Su sentido es unificar la vista analítica completa bajo los lineamientos de Atomic Design y Clean Architecture, separando la presentación visual de la lógica de procesamiento.


* **Criterios de Aceptación:**
1. Los componentes hijos de filas y tarjetas deben estar envueltos estrictamente en la API `memo` para prevenir renderizados innecesarios cuando el estado del componente padre cambie pero sus props se mantengan estables.
2. Las transformaciones de datos y cálculos estadísticos (como promedios globales y filtrado por departamentos) deben realizarse utilizando encadenamiento seguro de métodos nativos (`Array.prototype.filter()`, `Array.prototype.reduce()`).
3. **Atomic Design:** Separación clara en componentes desde átomos (`metric-badge`) hasta organismos de tablas (`metrics-table-grid`).
4. **Principio SOLID (OCP - Abierto/Cerrado):** La estructura de la tabla debe permitir la extensión de nuevas métricas mediante composición sin alterar el componente base memorizado.



---

### **Difícil --- Sistema Enterprise con Patrones de Diseño y Arquitectura Limpia**

* **Meta:** Diseñar una plataforma empresarial modular que integre gestión de proyectos y control de calidad consumiendo un archivo JSON masivo. La aplicación debe estructurarse bajo Clean Architecture y Atomic Design, aplicando patrones de diseño avanzados (como *Compound Components*), principios SOLID y flujos concurrentes de React.
* **Estructura de Datos (Mock JSON - Archivo: `enterprise-projects-data.json`):**

```json
[
  { "projectId": "PRJ-901", "name": "Core Banking Modernization", "client": "Banco del Sur", "budget": 150000, "status": "En Desarrollo", "priority": "Alta" },
  { "projectId": "PRJ-902", "name": "E-Commerce Omnicanal", "client": "Retail Global", "budget": 85000, "status": "Planificación", "priority": "Media" },
  { "projectId": "PRJ-903", "name": "Plataforma de Telemedicina", "client": "Salud Integral", "budget": 120000, "status": "En Desarrollo", "priority": "Alta" },
  { "projectId": "PRJ-904", "name": "Automatización Logística IA", "client": "Transportes Andinos", "budget": 95000, "status": "Revisión", "priority": "Baja" },
  { "projectId": "PRJ-905", "name": "Portal de Autogestión Ciudadana", "client": "Gobierno Digital", "budget": 200000, "status": "Planificación", "priority": "Alta" },
  { "projectId": "PRJ-906", "name": "Sistema de Facturación Electrónica", "client": "Comercio Express", "budget": 45000, "status": "En Desarrollo", "priority": "Media" }
]

```

* **Estructura de Archivos (Kebab-case obligatorio y Flujo de Arquitectura):**
* `context/enterprise-auth-context.jsx`: Este contexto global recibe las preferencias de sesión y los filtros corporativos globales. Su sentido es proveer un canal de comunicación centralizado y desacoplado (aplicando Inversión de Dependencias - DIP), permitiendo que cualquier componente hijo consuma datos sin recurrir a prop drilling.
* `components/atoms/status-indicator.jsx`: Este átomo recibe el texto descriptivo de estado de un proyecto. Su sentido es encapsular la lógica de representación visual del estado corporativo mediante un diseño limpio y reutilizable en múltiples pantallas.
* `components/molecules/project-card.jsx`: Esta molécula utiliza el patrón de diseño *Compound Components* para estructurar una tarjeta flexible. Recibe subcomponentes y props de control, permitiendo organizar la información del proyecto sin acoplar la presentación al contenedor principal.
* `components/organisms/enterprise-dashboard-grid.jsx`: Este organismo recibe el listado de proyectos y los valores diferidos de búsqueda (`useDeferredValue`). Su sentido es procesar agrupaciones avanzadas con estructuras como `Map` o `Object.groupBy()` y mantener la concurrencia fluida mediante `useTransition`.
* `components/templates/enterprise-template.jsx`: Este template recibe el organismo del dashboard y la estructura general de la aplicación. Su sentido es consolidar la vista bajo Clean Architecture, asegurando que la interfaz cumpla con Atomic Design y desacople totalmente la lógica de negocio de la presentación.


* **Criterios de Aceptación:**
1. La arquitectura del código debe seguir estrictamente los principios de **Clean Architecture**, aislando la capa de servicios de datos, la lógica de contexto global y los componentes visuales de presentación.
2. Se debe implementar un patrón de diseño avanzado (como *Compound Components* o *Render Props*) para estructurar los contenedores de tarjetas de proyectos de forma flexible y reutilizable.
3. Se debe integrar concurrencia de React (`useTransition` y `useDeferredValue`) para gestionar filtros y búsquedas masivas de proyectos sin bloquear la interfaz gráfica.
4. La consolidación y agrupación de presupuestos por prioridad y estado de proyecto debe realizarse mediante funciones de agregación avanzadas de JavaScript (`Object.groupBy()` o estructuras `Map`).
5. **Principio SOLID (DIP - Inversión de Dependencias):** Los componentes de presentación (`project-card`, `enterprise-dashboard-grid`) no deben acoplarse directamente a fuentes de datos brutas, recibiendo abstracciones desacopladas a través de contratos de contexto e interfaces claras.

------------------------------------------------------------------------

## 📝 Notas generales

-   [ ] Espacio libre para anotaciones personales, dudas o temas que
    quieras reforzar.
