"use client"

import { useState } from "react"

export default function AboutSection({ bio }: { bio: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Fallback for empty bio
  if (!bio) return null;

  const isLongText = bio.length > 120
  const displayContent = isExpanded ? bio : bio.slice(0, 120) + (isLongText ? "..." : "")

  return (
    <section className="p-4 mt-6 relative z-50">
      <h2 className="font-bold text-lg border-b pb-2 text-[#0B1C2C]">About Me</h2>

      <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
        {displayContent}
      </p>

      {/* Only show button if text is actually long enough to expand */}
      {isLongText && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault(); // Prevent any parent link/action
            setIsExpanded(!isExpanded);
          }}
          className="mt-3 bg-yellow-500 px-3 py-1 rounded text-black text-sm font-medium shadow active:scale-95 transition-transform"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </section>
  )
}