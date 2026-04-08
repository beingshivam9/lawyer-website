"use client"

export default function TestCards() {
  return (
    <div className="bg-white text-black p-4 mt-4 relative z-[999]">

      <h2 className="text-lg font-bold mb-3">Test Click Area</h2>

      <div className="grid grid-cols-3 gap-3">

        <div
          onClick={() => alert("Practice clicked")}
          className="bg-gray-200 p-4 rounded text-center active:scale-95"
        >
          Practice
        </div>

        <div
          onClick={() => alert("About clicked")}
          className="bg-gray-200 p-4 rounded text-center active:scale-95"
        >
          About
        </div>

        <div
          onClick={() => alert("Case clicked")}
          className="bg-gray-200 p-4 rounded text-center active:scale-95"
        >
          Case
        </div>

      </div>

    </div>
  )
}