"use client"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={() => alert("WORKING")
}
        className="bg-yellow-400 text-black px-6 py-3 rounded"
      >
        Test Click
      </button>
    </div>
  )
}