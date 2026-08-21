import './input-m.css'

interface Input {
  passwordHintId: string;
  value : string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function Input({passwordHintId,onChange,value}: Input) {
  return (
    <div className="Input m-5">
    <input
          aria-describedby={passwordHintId}
          value={value}
           onChange={onChange}
        ></input>
    </div>
  );
}