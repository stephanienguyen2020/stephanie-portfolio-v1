"use client"

import { motion } from "framer-motion"

export default function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-t-transparent border-primary/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-t-transparent border-primary/60"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Center dot with glow */}
        <motion.div
          className="h-16 w-16 rounded-full bg-primary/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary blur-md" />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="absolute top-full mt-8 text-center text-sm font-medium text-white/80"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

