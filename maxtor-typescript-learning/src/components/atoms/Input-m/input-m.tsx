import { useId } from 'react';

import './input-m.css'


interface Input {
  label: string;
  ref?: React.RefObject<HTMLInputElement | null> ;
  name: string;
  type: string;
  value : string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function Input({label,name,type,onChange,value,ref}: Input) {
  const inputId = useId();
  return (
    <div className="form-input-group">
      <label htmlFor={inputId} className="form-input-label">
        {label}
      </label>
      <input
      ref = {ref}
        id={inputId}
        name={name}
        type={type}
        value={value}
           onChange={onChange}
        ></input>
    </div>
  );
}