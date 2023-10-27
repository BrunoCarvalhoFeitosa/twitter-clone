"use client"
import { useMemo } from "react"
import { DataUserProps } from "@/@types/typings"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import useCurrentUser from "@/hooks/useCurrentUser"
import useFollow from "@/hooks/useFollow"
import { useEditModalProfile } from "@/contexts/EditModalProfileContext"
import Button from "@/components/User/Button"
import { BiCalendar } from "react-icons/bi"

const Bio: React.FC<DataUserProps> = ({ user }) => {
  const { data: currentUser } = useCurrentUser()
  const { isFollowing, toggleFollow } = useFollow(user.id)
  const { setIsOpen } = useEditModalProfile()

  const createdAt = useMemo(() => {
    if (!user.createdAt) {
      return null
    }

    return format(new Date(user.createdAt), "MMMM yyyy", { locale: ptBR })
  }, [user.createdAt])
  
  return (
    <div className="w-full mt-2 pb-4 border-bottom">
      <div className="flex justify-end p-2">
        {currentUser?.id === user.id ? (
          <Button
            secondary
            label="Editar"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <Button
            secondary={!isFollowing}
            label={isFollowing ? "Unfollow": "Follow"}
            onClick={toggleFollow}
            outline={isFollowing}
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-lg font-bold">
            {user.name}
          </p>
          <p className="text-md font-normal text-neutral-500">
            @{user.username}
          </p>
        </div>
        <div className="my-5">
          <p className="text-md leading-[22px] font-medium text-black">
            {user.bio}
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-1 text-neutral-500">
          <div className="text-2xl">
            <BiCalendar />
          </div>
          <div>
            Ingressou em {createdAt}
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 ml-[2px] gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="font-bold">
              {user?.followingIds?.length ?? 0}
            </p>
            <p className="text-neutral-500">
              Seguindo
            </p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="font-bold">
              {user.followersCount ?? 0}
            </p>
            <p className="text-neutral-500">
              Seguidores
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio