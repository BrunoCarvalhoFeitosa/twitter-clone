"use client"
import { useRouter } from "next/router"
import { DataUserProps } from "@/@types/typings"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"

const Header: React.FC<DataUserProps> = ({ user }) => {
  const router = useRouter()

  return (
    <div className="p-4 border-bottom h-[60px]">
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
        <div>
          <h3 className="truncate w-[98%] md:w-full text-[20px] font-bold p-0 m-0">
            {user.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header