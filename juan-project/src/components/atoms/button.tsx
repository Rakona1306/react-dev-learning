
interface Props {
  children: React.ReactNode;
  onClick: () => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className="cursor-pointer bg-gray-100 text-black p-2 rounded-md w-fit">
      {children}
    </button>
  )
}