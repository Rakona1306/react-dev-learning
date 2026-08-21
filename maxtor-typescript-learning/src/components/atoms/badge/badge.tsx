import './badge.css';
interface BadgeProps {
    text: string;
    variante?: string;
}
export default function Badge({text, variante}: BadgeProps) {
    const claseVariante = variante ? `badge-${variante}` : 'badge-offer';
    return (
        <span className={`badge ${claseVariante}`}>{text}</span>
    );
}