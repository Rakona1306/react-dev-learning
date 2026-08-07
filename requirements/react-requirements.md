# 🛠️ Tecnologías y Conceptos por Ejercicio — Plan de React (7 Días)

A continuación tienes el desglose técnico completo de las tecnologías, herramientas, funciones nativas y Hooks que se utilizan en cada uno de los ejercicios del plan de estudio.

## ⚙️ Instalación recomendada

- **Node.js**: necesario para ejecutar JavaScript fuera del navegador y usar herramientas de desarrollo.
- **pnpm**: gestor de paquetes rápido y eficiente para instalar dependencias de proyectos React.
- **Vite**: herramienta para inicializar y ejecutar proyectos React modernos.
- **Visual Studio Code**: editor recomendado para trabajar con React.
- **Extensiones recomendadas para React**:
  - ESLint
  - Prettier - Code formatter
  - vscode-reactjs-snippets
  - Simple React Snippets
  - GitLens
  - npm Intellisense
  - Path Intellisense

### Comandos de instalación en bash

```bash
# Instalar pnpm globalmente (requiere Node.js instalado previamente)
npm install -g pnpm

# Crear un nuevo proyecto React con Vite
pnpm create vite@latest nombre-del-proyecto -- --template react

# Entrar al proyecto
cd nombre-del-proyecto

# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev
```

### ¿Qué es pnpm?

`pnpm` es un gestor de paquetes para JavaScript/Node.js similar a `npm` o `yarn`, pero más rápido y más eficiente en el uso del disco porque comparte dependencias entre proyectos.

### ¿Qué es Visual Studio Code?

Visual Studio Code (VSCode) es un editor de código gratuito y ligero con soporte nativo para JavaScript y React, además de una amplia colección de extensiones para mejorar la productividad.

---

## 🗓️ Día 1 — Preparar tu computadora y entender la base del lenguaje

### 1. Fácil: Tu primer saludo en pantalla
- **Node.js**: Entorno de ejecución de JavaScript en la computadora.
- **pnpm**: Gestor de paquetes rápido para instalar dependencias.
- **Vite (`pnpm create vite`)**: Herramienta de empaquetado para inicializar la aplicación de React.
- **JSX / React Basics**: Renderizado básico de un componente funcional (`function App()`).
- **JavaScript ES6 (Date API)** *(Reto Extra)*: `new Date().getHours()` para condicionales según la hora.

### 2. Medio: Lista de productos
- **Objetos y Arrays de JavaScript**: Declaración de estructuras de datos (`[{ nombre, precio }]`).
- **`Array.prototype.map()`**: Métodos iterativos inmutables para transformar colecciones.
- **Desestructuración de Objetos (ES6)**: `const { nombre, precio } = producto`.
- **Módulos ES6 (`import` / `export`)** *(Reto Extra)*: Exportar arreglos/funciones a archivos independientes.

### 3. Difícil: Pedir información a internet
- **Fetch API**: API nativa del navegador para peticiones HTTP.
- **`async` / `await`**: Manejo de asincronía en JavaScript.
- **Estructura `try...catch`**: Control y captura de errores en operaciones asíncronas.
- **`setTimeout` / Promises** *(Reto Extra)*: Simulación de retardos en la red (*latency* artificial).

---

## 🗓️ Día 2 — Piezas reutilizables (componentes) y cómo mostrar información

### 1. Fácil: Tarjeta de saludo
- **Componentes Funcionales**: Creación de funciones React que retornan JSX.
- **Props de React**: Paso de parámetros de componentes padre a componentes hijo.
- **Operador Lógico `&&` / Ternario**: Renderizado condicional de datos opcionales.

### 2. Medio: Lista de tareas pendientes
- **Renderizado de Listas en JSX**: Uso de `.map()` dentro del cuerpo del JSX.
- **Propiedad `key`**: Identificador único en elementos de listas para el algoritmo de reconciliación de React.
- **CSS Modules / Classes dinámicas**: Modificación de clases según condiciones (ej. longitud del texto).

### 3. Difícil: Tarjeta de producto
- **Composición de Componentes**: Relación Padre-Hijo entre componentes.
- **Renderizado Condicional Avanzado**: Evaluación de descuentos en el renderizado.
- **`Array.prototype.sort()`** *(Reto Extra)*: Ordenamiento de listas en memoria previo a la renderización.

---

## 🗓️ Día 3 — Hacer que tu página reaccione (estado y eventos)

### 1. Fácil: Contador
- **Hook `useState`**: Almacenamiento y gestión del estado local del componente.
- **Manejadores de Eventos (`onClick`)**: Captura de interacciones del usuario.
- **Actualizaciones de Estado**: Uso de callbacks `setContador(prev => prev + 1)`.

### 2. Medio: Campo de texto
- **Inputs Controlados**: Enlazar el valor de un campo (`value`) al estado local.
- **Manejadores de Eventos (`onChange`)**: Captura del objeto de evento `e.target.value`.
- **Validaciones en Formulario**: Deshabilitar botones o bloquear envíos cuando el estado está vacío.

