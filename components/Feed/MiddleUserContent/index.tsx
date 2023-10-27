"use client"
import { useRouter } from "next/router"
import Header from "@/components/User/Header"
import Hero from "@/components/User/Hero"
import Bio from "@/components/User/Bio"
import PostFeed from "@/components/Feed/Posts/PostFeed"
import useUser from "@/hooks/useUser"

const MiddleUserContent = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data: fetchedUser = [] } = useUser(userId as string)

  return (
    <div className="flex flex-1 flex-col h-full overflow-y-auto scrollbar-hide py-[15px] px-[20px] border-feed border-indigo-500">
      <Header user={fetchedUser} />
      <Hero user={fetchedUser} />
      <Bio user={fetchedUser} />
      <PostFeed userId={fetchedUser.id as string} />
    </div>
  )
}

export default MiddleUserContent