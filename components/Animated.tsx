"use client"

import { motion } from "framer-motion"

export default function AnimatedSection({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,                         // 🔥 slower (premium feel)
        ease: [0.25, 0.1, 0.25, 1],          // cinematic easing
      }}
      viewport={{ once: true, margin: "-100px" }} // triggers slightly earlier
    >
      {children}
    </motion.div>
  )
}