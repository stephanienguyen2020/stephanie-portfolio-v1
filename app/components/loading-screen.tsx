"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Code. Break. Build. Repeat.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Typewriter effect
    const typeTimer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(typeTimer);
    };
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
