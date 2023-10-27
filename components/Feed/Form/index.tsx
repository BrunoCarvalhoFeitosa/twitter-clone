"use client"
import { useState, FormEvent } from "react"
import { toast } from "react-hot-toast"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import axios from "axios"
import useCurrentUser from "@/hooks/useCurrentUser"
import usePosts from "@/hooks/usePosts"
import usePost from "@/hooks/usePost"
import Avatar from "@/components/Feed/Avatar"

interface FormProps {
  isComment?: boolean
  postId?: string
  placeholder?: string
}

const schema = yup.object({
  post:
    yup
      .string()
      .max(500, "Seu post deve ter menos de 500 caracteres.")
      .min(5, "Por favor, insira um tweet válido.")
      .required("O campo tweet é obrigatório."),
})

const Form: React.FC<FormProps> = ({ postId, placeholder, isComment }) => {
  const { data: currentUser } = useCurrentUser()
  const { mutate: mutatePosts } = usePosts()
  const { mutate: mutatePost } = usePost(postId as string)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { register, watch, reset, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) })

  const body = watch("post")

  const handlePost = (event: FormEvent) => {
    event.preventDefault()

    handleSubmit(async () => {
      try {
        setIsLoading(true)

        const url = isComment
          ? `/api/comments?postId=${postId}`
          : "/api/posts"

        await axios.post(url, { body })
        toast.success("Mensagem tweetada!")
        reset()
        mutatePosts()
        mutatePost()
      } catch(error) {
        console.error("Error: ", error)
        toast.error("Erro ao tweetar, tente novamente.")
      } finally {
        setIsLoading(false)
      }
    })(event)
  }

  return (
    <div className="border-bottom py-4 px-5">
      <div className="flex flex-row gap-4">
        <div>
          <Avatar userId={currentUser?.id} />
        </div>
        <form
          onSubmit={(event) => handlePost(event)}
          className="w-full"
        >
          <textarea
            disabled={isLoading}
            className="disabled:opacity-80 peer resize-none px-2 py-2 w-full h-[80px] bg-[#F5F5F5] rounded-md ring-0 outline-none text-[16px] leading-[20px] placeholder-neutral-500"
            placeholder={placeholder}
            {...register("post")}
          />
          <hr className="opacity-0 peer-focus:opacity-100 h-[2px] border-b-[#CCC] transition" />
          <div className="mt-1">
            <p className="text-sm font-medium text-red-500">
              {errors.post?.message}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !body}
              className={`${isLoading || !body ? "cursor-not-allowed" : "cursor-pointer"} px-8 py-2 rounded-full font-semibold text-white bg-[#1D9BF0]`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form