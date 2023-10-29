"use client"
import React, { createContext, useState, useContext, ReactNode } from "react"

type FormType = "sign-in" | "sign-up"

type FormContextType = {
  formType: FormType
  setFormType: (newFormType: FormType) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

type FormContextProviderProps = {
  children: ReactNode
}

export const FormProvider: React.FC<FormContextProviderProps> = ({ children }) => {
  const [formType, setFormType] = useState<FormType>("sign-in")

  return (
    <FormContext.Provider
      value={{
        formType,
        setFormType,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error("useForm must be used within FormProvider")
  }

  return context
}