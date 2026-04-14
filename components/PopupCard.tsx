"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export default function PopupCard({
  children,
  title,
  text,
}: {
  children: React.ReactNode
  title: string
  text: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

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
              className="relative z-[100000] bg-white rounded-xl border border-gray-200 max-w-md w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CONTENT */}
              <div className="p-5 text-black bg-white overflow-y-auto">

                <h2 className="text-xl font-bold">{title}</h2>

                <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">
                  {text}
                </p>

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