interface props {
  text: string;
  price: number;
  discount: number;
}

export default function Texto({ text, price, discount}: props) {
    const flag = discount > 0;
    return (
      <div>
        <p>
          {text} {price} {flag && <p className="text-red-400">{discount} oferta!!</p>}
        </p>
      </div>
    );
  
}
