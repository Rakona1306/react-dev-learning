interface props {
  imagen: string;
}

export default function Imagen({ imagen }: props) {
  return (
    <>
      <img className="size-40" src={imagen} />
    </>
  );
}
