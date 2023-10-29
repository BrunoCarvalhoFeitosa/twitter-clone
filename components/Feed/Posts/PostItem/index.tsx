"use client"
import { useCallback, useMemo } from "react"
import { useRouter } from "next/router"
import { formatDistanceToNowStrict } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import useCurrentUser from "@/hooks/useCurrentUser"
import useLike from "@/hooks/useLike"
import Avatar from "@/components/Feed/Avatar"
import { WiTime4 } from "react-icons/wi"
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai"

interface PostItemProps {
  userId?: string
  data: Record<string, any>
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
  const router = useRouter()
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId })

  const goToUser = useCallback((event: any) => {
    event.stopPropagation()

    router.push(`/users/${data?.user.id}`)
  }, [router, data?.user?.id])

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`)
  }, [router, data?.id])

  const onLike = useCallback((event: any) => {
    event.stopPropagation()

    toggleLike()
  }, [toggleLike])

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null
    }

    return formatDistanceToNowStrict(new Date(data.createdAt), { locale: ptBR })
  }, [data?.createdAt])

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart
  
  return (
    <div
      onClick={goToPost}
      className="border-bottom p-5 cursor-pointer transition-all duration-300 hover:bg-[#F5F5F5]"
    >
      <div className="flex flex-row items-start gap-3">
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
          <div className="flex flex-row items-center mt-3 gap-10">
            <button
              className="flex flex-row items-center text-neutral-500 font-medium gap-2 transition outline-none hover:text-sky-500 cursor-pointer"
            >
              <div>
                <AiOutlineMessage className="text-[20px]" />
              </div>
              <div>
                <p>
                  {data?.comments.length ?? 0}
                </p>
              </div>
            </button>
            <button
              onClick={onLike}
              className="flex flex-row items-center text-neutral-500 font-medium gap-2 transition outline-none hover:text-red-500 cursor-pointer"
            >
              <div>
                <LikeIcon className="text-[20px]" color={hasLiked ? "red" : ""} />
              </div>
              <div>
                <p>
                  {data?.likedIds.length ?? 0}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem