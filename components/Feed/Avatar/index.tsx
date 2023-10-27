"use client"
import { useCallback } from "react"
import { useRouter } from "next/router";
import Image from "next/image";
import useUser from "@/hooks/useUser"

interface AvatarProps {
  userId: string
  isLarge?: boolean
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge }) => {
  const router = useRouter()
  const { data: fetchedUser } = useUser(userId)

  const onClick = useCallback((event: any) => {
    event.stopPropagation()

    const url = `/users/${userId}`

    router.push(url)
  }, [router, userId])

  return (
    <div className={`${isLarge ? "w-[120px]" : "w-[52px]"} ${isLarge ? "h-[120px]" : "h-[52px]"} rounded-full cursor-pointer relative overflow-hidden`}>
      <Image
        fill
        src={fetchedUser?.profileImage ?? "/images/user-placeholder.png"}
        alt={fetchedUser?.name ?? fetchedUser?.username}
        title={fetchedUser?.name ?? fetchedUser?.username}
        onClick={onClick}
        className="w-full h-full rounded-full object-cover transition-transform hover:scale-110 object-top"
      />
    </div>
  )
}

export default Avatar