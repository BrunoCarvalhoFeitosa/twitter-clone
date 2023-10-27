"use client"
import { useEffect } from "react"
import useCurrentUser from "@/hooks/useCurrentUser"
import useNotifications from "@/hooks/useNotification"
import NotificationIllustration from "@/public/svg/NotificationIllustration"
import { BsTwitter } from "react-icons/bs"

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser()
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id)

  useEffect(() => {
    mutateCurrentUser()
  }, [mutateCurrentUser])

  if (fetchedNotifications.length === 0) {
    return (
      <div className="w-full flex flex-col justify-center items-center pt-8">
        <div className="mb-2">
          <NotificationIllustration width="100" height="100" />
        </div>
        <div>
          <p className="text-md font-medium">
            Nenhuma notificação ainda.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div key={notification.id} className="flex flex-row items-center gap-4 p-6 border-bottom">
          <div className="text-xl text-black">
            <BsTwitter />
          </div>
          <div>
            <p className="text-md text-black">
              {notification.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotificationsFeed