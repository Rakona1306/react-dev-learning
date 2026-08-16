import './button.css';

export function Button({ texto, onClick }) {

  return (
    <button className="button" onClick={onClick}>
        {texto}
    </button>
  );
}