"use client"

import { createPortal } from "react-dom"

export default function ConsultationPopup({ open, setOpen }: any) {
  if (!open) return null

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    await fetch("https://formsubmit.co/ajax/avinashovhal89@gmail.com", {
      method: "POST",
      body: formData,
    })

    setTimeout(() => {
  setOpen(false)
}, 1000)

    setOpen(false) // close popup
  }

  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center bg-black/70">

      <div className="bg-white text-black rounded-xl p-6 w-[90%] max-w-md relative shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 text-gray-600 text-lg"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold mb-4">
          Book Consultation
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded text-sm text-black"
          />

          <input
            type="text"
            name="contact"
            placeholder="Phone / Email"
            required
            className="w-full p-3 border rounded text-sm text-black"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded text-sm text-black"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:scale-[1.02] transition"
          >
            Send Request
          </button>

        </form>

      </div>
    </div>,
    document.body
  )
}