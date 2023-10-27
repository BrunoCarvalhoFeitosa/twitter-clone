"use client"
import { useRouter } from "next/router"
import Link from "next/link"
import useCurrentUser from "@/hooks/useCurrentUser"
import SidebarItem from "@/components/Feed/SidebarItem"
import { signOut } from "next-auth/react"
import { BsTwitter } from "react-icons/bs"
import { TbHomeDot } from "react-icons/tb"
import { AiOutlineNotification } from "react-icons/ai"
import { LuUser2 } from "react-icons/lu"
import { RxExit } from "react-icons/rx"
import { FaFeather } from "react-icons/fa"

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser()
  const router = useRouter()

  const items = [
    {
      icon: TbHomeDot,
      label: "Home",
      href: "/feed",
      as:"/feed"
    },
    {
      icon: AiOutlineNotification,
      label: "Notificações",
      href: "/notifications",
      as: "/notifications",
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: LuUser2,
      label: "Perfil",
      href: `/users/${currentUser?.id}`,
      as: "/users/[userId]"
    }
  ]

  return (
    <div className="w-[18%] md:w-[10%] lg:w-[20%] h-full flex flex-col items-center lg:items-start p-[15px]">
      <div className="flex justify-center lg:justify-start mb-8 text-[30px] lg:text-[40px] text-[#1D9BF0]">
        <button
          type="button"
          className="flex outline-none cursor-pointer"
          onClick={() => router.push(`/feed`)}
        >
          <BsTwitter />
        </button>
      </div>
      <div className="flex flex-col gap-y-3 lg:w-full">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            alert={item.alert}
            auth={item.auth}
            href={item.href}
            as={item.as}
            icon={item.icon} 
            label={item.label}
          />
        ))}
      </div>
      {currentUser && (
        <div className="mt-3 lg:w-full">
          <div className="flex justify-center lg:justify-start hover:bg-[#E5E5E5] p-2 rounded-md cursor-pointer">
            <button
              className="flex justify-center lg:justify-start items-center lg:gap-x-3 outline-none cursor-pointer"
              onClick={() => signOut({
                callbackUrl: "/"
            })}
            >
              <div className="text-2xl">
                <RxExit />
              </div>
              <div className="hidden lg:block text-md font-medium">
                Sair
              </div>
            </button>
          </div>
          <div className="mt-4">
            <Link href="/feed" className="outline-none">
              <button
                type="button"
                className="p-2 flex justify-center items-center gap-x-2 w-[45px] h-[45px] lg:w-full lg:h-auto bg-[#1D9BF0] rounded-full font-semibold text-xl text-white"
              >
                <div className="hidden lg:block">
                  Tweet
                </div>
                <FaFeather className="block lg:hidden" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar