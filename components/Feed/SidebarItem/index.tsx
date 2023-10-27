"use client"
import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { IconType } from "react-icons"
import useCurrentUser from "@/hooks/useCurrentUser"
import { BsDot } from "react-icons/bs"

interface SidebarItemProps {
  label: string
  icon: IconType
  href?: string
  as?: string
  onClick?: () => void
  auth?: boolean
  alert?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, as, auth, onClick, alert }) => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick()
    }

    if (auth && !currentUser) {
    } else if (href) {
      router.push(href)
    }
  }, [router, href, auth, onClick, currentUser])

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-row justify-center lg:justify-start items-center w-[45px] h-[45px] lg:w-full lg:h-auto ${as == router.pathname ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "bg-[#FFF]"} hover:bg-[#E5E5E5] p-2 rounded-full lg:rounded-md cursor-pointer`}
    >
      <div className="relative flex items-center gap-x-3">
        {alert ? <BsDot className="absolute -top-9 -left-5 text-[#0EA5E9]" size={80} /> : null}
        <Icon size={25} color={`${as == router.pathname ? "#FFF" : "#000"}`} />
        <p className={`hidden lg:block text-md ${as == router.pathname ? "font-bold text-[#FFF]": "font-medium text-black"}`}>
          {label}
        </p>
      </div>
    </div>
  )
}

export default SidebarItem