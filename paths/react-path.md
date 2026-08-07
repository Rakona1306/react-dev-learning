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

**Fácil --- Tu primer saludo en pantalla** Meta: crear tu proyecto y
lograr que aparezca un mensaje con tu nombre. Pistas para resolverlo:

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

**Medio --- Lista de productos** Meta: crear una lista de al menos 5
productos (nombre y precio) y obtener, por un lado, solo los nombres, y
por otro, los precios con un descuento aplicado. Pistas para resolverlo:

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

**Difícil --- Pedir información a internet** Meta: pedir datos a una
página de prueba gratuita y mostrarlos ordenados, controlando qué pasa
si algo falla. Pistas para resolverlo:

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

### 📦 Qué debes entregar hoy

Una página con al menos 2 componentes propios, donde uno de ellos recibe
información desde afuera y la muestra en pantalla.

### 💪 Ejercicios

**Fácil --- Tarjeta de saludo** Meta: crear un componente que reciba un
nombre desde afuera y lo muestre en un título grande. Pistas para
resolverlo:

1.  Crea un nuevo componente y dale un nombre descriptivo.
2.  Piensa cómo ese componente puede "recibir" un dato desde quien lo
    usa (busca el concepto de "props").
3.  Usa ese dato dentro del título que se muestra.

-   Reto extra: agrega un segundo dato opcional (como un apellido) que
    solo se muestre si fue enviado.

**Medio --- Lista de tareas pendientes** Meta: mostrar una lista de
tareas (que ya tienes armada) usando un componente, una por una. Pistas
para resolverlo:

1.  Piensa cómo recorrer una lista de datos para mostrar algo por cada
    elemento.
2.  Cada elemento mostrado en pantalla necesita un identificador único
    (investiga por qué y cómo se usa).
3.  Si la lista está vacía, piensa qué mensaje le mostrarías al usuario
    en vez de nada.

-   Reto extra: dale un estilo distinto a las tareas si su nombre es muy
    largo (por ejemplo, más de 20 letras).

**Difícil --- Tarjeta de producto** Meta: crear un componente de
"tarjeta de producto" que reciba imagen, nombre, precio y un posible
descuento, y muestre una etiqueta especial solo si hay descuento. Pistas
para resolverlo:

1.  Define qué datos necesita recibir tu tarjeta para funcionar.
2.  Piensa cómo mostrar una etiqueta ("Oferta") solo cuando exista un
    descuento, y nada cuando no exista.
3.  Crea un componente "padre" que use varias tarjetas a partir de una
    lista de productos.

-   Reto extra: ordena los productos mostrados de menor a mayor precio
    antes de mostrarlos.

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

## Día 3 --- Hacer que tu página reaccione (estado y eventos)

### 🎯 Qué aprender

-   Cómo hacer que un componente "recuerde" información que puede
    cambiar (por ejemplo, un número que sube o baja).
-   Cómo responder cuando el usuario hace clic, escribe o envía un
    formulario.
-   Cómo capturar lo que el usuario escribe en un campo de texto.
-   Por qué, cuando algo cambia, hay que "reemplazar" la información en
    vez de modificarla directamente.
-   Cómo compartir esa información entre dos componentes distintos
    cuando uno la necesita también.

### 📦 Qué debes entregar hoy

Una pequeña pantalla interactiva (por ejemplo, un contador o un
formulario) que cambie en pantalla cuando el usuario hace algo.

### 💪 Ejercicios

**Fácil --- Contador** Meta: mostrar un número en pantalla con dos
botones, uno que lo suba y otro que lo baje. Pistas para resolverlo:

1.  Investiga cómo hacer que un componente "recuerde" un valor que puede
    cambiar.
2.  Cada botón necesita una acción que ocurra al hacer clic.
3.  Piensa cómo actualizas ese valor guardado cuando se hace clic.

-   Reto extra: agrega un botón "reiniciar" que vuelva el número a 0.

