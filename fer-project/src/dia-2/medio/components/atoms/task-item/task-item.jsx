export const Taskitem = ({ homework }) => {
    const esLarga = homework.title.length > 20 //length cuenta cuantos caracteres
    return (
        <div> 
            <h1 className={esLarga ? "bg-red-200 p-4" : "bg-green-200 p-4"}>{/*ternario*/}
                {homework.title}</h1>
            <p>{homework.description}</p>
        </div>
    )
} 