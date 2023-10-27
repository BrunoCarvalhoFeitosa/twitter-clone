"use client"
import Image from "next/image"
import { useRouter } from "next/router"
import { DataUserProps } from "@/@types/typings"
import Avatar from "@/components/Feed/Avatar"

const Hero: React.FC<DataUserProps> = ({ user }) => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <div>
      <div className="w-full h-44 mt-6 bg-neutral-700 relative">
        {user?.coverImage && (
          <Image
            fill
            src={user.coverImage}
            alt={`Foto de capa de ${user.name}`}
            title={`Foto de capa de ${user.name}`}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId as string} isLarge />
        </div>
      </div>
    </div>
  )
}

export default Hero