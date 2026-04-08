import { getPracticeAreas } from "@/lib/queries"
import { Scale, User, Briefcase } from "lucide-react"
import PopupCard from "@/components/PopupCard"

export default async function ServicesPage() {
  const services = await getPracticeAreas()

  // 🔥 PREMIUM DEFAULT SERVICES
  const defaultServices = [
    {
      title: "Criminal Law",
      description: "Expert defense in criminal cases",
      details: `
We provide comprehensive legal defense for criminal matters including bail applications, trial representation, and appeals.

Our approach is strategic, detail-oriented, and focused on protecting your rights at every stage of the legal process. Whether it’s white-collar crime or serious allegations, we ensure strong courtroom advocacy and proper legal guidance.

We believe in quick response, confidentiality, and aggressive defense strategies to secure the best possible outcome for our clients.
      `,
      images: ["/images/services/criminal1.jpg", "/images/services/criminal2.jpg"],
    },
    {
      title: "Family Law",
      description: "Divorce, custody & settlements",
      details: `
Handling sensitive family matters including divorce, child custody, maintenance, and alimony.

We ensure a balanced approach combining legal expertise with emotional understanding. Our goal is to resolve disputes efficiently while protecting your interests and dignity.

We also assist in mediation and settlement to avoid prolonged litigation wherever possible.
      `,
      images: ["/images/services/family1.jpg", "/images/services/family2.jpg"],
    },
    {
      title: "Corporate & Business Law",
      description: "Legal support for businesses",
      details: `
We provide end-to-end legal solutions for startups, SMEs, and corporations.

From company formation to contracts, compliance, and dispute resolution — we ensure your business operates legally and efficiently.

Our services include drafting agreements, handling legal risks, and advising on business growth strategies.
      `,
      images: ["/images/services/business1.jpg", "/images/services/business2.jpg"],
    },
    {
      title: "Property Law",
      description: "Land disputes & documentation",
      details: `
Expert assistance in property disputes, ownership issues, and documentation verification.

We help clients with property registration, title checks, and litigation related to land and real estate.

Our goal is to ensure secure transactions and protect your property rights legally.
      `,
      images: ["/images/services/property1.jpg", "/images/services/property2.jpg"],
    },
    {
      title: "Civil Litigation",
      description: "Court representation in disputes",
      details: `
Representation in civil cases including recovery suits, contract disputes, and injunction matters.

We provide strong courtroom representation and strategic legal planning to achieve favorable outcomes.

Our team ensures timely filings, strong arguments, and effective legal execution.
      `,
      images: ["/images/services/civil1.jpg", "/images/services/civil2.jpg"],
    },
    {
      title: "Legal Documentation",
      description: "Agreements & legal drafting",
      details: `
Professional drafting of legal documents including agreements, notices, affidavits, and contracts.

We ensure every document is legally sound, clear, and protects your interests.

Proper documentation reduces future disputes and strengthens your legal position.
      `,
      images: ["/images/services/docs1.jpg", "/images/services/docs2.jpg"],
    },
    {
      title: "Consumer Cases",
      description: "Protection against unfair trade",
      details: `
We represent clients in consumer disputes related to defective products, poor services, and unfair practices.

Our aim is to ensure justice and compensation through consumer courts.

We handle complaints, filings, and full case representation.
      `,
      images: ["/images/services/consumer1.jpg", "/images/services/consumer2.jpg"],
    },
    {
      title: "Cyber Law",
      description: "Online fraud & digital crimes",
      details: `
Legal support for cybercrime cases including fraud, identity theft, and online harassment.

We assist in filing complaints, handling investigations, and representing clients in court.

In the digital age, protecting your online rights is crucial — we ensure strong legal backing.
      `,
      images: ["/images/services/cyber1.jpg", "/images/services/cyber2.jpg"],
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

        {/* SERVICES */}
        <div className="mt-6 space-y-4">

          {data.map((s: any, i: number) => (
            <PopupCard
              key={i}
              title={s.title}
              text={s.details || s.description}
              images={s.images}
            >
              <div className="flex items-center justify-between bg-gradient-to-r from-[#0B1C2C] to-[#112B44] text-white rounded-xl px-4 py-3 shadow-md hover:scale-[1.02] transition">

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
            </PopupCard>
          ))}

        </div>

      </section>

    </main>
  )
}