import { useState } from "react"
import { Taskitem } from "../../atoms/task-item/task-item"

const HOMEWORKS = [
    {
        id: 1,
        title: "Investigar sobre biologia",
        description: "Conoce mas sobre la biologia"
    },
    {
        id: 2,
        title: "Investigar sobre atomic design",
        description: "Conoce mas sobre Atomic Desing"
    },
    {
        id: 3,
        title: "Mario Benedetti",
        description: "informacion sobre escritor"
    }
] 

export const Todolist = () =>{

    return(
        <>
        {HOMEWORKS.map((homework)=>{
            return (
                <div key={homework.id}> 
                    <Taskitem homework={homework}/>
                </div>
            )
        })}
        </>
    )
}