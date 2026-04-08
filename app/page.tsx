import AboutSection from "@/components/AboutSection"
import PopupCard from "@/components/PopupCard"
import {
  getLawyer,
  getCases,
  getTestimonials,
} from '@/lib/queries'

import { Home as HomeIcon, Scale, User, Briefcase, Phone } from "lucide-react"

import Link from "next/link"
import AnimatedSection from "@/components/Animated"



export default async function Home() {
  const lawyer = await getLawyer()
  const cases = await getCases()
  const testimonials = await getTestimonials()
const legalImages = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  "https://images.unsplash.com/photo-1555374018-13a8994ab246",
  "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
]

  return (
    <main className="bg-[#0B1C2C] min-h-screen text-[#0B1C2C] overflow-x-hidden  relative">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg text-white">{lawyer?.name}</h1>
          <p className="text-xs text-gray-300">{lawyer?.title}</p>
        </div>
        <div className="text-2xl text-white">☰</div>
      </div>
<div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 text-center">

  {/* GOLD ACCENT LINE */}
  <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-1 rounded-full"></div>

  {/* NAME */}
  <h1 className="text-xl md:text-2xl text-white leading-tight tracking-wide"
      style={{ fontFamily: 'Playfair Display, serif' }}>
    Rajesh Sharma
  </h1>

  {/* SUBTITLE */}
  <p className="text-[10px] md:text-xs text-gray-300 tracking-wider mt-0.5">
    EXPERIENCED ATTORNEY
  </p>

  
</div>



      {/* HERO */}
	
      <div className="relative w-full bg-[#0B1C2C] aspect-[16/9] md:aspect-[16/7] overflow-hidden">

        {/* IMAGE */}
        <img
          src="/hero.jpg"
          className="w-full h-full object-contain md:object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXT (UPDATED — MOBILE FIX ONLY) */}
        <div className="
  absolute inset-0 
  flex items-center justify-center
  text-center
  z-10 text-white
">

  <div className="
    w-full md:w-1/2

    /* ONLY MOBILE SHIFT */
    translate-x-6 md:translate-x-0
  ">
<h2
  className="text-xl md:text-3xl text-white tracking-wide mt-6"
  style={{
    fontFamily: 'Playfair Display, serif',
    textShadow: '0 2px 10px rgba(0,0,0,0.6)'
  }}
>
  Trusted Legal Expertise
</h2>
   

    <p className="text-sm md:text-lg mt-2">
      {lawyer?.experience}
    </p>

    <a
  href="https://wa.me/918692003685"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-2 rounded text-black font-semibold shadow-lg"
>
  Book a Consultation
</a>

  </div>

</div>

      </div>


      {/* WHITE SECTION */}
      <div className="bg-[#F5F5F5] pt-6">

        {/* CARDS */}
	
        <div className="grid grid-cols-3 gap-3 px-4 mt-4 relative z-10 items-stretch">

  {/* PRACTICE */}
  <PopupCard
  title="Practice Areas"
  text="We handle criminal, family, and business law cases..."
  images={[
    "/images/practice/p1.jpg",
    "/images/practice/p2.jpg",
    "/images/practice/p3.jpg",
  ]}
>
    <div className="bg-gradient-to-b from-[#112B44] to-[#0B1C2C] text-white p-4 rounded-xl text-center shadow-lg hover:scale-105 transition h-[160px] flex flex-col items-center justify-start gap-2 pt-3">
      <Scale className="mx-auto text-yellow-400 mb-2" size={24} />
      <p className="text-sm font-semibold">Practice Areas</p>
      <p className="text-[10px] text-gray-400 mt-1">
        Criminal, Family, Business
      </p>
    </div>
  </PopupCard>

  {/* ABOUT */}
  <PopupCard
    title="About Me"
    text={lawyer?.bio || "Experienced lawyer"}
    image={legalImages[1]}
  >
    <div className="bg-gradient-to-b from-[#112B44] to-[#0B1C2C] text-white p-4 rounded-xl text-center shadow-lg hover:scale-105 transition h-[160px] flex flex-col items-center justify-start gap-2 pt-3">
      <User className="mx-auto text-yellow-400 mb-2" size={24} />
      <p className="text-sm font-semibold">About Me</p>
      <p className="text-[10px] text-gray-400 mt-1">
        Learn more about my background
      </p>
    </div>
  </PopupCard>

  {/* CASE */}
  <PopupCard
  title="Practice Areas"
  text="We handle criminal, family, and business law cases..."
  images={[
    "/images/cases/c1.jpg",
    "/images/cases/c2.jpg",
    "/images/cases/c3.jpg",
  ]}
>
    <div className="bg-gradient-to-b from-[#112B44] to-[#0B1C2C] text-white p-4 rounded-xl text-center shadow-lg hover:scale-105 transition h-[160px] flex flex-col items-center justify-start gap-2 pt-3">
      <Briefcase className="mx-auto text-yellow-400 mb-2" size={24} />
      <p className="text-sm font-semibold">Case Results</p>
      <p className="text-[10px] text-gray-400 mt-1">
        Successful outcomes & verdicts
      </p>
    </div>
  </PopupCard>

</div>


        {/* ABOUT */}
        <AboutSection bio={lawyer?.bio || ""} />

        {/* CASES */}
        <section className="p-4 mt-6">
  <h2 className="font-bold text-lg border-b pb-2">
    Recent Cases
  </h2>

  <div className="mt-4 grid grid-cols-2 gap-3">
    {cases?.map((c: any, index: number) => (
  <PopupCard
    key={c._id}
    title={c.title}
    text={c.result || "Case details not available"}
    image={legalImages[index % legalImages.length]}
  >
    <div
      className="
        bg-[#F5F1E8]
        rounded-lg
        border
        border-gray-300
        overflow-hidden
        flex
        justify-between
        items-center
      "
    >
      {/* LEFT CONTENT */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-sm text-black">
          {c.title}
        </h3>

        <div className="h-[1px] bg-gray-300 my-1 w-full"></div>

        <p className="text-xs text-gray-700">
          {c.result}
        </p>
      </div>

      {/* RIGHT ICON */}
      <div className="w-16 h-full flex items-center justify-center bg-[#EAE4D8]">
        {index % 2 === 0 ? (
          <Scale className="text-yellow-600 w-6 h-6" />
        ) : (
          <Briefcase className="text-yellow-600 w-6 h-6" />
        )}
      </div>
    </div>
  </PopupCard>
))}
  </div>
</section>

        {/* TESTIMONIALS */}
        {/* TESTIMONIALS */}
{/* TESTIMONIALS */}
<section className="p-4 pb-20 mt-6">
  <h2 className="font-bold text-lg border-b pb-2 text-[#0B1C2C]">
    Client Testimonials
  </h2>

  <div className="grid md:grid-cols-2 gap-4 mt-4">
    {testimonials?.length > 0 ? (
      testimonials.map((t: any, i: number) => (
        <div
          key={t._id}
          className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
        >
          {/* 🔥 AUTO BACKGROUND IMAGE */}
          <img
            src={legalImages[i % legalImages.length]}
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-20"
          />

          {/* CONTENT */}
          <div className="relative bg-white/80 backdrop-blur-md p-5">

            {/* Quote */}
            <p className="text-3xl text-gray-400 leading-none">“</p>

            {/* Review */}
            <p className="italic text-gray-700 text-sm leading-relaxed mt-2">
              {t?.review || "No review available"}
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-gray-300 my-4 w-3/4" />

            {/* Client */}
            <p className="text-right font-semibold text-gray-900 text-sm">
              — {t?.client || "Anonymous"}
            </p>

          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-sm mt-3">
        No testimonials added yet.
      </p>
    )}
  </div>
</section>
      </div>

      {/* BOTTOM NAVBAR */}
<div className="fixed bottom-0 left-0 w-full bg-[#0B1C2C] border-t border-gray-700 flex justify-around py-2 z-50">

  {/* HOME */}
  <div className="flex flex-col items-center text-yellow-400">
    <HomeIcon size={20} />
    <span className="text-[10px] mt-1">Home</span>
  </div>

  {/* SERVICES */}
  <Link href="/services" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
  <Scale size={20} />
  <span className="text-[10px] mt-1">Services</span>
</Link>

  {/* CASES */}
  <div className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
    <Briefcase size={20} />
    <span className="text-[10px] mt-1">Cases</span>
  </div>

  {/* CONTACT */}
  <div className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
    <Phone size={20} />
    <span className="text-[10px] mt-1">Contact</span>
  </div>

</div>

     </main>
  )
}