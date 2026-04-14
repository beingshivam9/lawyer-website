"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home as HomeIcon, Scale, Phone } from "lucide-react"

export default function BottomNav() {
  const pathname = usePathname()

  const navItem = (href: string, icon: any, label: string) => {
    const isActive = pathname === href

    return (
      <Link
        href={href}
        className={`flex flex-col items-center ${
          isActive ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        {icon}
        <span className="text-[10px] mt-1">{label}</span>
      </Link>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0B1C2C] border-t border-gray-700 flex justify-around py-2 z-50">

      {navItem("/", <HomeIcon size={20} />, "Home")}
      {navItem("/services", <Scale size={20} />, "Services")}
      {navItem("/contact", <Phone size={20} />, "Contact")}

    </div>
  )
}