**Medio --- Campo de texto** Meta: mostrar en pantalla, en tiempo real,
lo que el usuario va escribiendo en un campo de texto, y un botón para
borrarlo. Pistas para resolverlo:

1.  Piensa cómo "escuchar" cada letra que el usuario escribe en el
    campo.
2.  Guarda ese texto en algo que el componente recuerde y que se
    actualice constantemente.
3.  Muestra ese valor guardado en algún lugar de la pantalla.

-   Reto extra: no dejes que el usuario envíe el formulario si el campo
    está vacío.

**Difícil --- Lista de tareas con acciones** Meta: crear una lista de
tareas donde el usuario pueda agregar, eliminar y marcar tareas como
completadas. Pistas para resolverlo:

1.  Piensa cómo representar cada tarea (por ejemplo: un texto y si está
    completada o no).
2.  Para agregar una tarea nueva, necesitas juntar la anterior lista con
    la tarea nueva, sin borrar las anteriores.
3.  Para eliminar, piensa cómo quedarte con "todas menos una".
4.  Para marcar como completada, piensa cómo cambiar solo esa tarea sin
    tocar las demás.

-   Reto extra: separa el formulario de "agregar tarea" y la lista en
    dos componentes distintos, compartiendo la información entre ambos.

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

## Día 4 --- Traer información de afuera y reaccionar a cambios

### 🎯 Qué aprender

-   Cómo ejecutar código automáticamente cuando la pantalla aparece por
    primera vez o cuando algo cambia.
-   Cómo "limpiar" cosas que quedaron pendientes cuando el componente ya
    no se usa.
-   Cómo pedir datos a internet y mostrarlos, avisando mientras se están
    cargando o si algo falla.

### 📦 Qué debes entregar hoy

Una pantalla que, al abrirse, pida datos a internet automáticamente y
los muestre, con un mensaje mientras carga.

### 💪 Ejercicios

**Fácil --- Mensaje al abrir la pantalla** Meta: mostrar un mensaje en
la consola apenas se abre la pantalla. Pistas para resolverlo:

1.  Busca cómo ejecutar código "una sola vez" cuando el componente
    aparece por primera vez.
2.  Prueba qué pasa si le dices que se repita cada vez que algo cambia,
    versus solo una vez.

-   Reto extra: compara en consola la diferencia entre ambos
    comportamientos, anotando cuándo se ejecuta cada uno.

**Medio --- Traer datos con estado de carga** Meta: al abrir la
pantalla, pedir datos a una página de prueba y mostrarlos, con un
mensaje de "cargando" mientras llegan, y otro si algo sale mal. Pistas
para resolverlo:

1.  Necesitas recordar tres cosas: si está cargando, si hubo un error, y
    los datos ya obtenidos.
2.  Piensa en qué momento cambia cada una de esas tres cosas.
3.  Muestra en pantalla un mensaje distinto según en qué momento estés.

-   Reto extra: agrega un botón que vuelva a pedir los datos sin
    recargar toda la página.

**Difícil --- Buscador en vivo** Meta: crear un campo de búsqueda que,
mientras el usuario escribe, pida datos a internet relacionados con lo
escrito y los muestre. Pistas para resolverlo:

1.  Piensa qué pasaría si pides datos por cada letra que el usuario
    escribe (¿es buena idea?).
2.  Investiga una forma de "esperar un poquito" después de que el
    usuario deja de escribir antes de pedir los datos (esto se llama
    comúnmente "esperar a que se calme").
3.  Piensa qué pasa con una búsqueda anterior si el usuario ya escribió
    algo nuevo: ¿cómo evitas mostrar resultados viejos?

-   Reto extra: si el usuario borra todo el texto, limpia también los
    resultados mostrados.

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

## Día 5 --- Herramientas más avanzadas y reutilizar lógica

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

## Día 6 --- Varias pantallas (rutas) y datos compartidos en toda la app

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

## Día 7 --- Proyecto final y publicarlo en internet

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
