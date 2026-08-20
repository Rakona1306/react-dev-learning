import React from "react"

interface ContextType {
  nombre1: string
  setNombre1: (nombre: string) => void
}

export const NombreContext = React.createContext<ContextType | null>(null)

export const NombreProvider = ({ children }: { children: React.ReactNode }) => {
  const [nombre1, setNombre1] = React.useState('Juan')

  return (
    <NombreContext.Provider value={{ nombre1, setNombre1 }}>
      {children}
    </NombreContext.Provider>
  )
}