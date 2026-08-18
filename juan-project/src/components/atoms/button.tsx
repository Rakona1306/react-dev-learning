
interface Props {
  children: React.ReactNode;
  onClick: () => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      {children}
    </button>
  )
}