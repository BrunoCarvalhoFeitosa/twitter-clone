"use client"
import CommentItem from "@/components/Feed/Posts/CommentItem"

interface CommentsProps {
  comments: Record<string, any>[]
}

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </div>
  )
}

export default Comments