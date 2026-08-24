import './label-m.css'

interface labelProps{
    children : React.ReactNode;
}

export default function Label({children}:labelProps){
    return(
        <label className="Label">{children}</label>
    );
}