"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const text = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`

    const url = `https://wa.me/918692003685?text=${encodeURIComponent(text)}`

    window.open(url, "_blank")
  }

  return (
    <main className="bg-[#F5F5F5] min-h-screen pb-20">

      {/* HEADER */}
      <div className="bg-[#0B1C2C] text-white text-center py-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
      </div>

      {/* INFO */}
      <div className="px-4 mt-6 space-y-4">

        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
          <Phone className="text-yellow-500 mr-3" />
          <div>
            <p className="text-sm font-semibold text-black">Call Us</p>
            <p className="text-xs text-black">+91 86920 03685</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
          <Mail className="text-yellow-500 mr-3" />
          <div>
            <p className="text-sm font-semibold text-black">Email</p>
            <p className="text-xs text-black">lawyer@email.com</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
          <MapPin className="text-yellow-500 mr-3" />
          <div>
            <p className="text-sm font-semibold text-black">Location</p>
            <p className="text-xs text-black">Mumbai, India</p>
          </div>
        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="px-4 mt-6">
        <iframe
          src="https://www.google.com/maps?q=Mumbai%20High%20Court&output=embed"
          className="w-full h-60 rounded-lg border"
          loading="lazy"
        ></iframe>
      </div>

      {/* FORM */}
      <div className="px-4 mt-6">

        <h2 className="text-lg font-bold text-black mb-3">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded border text-sm text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border text-sm text-black"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded border text-sm text-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded font-semibold shadow hover:scale-[1.02] transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  )
}