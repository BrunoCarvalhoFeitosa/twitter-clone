import axios from "axios"
import { useCallback, useMemo } from "react"
import { toast } from "react-hot-toast"

import useCurrentUser from "@/hooks/useCurrentUser"
import useUser from "./useUser"

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser()
  const { mutate: mutateFetchedUser } = useUser(userId)

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || []

    return list.includes(userId)
  }, [currentUser, userId])

  const toggleFollow = useCallback(async () => {
    try {
      let request

      if (isFollowing) {
        request = () => axios.delete('/api/follow', { data: { userId } })
      } else {
        request = () => axios.post('/api/follow', { userId })
      }

      await request()
      mutateCurrentUser()
      mutateFetchedUser()

      toast.success('Sucesso')
    } catch (error) {
      toast.error('Algo deu errado, tente novamente')
    }
  }, [currentUser, isFollowing, userId, mutateCurrentUser, mutateFetchedUser])

  return {
    isFollowing,
    toggleFollow,
  }
}

export default useFollow