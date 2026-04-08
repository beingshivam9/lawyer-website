"use client"

import AboutSection from "./AboutSection"

export default function AboutWrapper({ bio }: { bio: string }) {
  return (
    <div className="relative z-50">
      <AboutSection bio={bio} />
    </div>
  )
}