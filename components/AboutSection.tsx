"use client"

export default function AboutSection({ bio }: { bio: string }) {
  return (
    <section className="px-4 mt-6">
      
      {/* TITLE */}
      <h2 className="font-bold text-lg border-b pb-2 text-[#0B1C2C]">
        About Me
      </h2>

      {/* FULL TEXT (NO TRUNCATION) */}
      <p className="text-gray-700 text-sm leading-relaxed mt-4 whitespace-pre-line">
        {bio || "Experienced lawyer with strong legal background."}
      </p>

    </section>
  )
}