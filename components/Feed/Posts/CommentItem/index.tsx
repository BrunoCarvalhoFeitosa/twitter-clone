"use client"
import { useCallback, useMemo } from "react"
import { useRouter } from "next/router"
import { formatDistanceToNowStrict } from "date-fns"
import Avatar from "@/components/Feed/Avatar"
import { WiTime4 } from "react-icons/wi"

interface CommentItemProps {
  data: Record<string, any>
}

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const router = useRouter()

  const goToUser = useCallback((event: any) => {
    event.stopPropagation()

    router.push(`/users/${data?.user.id}`)
  }, [router, data?.user.id])

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null
    }

    return formatDistanceToNowStrict(new Date(data?.createdAt))
  }, [data?.createdAt])  

  return (
    <div className="p-5 border-bottom transition hover:bg-[#F5F5F5] cursor-pointer">
      <div className="flex flex-row items-center gap-3">
        <Avatar userId={data?.user?.id} />
        <div className="flex-1">
          <div className="flex flex-row items-center gap-2">
            <div onClick={goToUser}>
              <h4 className="text-sm font-semibold hover:underline">
                {data?.user.name}
              </h4>
            </div>
            <div onClick={goToUser}>
              <span className="hidden md:block text-sm font-medium text-neutral-500 hover:underline">
                @{data?.user.username}
              </span>
            </div>
            <div className="flex items-center gap-x-[2px] text-neutral-500">
              <WiTime4 className="text-md" />
              <span className="hidden md:block text-sm font-medium">
                {createdAt}
              </span>
            </div>
          </div>
          <div className="mt-2 lg:w-[80%]">
            <p className="text-sm font-medium">
              {data?.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem