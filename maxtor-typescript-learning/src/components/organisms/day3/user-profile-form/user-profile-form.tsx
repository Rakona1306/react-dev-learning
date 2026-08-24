import { useState, useRef } from "react";
import UserFormFields from "../../../molecules/Day3/user-form-fields";

export default function UserProfileForm() {
  const estadoInicial = { nombre: "", correo: "", edad: "" };
  const [formData, setFormData] = useState(estadoInicial);
  const [datosGuardados, setDatosGuardados] = useState<{ nombre : string, correo: string, edad : string} | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReset = () => {
    setFormData(estadoInicial);
    setDatosGuardados(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleOnSummbit = (e) =>{
    e.preventDefault();
    setDatosGuardados(formData);
  }
  console.log("renderizado");
  return (
    <section>
      <form onSubmit={handleOnSummbit} >
        <UserFormFields
          datosFormulario={formData}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleReset}>
          Limpiar
        </button>
      </form>
      {datosGuardados && (
        <div>
          <h3>Datos Ingresados:</h3>
          {JSON.stringify(datosGuardados)}
        </div>
      )}
    </section>
  );
}
