import { useCallback, useMemo } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import useCurrentUser from "@/hooks/useCurrentUser"
import usePost from "@/hooks/usePost"
import usePosts from "@/hooks/usePosts"

const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
  const { data: currentUser } = useCurrentUser()
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId)
  const { mutate: mutateFetchedPosts } = usePosts(userId)

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || []

    return list.includes(currentUser?.id)
  }, [currentUser?.id, fetchedPost?.likedIds])

  const toggleLike = useCallback(async () => {
    try {
      let request

      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } })
      } else {
        request = () => axios.post("/api/like", { postId })
      }

      await request()
      mutateFetchedPost()
      mutateFetchedPosts()
      toast.success("Sucesso")
    } catch (error) {
      console.error("Error: ", error)
      toast.error("Erro ao curtir o tweet.")
    }
  }, [currentUser, hasLiked, postId, mutateFetchedPost, mutateFetchedPosts])

  return { hasLiked, toggleLike }
}

export default useLike