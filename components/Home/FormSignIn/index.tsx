"use client"
import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import { useFormContext } from "@/contexts/FormContext"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { BsTwitter, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"

const schema = yup.object({
  user_email:
    yup
      .string()
      .email("Por favor, insira um e-mail, válido.")
      .required("O campo e-mail é obrigatório."),
  user_password:
    yup
    .string()
    .min(7, "Sua senha deve conter no minimo 7 caracteres")
    .required("O campo senha é obrigatório.")
})

const FormSignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setFormType } = useFormContext()
  const { register, getValues, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) })

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault()
  
    handleSubmit(async () => {
      try {
        setIsLoading(true)

        await signIn("credentials", {
          email: getValues("user_email"),
          password: getValues("user_password"),
          redirect: true,
          callbackUrl: "/feed"
        })

        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                <div className="text-[35px] text-[#1D9BF0]">
                  <BsTwitter />
                </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Acesso liberado
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Você será redirecionado ao Twitter.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Fechar
              </button>
            </div>
          </div>
        ))
      } catch(error) {
        console.error("Error")
        setIsLoading(false)
        toast.error("Erro ao autenticar.")
      } finally {
        setIsLoading(false)
      }
    })(event)
  }

  return (
    <div className="flex-1 lg:h-[100vh] px-[20px] md:px-[46px] lg:px-[74px] py-[48px] bg-white">
      <div className="flex justify-between items-center">
        <div className="text-[45px] text-[#1D9BF0]">
          <BsTwitter />
        </div>
        <div className="flex items-center gap-x-1 text-[14px] font-medium">
          <div>
            <p className="text-[#212121]">
              Não tem uma conta?
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setFormType("sign-up")}
              className="font-bold text-[#1D9BF0] after:bg-[#1D9BF0] after:absolute after:-bottom-[7px] after:left-0 after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Inscreva-se
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div>
          <h1 className="text-[34px] md:text-[40px] leading-[44px] md:leading-[50px] font-bold text-[#212121]">
            Descubra o que <br /> está em alta
          </h1>
        </div>
        <div className="mt-8">
          <form onSubmit={(event) => handleSignIn(event)}>
            <div className="mb-6">
              <h4 className="text-[20px] font-semibold text-[#757575]">
                Entre no Twitter
              </h4>
            </div>
            <div className="flex flex-col">
              <div>
                <input
                  type="text"
                  className="w-full h-[56px] rounded-md bg-[#EEE] outline-none px-4 text-[14px] placeholder:text-[13px] placeholder:text-[#999]"
                  placeholder="Celular, e-mail ou nome de usuário"
                  autoComplete="off"
                  {...register("user_email")}
                />
              </div>
              <div>
                <p className="py-2 pl-4 text-[12px] font-medium text-[#444]">
                  {errors.user_email?.message}
                </p>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-[56px] rounded-md bg-[#EEE] outline-none pl-4 pr-14 text-[14px] placeholder:text-[13px] placeholder:text-[#999]"
                  placeholder="Digite sua senha"
                  autoComplete="off"
                  {...register("user_password")}
                />
                <div className="absolute top-[50%] translate-y-[-50%] right-4">
                  {showPassword ? (
                    <button type="button" onClick={() => setShowPassword(false)}>
                      <BsFillEyeSlashFill className="text-xl text-[#AAA]" />
                    </button>
                  ) : (
                    <button type="button" onClick={() => setShowPassword(true)}>
                      <BsFillEyeFill className="text-xl text-[#AAA]" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <p className="py-2 pl-4 text-[12px] font-medium text-[#444]">
                  {errors.user_password?.message}
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full h-[56px] px-4 rounded-md bg-[#1D9BF0] font-medium text-white outline-none focus:ring-4 shadow-lg transform active:scale-90 transition-transform"
                  placeholder="Digite sua senha"
                >
                  {isLoading ? "Conectando agora..." : "Conecte-se agora" }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSignIn