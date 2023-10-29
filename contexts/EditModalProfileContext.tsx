"use client"
import React, { createContext, useState, useContext, ReactNode } from "react"

type EditModalProfileType = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const EditModalProfileContext = createContext<EditModalProfileType | undefined>(undefined)

type EditModalProfileProviderProps = {
  children: ReactNode
}

export const EditModalProfileProvider: React.FC<EditModalProfileProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <EditModalProfileContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </EditModalProfileContext.Provider>
  )
}

export const useEditModalProfile = (): EditModalProfileType => {
  const context = useContext(EditModalProfileContext)

  if (!context) {
    throw new Error("useEditModalProfile must be used within EditModalProfileProvider")
  }

  return context
}