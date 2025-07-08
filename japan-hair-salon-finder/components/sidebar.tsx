"use client"

import Link from "next/link"
import { BookOpen, MapPin, MessageCircle, Info, Heart } from "lucide-react"

const sidebarSections = [
  {
    title: "Featured Articles",
    href: "/articles",
    icon: BookOpen,
    description: "Beauty salon experiences × Japanese culture & tourism",
  },
  {
    title: "Travel Tips",
    href: "/tips",
    icon: MapPin,
    description: "Useful information for international travelers",
  },
  {
    title: "Meet Sara",
    href: "/sara",
    icon: MessageCircle,
    description: "Introduction to Sara, capabilities, and background",
  },
  {
    title: "What to Expect",
    href: "/expect",
    icon: Info,
    description: "Guide for first-time salon visits in Japan",
  },
  {
    title: "Our Vision",
    href: "/vision",
    icon: Heart,
    description: "Project mission, future vision, and values",
  },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:block sticky top-20 w-64 h-fit">
      <div className="bg-white rounded-2xl border border-[#EDE9F6] p-6 shadow-sm">
        <nav className="space-y-1">
          {sidebarSections.map((section, index) => {
            const Icon = section.icon
            const isLastBeforeVision = index === 3

            return (
              <div key={section.href}>
                <Link
                  href={section.href}
                  className="flex items-center gap-3 p-3 rounded-xl text-[#5E4B8B] hover:bg-[#EDE9F6] transition-colors duration-200 group"
                >
                  <Icon className="w-5 h-5 text-[#C8BFE7] group-hover:text-[#5E4B8B] transition-colors" />
                  <div>
                    <div className="font-medium text-sm">{section.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{section.description}</div>
                  </div>
                </Link>

                {isLastBeforeVision && <div className="my-4 border-t border-[#EDE9F6]" />}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
