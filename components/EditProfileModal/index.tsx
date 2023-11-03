"use client"
import { useEffect, FormEvent, useState, useCallback } from "react"
import { useEditModalProfile } from "@/contexts/EditModalProfileContext"
import { toast } from "react-hot-toast"
import axios from "axios"
import useCurrentUser from "@/hooks/useCurrentUser"
import useUser from "@/hooks/useUser"
import { AiOutlineClose } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import ImageUpload from "./ImageUpload"

const EditProfileModal = () => {
  const { isOpen, setIsOpen } = useEditModalProfile()
  const { data: currentUser } = useCurrentUser()
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [profileImage, setProfileImage] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    setProfileImage(currentUser?.profileImage)
    setCoverImage(currentUser?.coverImage)
    setName(currentUser?.name)
    setUsername(currentUser?.username)
    setBio(currentUser?.bio)
  }, [currentUser?.name, currentUser?.username, currentUser?.bio, currentUser?.profileImage, currentUser?.coverImage])

  const onSubmit = useCallback(async (event: FormEvent) => {
    try {
      event.preventDefault()

      setIsLoading(true)

      if (currentUser.email) {
        await axios.patch("/api/edit", {
          name,
          username,
          bio,
          profileImage,
          coverImage
        })

        setIsLoading(false)
        setIsOpen(false)
        mutateFetchedUser()
  
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
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
                    Perfil editado
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Seus dados foram atualizados com sucesso.
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
      }
    } catch (error) {
      console.error("Something went wrong.", error)
      setIsLoading(false)
      toast.error("Ocorreu uma falha ao editar seus dados.")
    }
  }, [name, username, bio, profileImage, coverImage, mutateFetchedUser, setIsOpen])

  useEffect(() => {
    const handleModalClose = (event: any) => {
       if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleModalClose)

    return () => {
      window.removeEventListener("keydown", handleModalClose)
    }
  }, [setIsOpen])

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-black/95 z-10">
          <div className="absolute top-6 right-8 text-3xl text-white">
            <button
              type="button"
              className="outline-none cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] py-[40px] lg:h-[60vh] w-[50%] bg-white">
            <h2 className="mb-4 text-[24px] font-bold text-center">
              Editar dados pessoais
            </h2>
            <form onSubmit={(event) => onSubmit(event)} className="flex flex-col gap-y-4">
            <ImageUpload
              value={profileImage}
              onChange={(image) => setProfileImage(image)}
              label="Atualizar imagem de perfil"
              disabled={isLoading}
            />
            <ImageUpload
              value={coverImage}
              onChange={(image) => setCoverImage(image)}
              label="Atualizar imagem de capa"
              disabled={isLoading}
            />
              <div className="w-[80%] mx-auto">
                <input
                  type="text"
                  placeholder="Nome completo"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full h-[54px] rounded-md bg-[#EEE] outline-none px-4 text-[16px] placeholder:text-[16px] placeholder:text-[#999]"
                />
              </div>
              <div className="w-[80%] my-1 mx-auto">
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="w-full h-[54px] rounded-md bg-[#EEE] outline-none px-4 text-[16px] placeholder:text-[16px] placeholder:text-[#999]"
                />
              </div>
              <div className="w-[80%] my-1 mx-auto">
                <input
                  type="text"
                  placeholder="Biografia"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  className="w-full h-[54px] rounded-md bg-[#EEE] outline-none px-4 text-[16px] placeholder:text-[16px] placeholder:text-[#999]"
                />
              </div>
              <button
                type="submit"
                className="mx-auto w-[80%] h-[55px] rounded-full bg-[#1D9BF0] text-[20px] font-semibold text-white"
              >
                {isLoading ? "Salvando dados..." : "Salvar dados pessoais"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProfileModal