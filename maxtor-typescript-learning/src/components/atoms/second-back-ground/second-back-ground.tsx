
interface SecondBackGroundProps{
    ancho : string;
    alto: string;
    children : React.ReactNode;
}

export default function SecondBackGRound({ ancho , alto ,children} : SecondBackGroundProps){

    return(

        <div className={`bg-gray-800  w-${ancho} h-${alto} border-2 `}>{children}
        </div>
    );
}