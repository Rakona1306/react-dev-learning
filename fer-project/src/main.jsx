import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Users } from './dia-1/dificil/components/organisms/users/users'
import { ProductList } from './dia-2/dificil/components/organisms/product-list/product-list'
import { Counter } from './dia-3/facil/components/organisms/counter/counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<ProductList />*/}
    {/*<Users />*/}
    <Counter />
    {/*<Todolist />*/}
    {/*<GreetingCard nombre="Carlos" apellido="Ocaña" />*/}
    {/*<TarjetaSaludo />*/}
  </StrictMode>,
)