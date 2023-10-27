"use client"
import { useRouter } from "next/router"
import { ClipLoader } from "react-spinners"
import usePost from "@/hooks/usePost"
import PostItem from "@/components/Feed/Posts/PostItem"
import Form from "@/components/Feed/Form"
import Comments from "@/components/Feed/Posts/Comments"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"

const MiddlePostContent = () => {
  const router = useRouter()
  const { postId } = router.query
  const { data: fetchedPost, isLoading } = usePost(postId as string)

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="light" size={80} />
      </div>
    )
  }

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
            Tweet
          </h3>
        </div>
      </div>
      <PostItem data={fetchedPost} />
      <Form postId={postId as string} isComment placeholder="Escreva sua resposta" />
      <Comments comments={fetchedPost?.comments} />
    </div>
  )
}

export default MiddlePostContent