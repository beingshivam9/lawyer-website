"use client"

export default function TestClick() {
  return (
    <button
      onClick={() => alert("🔥 CLICK WORKING")}
      className="bg-yellow-400 text-black px-6 py-3 rounded text-lg"
    >
      Test Click
    </button>
  )
}