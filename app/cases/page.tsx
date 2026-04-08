import { getCases } from "@/lib/queries"
import { Scale } from "lucide-react"

export default async function CasesPage() {
  const cases = await getCases()

  return (
    <main className="bg-[#F5F5F5] min-h-screen pb-20">

      {/* HEADER */}
      <div className="bg-[#0B1C2C] text-white text-center py-6">
        <h1 className="text-2xl font-semibold">Cases</h1>
      </div>

      {/* BREADCRUMB */}
      <div className="px-4 py-2 text-sm text-gray-500">
        Home &gt; Cases
      </div>

      {/* TITLE */}
      <div className="px-4">
        <h2 className="text-xl font-bold text-[#0B1C2C]">
          Recent Cases
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Highlighted successful outcomes we have achieved for our clients.
        </p>
      </div>

      {/* CASE LIST */}
      <div className="mt-4 space-y-4 px-4">

        {cases?.map((c: any) => (
          <div
            key={c._id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >

            {/* GOLD TAG */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-semibold px-4 py-1 inline-block rounded-br-lg">
              {c.title}
            </div>

            {/* CONTENT */}
            <div className="p-4">

              <p className="text-sm text-gray-700 leading-relaxed">
                {c.description || c.result || c.outcome}
              </p>

              {/* BOTTOM */}
              <div className="flex items-center justify-between mt-4">

                {/* ICON */}
                <div className="text-yellow-600">
                  <Scale size={24} />
                </div>

                {/* RESULT BADGE */}
                <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded">
                  {c.outcome || "Successful Outcome"}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  )
}