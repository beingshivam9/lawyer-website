import ConsultButton from "@/components/ConsultButton"
import { getPracticeAreas } from "@/lib/queries"
import { Scale, User, Briefcase } from "lucide-react"

export default async function ServicesPage() {
  const services = await getPracticeAreas()

  const defaultServices = [
    {
      title: "Criminal Law",
      description: "Expert defense in criminal cases",
    },
    {
      title: "Family Law",
      description: "Divorce, custody & settlements",
    },
    {
      title: "Corporate & Business Law",
      description: "Legal support for businesses",
    },
    {
      title: "Property Law",
      description: "Land disputes & documentation",
    },
    {
      title: "Civil Litigation",
      description: "Court representation in disputes",
    },
    {
      title: "Legal Documentation",
      description: "Agreements & legal drafting",
    },
    {
      title: "Consumer Cases",
      description: "Protection against unfair trade",
    },
    {
      title: "Cyber Law",
      description: "Online fraud & digital crimes",
    },
  ]

  const data = services?.length ? services : defaultServices

  return (
    <main className="bg-[#F5F5F5] min-h-screen pb-20">

      {/* TOP BAR */}
      <div className="bg-[#0B1C2C] text-white px-4 py-4 text-center">
        <h1 className="text-xl font-semibold">Services</h1>
      </div>

      {/* CONTENT */}
      <section className="px-4 py-6">

        <h2 className="text-lg font-bold text-center text-[#0B1C2C]">
          Providing Comprehensive Legal Services
        </h2>

        <p className="text-center text-sm text-gray-600 mt-1">
          Tailored to Your Needs
        </p>

        {/* SERVICES LIST */}
        <div className="mt-6 space-y-4">

          {data.map((s: any, i: number) => (
            <ConsultButton key={i} service={s.title}>

              <div className="flex items-center justify-between bg-gradient-to-r from-[#0B1C2C] to-[#112B44] text-white rounded-xl px-4 py-3 shadow-md hover:scale-[1.02] transition cursor-pointer">

                {/* ICON */}
                <div className="text-yellow-400 mr-3">
                  {i % 3 === 0 && <Scale size={24} />}
                  {i % 3 === 1 && <User size={24} />}
                  {i % 3 === 2 && <Briefcase size={24} />}
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">
                    {s.title}
                  </h3>

                  <p className="text-xs text-gray-300 mt-1">
                    {s.description}
                  </p>
                </div>

                {/* ARROW */}
                <div className="text-yellow-400 ml-3 text-lg">
                  →
                </div>

              </div>

            </ConsultButton>
          ))}

        </div>

      </section>

    </main>
  )
}