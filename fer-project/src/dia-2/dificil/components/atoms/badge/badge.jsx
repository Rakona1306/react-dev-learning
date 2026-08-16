export function Badge({ texto }) {
  return (
    <span className="inline-block rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
      {texto}
    </span>
  );
}