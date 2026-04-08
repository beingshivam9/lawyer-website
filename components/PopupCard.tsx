"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export default function PopupCard({
  children,
  title,
  text,
  images,
}: {
  children: React.ReactNode
  title: string
  text: string
  images: string[]
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock scroll when popup open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  const sliderImages = images || []

  // Auto slide
  useEffect(() => {
    if (!open || sliderImages.length === 0) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [open, sliderImages.length])

  return (
    <>
      {/* CLICKABLE CARD */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full text-left cursor-pointer"
      >
        {children}
      </button>

      {/* POPUP */}
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 px-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative z-[100000] bg-white rounded-xl border border-gray-200 max-w-md w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE SLIDER */}
              <div className="relative w-full h-48 overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                    width: `${sliderImages.length * 100}%`,
                  }}
                >
                  {sliderImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
                </div>

                {/* LEFT BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrent((prev) =>
                      prev === 0 ? sliderImages.length - 1 : prev - 1
                    )
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-2 py-1 rounded"
                >
                  ‹
                </button>

                {/* RIGHT BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrent((prev) => (prev + 1) % sliderImages.length)
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-2 py-1 rounded"
                >
                  ›
                </button>

                {/* DOTS */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {sliderImages.map((_, i) => (
                    <div
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrent(i)
                      }}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                        current === i
                          ? "bg-yellow-400 scale-110"
                          : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-black bg-white overflow-y-auto">
                <h2 className="text-xl font-bold">{title}</h2>

                <p className="mt-3 text-sm text-gray-700">{text}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                  }}
                  className="mt-5 bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 rounded text-black font-semibold w-full shadow-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}