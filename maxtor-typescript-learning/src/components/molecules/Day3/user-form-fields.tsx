import Input from "../../atoms/Input-m/input-m";
interface datosFormulario {
  nombre: string;
  correo: string;
  edad: string;
}
interface UserFormFields {
  datosFormulario: datosFormulario;
  ref: React.RefObject<HTMLInputElement | null> ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserFormFields({
  datosFormulario,
  onChange,
  ref,
}: UserFormFields) {
  return (
    <div>
      <Input
        ref={ref}
        label="Nombre"
        name="nombre"
        type="nombre"
        value={datosFormulario.nombre}
        onChange={onChange}
      ></Input>
      <Input
        ref={ref}
        label="Correo"
        name="correo"
        type="correo"
        value={datosFormulario.correo}
        onChange={onChange}
      ></Input>
      <Input
        ref={ref}
        label="Edad"
        name="edad"
        type="edad"
        value={datosFormulario.edad}
        onChange={onChange}
      ></Input>
    </div>
  );
}
