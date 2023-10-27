"use client"
import Form from "@/components/Feed/Form"
import PostFeed from "@/components/Feed/Posts/PostFeed"

const MiddleHomeContent = () => {
  return (
    <div className="flex flex-1 flex-col h-full overflow-y-auto scrollbar-hide py-[15px] px-[20px] border-feed border-indigo-500">
      <div className="p-4 border-bottom">
        <h3 className="text-[20px] font-bold p-0 m-0">
          Home
        </h3>
      </div>
      <Form placeholder="Tweet algo que está acontecendo..." />
      <PostFeed />
    </div>
  )
}

export default MiddleHomeContent