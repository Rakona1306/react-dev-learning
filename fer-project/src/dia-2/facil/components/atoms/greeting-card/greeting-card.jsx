import PropTypes from 'prop-types';

export function GreetingCard({ nombre, apellido }) {
  return (
    <h1>
      Hola, {nombre}
      {apellido && ` ${apellido}`}
    </h1>
  );
}

GreetingCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
};

/*en main dentro del  StrictMode
import { GreetingCard } from './dia-2/facil/components/atoms/greeting-card/greeting-card'
    <GreetingCard nombre="Carlos" apellido="Ocaña" />
*/