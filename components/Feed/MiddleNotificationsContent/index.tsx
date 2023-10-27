"use client"
import { useRouter } from "next/router"
import NotificationsFeed from "@/components/Feed/Notifications/NotificationsFeed"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"

const MiddleNotificationsContent = () => {
  const router = useRouter()

  return (
    <div className="flex flex-1 flex-col h-full overflow-y-auto scrollbar-hide py-[15px] px-[20px] border-feed border-indigo-500">
      <div className="p-4 border-bottom">
        <div className="flex items-center gap-x-2">
          <div className="text-3xl">
            <button
              type="button"
              onClick={() => router.push("/feed")}
              className="flex cursor-pointer"
            >
              <HiOutlineArrowLongLeft />
            </button>
          </div>
          <h3 className="text-[20px] font-bold p-0 m-0">
            Notificações
          </h3>
        </div>
      </div>
      <NotificationsFeed />
    </div>
  )
}

export default MiddleNotificationsContent