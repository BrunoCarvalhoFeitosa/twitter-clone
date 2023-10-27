"use client"
import { useRouter } from "next/router"
import useUsers from "@/hooks/useUsers"
import Avatar from "@/components/Feed/Avatar"
import { PiArrowElbowDownRightBold } from "react-icons/pi"

const WhoFollow = () => {
  const { data: users = [] } = useUsers()
  const router = useRouter()

  if (users.length === 0) {
    return null
  }

  return (
    <div className="hidden lg:block w-[26%] h-full p-[15px]">
      <div className="rounded-lg">
        <div className="p-4 border-bottom">
          <h3 className="text-[20px] font-bold p-0 m-0">
            Quem seguir
          </h3>
        </div>
        <div className="flex flex-col gap-4 mt-6 xl:max-h-[80vh] overflow-y-auto">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex items-center flex-row gap-3">
              <div>
                <Avatar userId={user.id} />
              </div>
              <button
                type="button"
                className="flex flex-col flex-1 outline-none cursor-pointer"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <p className="text-sm font-medium text-left w-[90%] truncate">
                  {user.name}
                </p>
                <div className="flex items-center gap-x-2">
                  <PiArrowElbowDownRightBold className="text-gray-400" />
                  <p className="text-sm text-gray-400">
                    @{user.username}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhoFollow