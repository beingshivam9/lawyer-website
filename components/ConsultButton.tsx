"use client"

import { useState } from "react"
import ConsultationPopup from "./ConsultationPopup"

export default function ConsultButton({ children }: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        {children}
      </div>

      <ConsultationPopup open={open} setOpen={setOpen} />
    </>
  )
}