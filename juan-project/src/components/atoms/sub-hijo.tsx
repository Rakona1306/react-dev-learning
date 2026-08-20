import React, { useContext } from 'react'
import { NombreContext } from '../../context/NombreContext'

export default function SubHijo({ nombre }: { nombre: string }) {

  const { nombre1 } = useContext(NombreContext) || {}

  return (
    <div>
      {nombre1 ?? "No hay nombre"}
    </div>
  )
}
