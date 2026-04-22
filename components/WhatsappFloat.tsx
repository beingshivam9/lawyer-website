"use client"

export default function WhatsappFloat() {
  const phone = "919372527687" // change if needed

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-20 right-4 z-[9999]
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white px-4 py-2 rounded-full
        shadow-lg hover:scale-105 transition
      "
    >
      {/* ICON */}
      <span className="text-lg">💬</span>

      {/* TEXT */}
      <span className="text-sm font-medium">
        Chat on WhatsApp
      </span>
    </a>
  )
}