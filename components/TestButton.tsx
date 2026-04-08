"use client"

export default function TestButton() {
  return (
    <div className="p-4">
      <button
        onClick={() => alert("Click working")}
        className="bg-green-500 px-4 py-2 rounded text-white"
      >
        Test Click
      </button>
    </div>
  )
}