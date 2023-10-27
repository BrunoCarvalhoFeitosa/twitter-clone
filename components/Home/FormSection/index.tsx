"use client"
import { useFormContext } from "@/contexts/FormContext"
import FormSignIn from "@/components/Home/FormSignIn"
import FormSignUp from "@/components/Home/FormSignUp"

const FormSection = () => {
  const { formType } = useFormContext()

  return (
    <>
      {formType === "sign-in" ? (
        <FormSignIn />
      ) : (
        <FormSignUp />
      )}
    </>
  )
}

export default FormSection