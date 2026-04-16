import AnimatedSection from "@/components/Animated"
import ConsultButton from "@/components/ConsultButton"
import ConsultationPopup from "@/components/ConsultationPopup"
import AboutSection from "@/components/AboutSection"
import PopupCard from "@/components/PopupCard"
import { getLawyer } from '@/lib/queries'
import { getPracticeAreas } from '@/lib/queries'


import { Home as HomeIcon, Scale, User, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"


export default async function Home() {
  const lawyer = await getLawyer()
  const practiceAreas = await getPracticeAreas()


  const legalImages = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    "https://images.unsplash.com/photo-1555374018-13a8994ab246",
    "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  ]

  return (
    <main className="bg-[#0B1C2C] min-h-screen text-[#0B1C2C] overflow-x-hidden relative">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg text-white">{lawyer?.name}</h1>
          <p className="text-xs text-gray-300">{lawyer?.title}</p>
        </div>
        <div className="text-2xl text-white"></div>
      </div>

      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 text-center">
        <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-1 rounded-full"></div>

        <h1 className="text-lg md:text-xl text-white leading-tight tracking-wide whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ fontFamily: 'Playfair Display, serif' }}>
          Adv Avinash S Ovhal & Associates
        </h1>

        <p className="text-[10px] md:text-xs text-gray-300 tracking-wider mt-0.5">
          EXPERIENCED ATTORNEY
        </p>
      </div>
<AnimatedSection>
      {/* HERO */}
      <div className="relative w-full bg-[#0B1C2C] pt-11 md:pt-0 aspect-[16/9] md:aspect-[16/7] overflow-hidden">

        <img
          src="/hero.jpg"
          className="w-full h-full object-contain md:object-cover"
        />

        <div className="absolute inset-0 bg-black/2"></div>

       <div className="absolute inset-0 flex items-center justify-center md:items-center items-end pt-10 md:pb-0 text-center z-10 text-white">
         <div className="w-full md:w-1/2 translate-x-6 md:translate-x-0 flex flex-col justify-center h-full relative items-end md:items-center text-right md:text-center pr-17 md:pr-0">
<AnimatedSection>
            <h2
              className="text-xl md:text-3xl text-white tracking-wide mt-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)'
              }}
            >
              Trusted Legal Expertise
            </h2>
</AnimatedSection>

            <p className="text-sm md:text-lg mt-2">
              {lawyer?.experience}
            </p>

           

          </div>
        </div>
      </div>
</AnimatedSection>

      {/* WHITE SECTION */}
      <div className="bg-[#F5F5F5] pt-6">
<div className="flex justify-center mt-4 mb-8 relative z-20">  <ConsultButton>
    <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-2 rounded-full text-black font-semibold shadow-lg hover:scale-105 transition">
      Book a Consultation
    </button>
  </ConsultButton>
</div>
<AnimatedSection>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-3 px-4 mt-4 relative z-10 items-stretch">

         {/* PRACTICE */}
<PopupCard
  title="Practice Areas"
  text={`Adv. Avinash S. Ovhal & Associates provides comprehensive legal services across a wide range of practice areas, ensuring reliable guidance and strong representation.

Our services include Criminal Law, Family Matters, RERA and Society Cases, Consumer Disputes, Divorce and Custody Cases, Bail and Anticipatory Bail, and Legal Documentation such as Affidavits, Agreements, and Notary Work.

We also handle High Court, District, Sessions, and JMFC Court matters, along with select international cases including criminal and immigration matters in the USA.

With a focus on practical solutions, client satisfaction, and professional excellence, we are committed to protecting your rights and delivering effective legal support.`}

            
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
            
          >
            <div className="bg-gradient-to-b from-[#112B44] to-[#0B1C2C] text-white p-4 rounded-xl text-center shadow-lg hover:scale-105 transition h-[160px] flex flex-col items-center justify-start gap-2 pt-3">
              <User className="mx-auto text-yellow-400 mb-2" size={24} />
              <p className="text-sm font-semibold">About Me</p>
              <p className="text-[10px] text-gray-400 mt-1">
                Learn more about my background
              </p>
            </div>
          </PopupCard>

        </div>
</AnimatedSection>

        {/* ABOUT */}
        <AboutSection bio={lawyer?.bio || ""} />
<AnimatedSection>
{/* SERVICES LIST */}
{practiceAreas?.length > 0 && (
  <div className="px-4 mt-4 pb-8">
    
    <h2 className="font-bold text-lg border-b pb-2 text-[#0B1C2C] mt-6">
  Services
</h2>

  <ul className="mt-4 mb-12 list-disc pl-5 text-sm text-gray-700 space-y-1">
      {practiceAreas.map((s: any, i: number) => (
        <li key={i}>{s.title}</li>
      ))}
    </ul>

  </div>
)}
</AnimatedSection>

      </div>

{/* CONTACT SECTION */}

<div className="px-4 mt-8 pb-24">

  {/* HEADING */}
  <h2 className="font-bold text-lg border-b pb-2 text-[#0B1C2C]">
    Contact
  </h2>

  {/* INFO CARDS */}
  <div className="mt-4 space-y-3">

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

  {/* MAP */}
  <div className="mt-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7048633405966!2d73.01430357384415!3d19.03272258216294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3919599f0bf%3A0xe9ec685b1be20252!2sJoyous%20cafe!5e0!3m2!1sen!2sin!4v1776166424645!5m2!1sen!2sin"
      className="w-full h-60 rounded-lg border"
      loading="lazy"
    ></iframe>
  </div>

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

        {/* CONTACT */}
        <Link href="/contact" className="flex flex-col items-center text-gray-400 hover:text-yellow-400 transition">
          <Phone size={20} />
          <span className="text-[10px] mt-1">Contact</span>
        </Link>

      </div>


    </main>
  )
}