### 3. Difícil: Lista de tareas con acciones
- **Inmutabilidad en el Estado**: Uso de Spread Operator (`...`) para agregar elementos sin mutar.
- **`Array.prototype.filter()`**: Eliminación inmutable de elementos del estado.
- **Lifting State Up (Elevar el Estado)**: Compartir el estado entre el formulario y la lista mediante un componente padre común.

---

## 🗓️ Día 4 — Traer información de afuera y reaccionar a cambios

### 1. Fácil: Mensaje al abrir la pantalla
- **Hook `useEffect`**: Manejo de efectos secundarios (*side effects*).
- **Array de Dependencias Vacío (`[]`)**: Ejecución exclusiva en la fase de montaje (*mount*).

### 2. Medio: Traer datos con estado de carga
- **Estados Tripartitos de Carga**: Patrón `loading` (boolean), `error` (string/null), `data` (array/object).
- **Fetch API dentro de `useEffect`**: Peticiones asíncronas automáticas al cargar la página.

### 3. Difícil: Buscador en vivo
- **Patrón Debounce**: Retrasar ejecuciones con `setTimeout` dentro del `useEffect`.
- **Función de Limpieza (`cleanup function`)**: Limpieza de *timers* devueltos por `useEffect` (`clearTimeout`) para evitar *memory leaks* y llamadas viejas.

---

## 🗓️ Día 5 — Herramientas más avanzadas y reutilizar lógica

### 1. Fácil: Enfocar un campo automáticamente
- **Hook `useRef`**: Acceso directo al nodo del DOM del navegador.
- **Método `.focus()` del DOM**: Enfoque de inputs en combinación con `useEffect`.

### 2. Medio: Herramienta propia de contador
- **Custom Hooks**: Abstracción y reutilización de lógica con estado (creación de un `useCounter`).
- **Hook `useCallback`** *(Reto Extra)*: Memorización de funciones para evitar recreaciones innecesarias en el ciclo de renderizado.

### 3. Difícil: Modo oscuro / claro
- **React Context API (`createContext`, `useContext`)**: Gestión de estado global sin pasar *props* manualmente (*prop drilling*).
- **Context Provider**: Envoltorio de componentes para proveer datos a toda la aplicación.
- **Hook `useMemo`** *(Reto Extra)*: Memorización de valores de configuración calculados.

---

## 🗓️ Día 6 — Varias pantallas (rutas) y datos compartidos en toda la app

### 1. Fácil: Tres pantallas
- **Librería `react-router-dom`**: Enrutamiento del lado del cliente (SPA).
- **Componentes `<BrowserRouter>`, `<Routes>`, `<Route>`**: Definición del mapa de rutas.
- **Componente `<Link>` / `<NavLink>`**: Navegación sin recargar la página.
- **Ruta Comodín (`path="*"`)**: Manejo de páginas 404.

### 2. Medio: Detalle de producto
- **Rutas Dinámicas (`path="/producto/:id"`)**: Parámetros dentro de la URL.
- **Hook `useParams`**: Lectura de parámetros dinámicos desde `react-router-dom`.
- **Hook `useNavigate`** *(Reto Extra)*: Navegación programática mediante código (`navigate(-1)`).

### 3. Difícil: Carrito de compras simple
- **Context API + React Router**: Integración de estado global de compras sobre múltiples páginas.
- **Web Storage API (`localStorage`)** *(Reto Extra)*: Persistencia de datos del carrito en el navegador.

---

## 🗓️ Día 7 — Proyecto final y publicarlo en internet

### 1. Fácil: Lista desde internet
- **Librería de Peticiones (Axios / Fetch)**: Consumo de APIs REST externas (ej. JSONPlaceholder).
- **Filtros In-Memory**: Filtrado local de arreglos devueltos usando `.filter()` y `.includes()`.

### 2. Medio: Agregar elementos nuevos
- **Peticiones HTTP POST**: Envío de datos formateados en JSON a servidores remotos.
- **Carga Diferida (`React.lazy` y `<Suspense>`)**: Importación dinámica de componentes bajo demanda (*code splitting*).

### 3. Difícil: Proyecto completo y publicado
- **Operaciones CRUD Completas**: Manejo de peticiones GET, POST, PUT/PATCH y DELETE.
- **Comando de Producción (`pnpm run build`)**: Generación del *bundle* optimizado y minificado con Vite.
- **Control de Versiones (Git & GitHub)**: Subida del código fuente a un repositorio.
- **Plataformas PaaS (Vercel / Netlify / Render)**: Despliegue continuo e integración con GitHub.

---

## 📋 Resumen Global del Stack Utilizado

| Categoría | Tecnologías y Herramientas |
| :--- | :--- |
| **Entorno de Trabajo** | Node.js, pnpm, VS Code, Git, GitHub |
| **Librería Principal** | React, JSX |
| **Empaquetador** | Vite |
| **Hooks de React** | `useState`, `useEffect`, `useRef`, `useContext`, `useCallback`, `useMemo` |
| **Enrutamiento** | `react-router-dom` (`useParams`, `useNavigate`, `Routes`, `Route`) |
| **Optimización** | `React.lazy`, `<Suspense>`, Debounce, React Context |
| **Peticiones HTTP** | Fetch API, Axios (opcional), Async/Await |
| **Persistencia y Navegador** | LocalStorage, DOM API, JavaScript ES6+ |
| **Despliegue** | Vercel, Netlify, Render |
