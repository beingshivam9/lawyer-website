"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
  e.preventDefault()

  const formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("message", message)

  await fetch("https://formsubmit.co/advavinashovhalandassociates@gmail.com", {
    method: "POST",
    body: formData,
  })

  alert("Message sent successfully ✅")

  // clear form
  setName("")
  setEmail("")
  setMessage("")
}

  return (
    <main className="bg-[#F5F5F5] min-h-screen pb-20">

      {/* HEADER */}
      <div className="bg-[#0B1C2C] text-white text-center py-6">
        <h1 className="text-2xl font-semibold">Contact</h1>
      </div>

      {/* INFO */}
      <div className="px-4 mt-6 space-y-4">

       <a
  href="tel:+918692003685"
  className="flex items-center bg-white p-4 rounded-lg shadow-sm border hover:scale-[1.02] transition"
>
  <Phone className="text-yellow-500 mr-3" />
  <div>
    <p className="text-sm font-semibold text-black">Call Us</p>
    <p className="text-xs text-black">+91 86920 03685</p>
  </div>
</a>

         <a
  href="mailto:advavinashovhalandassociates@gmail.com"
  className="flex items-center bg-white p-4 rounded-lg shadow-sm border hover:scale-[1.02] transition"
>
  <Mail className="text-yellow-500 mr-3" />
  <div>
    <p className="text-sm font-semibold text-black">Email</p>
    <p className="text-xs text-black">avinashovhal89@gmail.com</p>
<p className="text-xs text-black">advavinashovhalandassociates@gmail.com</p>
  </div>
</a>


        <a
  href="https://maps.app.goo.gl/b8BwobuxAW8hWrww5"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center bg-white p-4 rounded-lg shadow-sm border hover:scale-[1.02] transition"
>
  <MapPin className="text-yellow-500 mr-3" />
  <div>
    <p className="text-sm font-semibold text-black">Location</p>
    <p className="text-xs text-black">Shop No. C-20, First Floor, Amrita Sadan CHS., Plot No. 13 & 14, Sector-20, Opp. Nerul Railway Station, Nerul (West), Navi Mumbai 400 706.</p>
  </div>
</a>

      </div>

      {/* GOOGLE MAP */}
       <div className="mt-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7048633405966!2d73.01430357384415!3d19.03272258216294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3919599f0bf%3A0xe9ec685b1be20252!2sJoyous%20cafe!5e0!3m2!1sen!2sin!4v1776166424645!5m2!1sen!2sin"
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