"use client"

import { useEffect, useState } from "react"
import { motion, type Variants, useMotionValue, useSpring } from "framer-motion"
import { useCursor } from "@/app/components/cursor-context"

export default function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isHovered, hoveredElement, elementSize } = useCursor()
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [cursorSize, setCursorSize] = useState({
    width: 50,
    height: 50,
  })
  const [isMouseMoved, setIsMouseMoved] = useState(false)

  useEffect(() => {
    if (hoveredElement) {
      const { width, height } = hoveredElement.getBoundingClientRect()
      setCursorSize({ width: width * 1.2, height: height * 1.1 })
    } else {
      setCursorSize({ width: elementSize.width, height: elementSize.height })
    }
  }, [hoveredElement, elementSize])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsTouchDevice(false)
      setIsMouseMoved(true)
    }

    function handleTouchStart() {
      window.removeEventListener("mousemove", handleMouseMove)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchstart", handleTouchStart)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchstart", handleTouchStart)
      setIsMouseMoved(false)
    }
  }, [])

  // Update the spring configuration for smoother, faster movement
  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 }

  // Update the variants for faster transitions
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: isMouseMoved ? 1 : 0,
      scale: 1,
      width: cursorSize.width ? cursorSize.width : 50,
      height: cursorSize.height ? cursorSize.height : 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.1,
        opacity: {
          duration: 0.1,
        },
      },
    },
  }

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const halfCursorWidth = isHovered ? cursorSize.width / 2 : 8
      const halfCursorHeight = isHovered ? cursorSize.height / 2 : 8

      if (isHovered && hoveredElement) {
        const rect = hoveredElement.getBoundingClientRect()
        cursorX.set(rect.left + rect.width / 2 - halfCursorWidth)
        cursorY.set(rect.top + rect.height / 2 - halfCursorHeight)
      } else {
        cursorX.set(e.clientX - halfCursorWidth)
        cursorY.set(e.clientY - halfCursorHeight)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("click", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("click", moveCursor)
    }
  }, [isHovered, cursorSize, hoveredElement, cursorX, cursorY])

  return (
    <motion.div
      // Update the className to remove mix-blend-difference and adjust appearance
      className={`fixed top-0 left-0 w-10 h-10 z-[100] rounded-full bg-gray-300 mix-blend-difference pointer-events-none ${
        !isTouchDevice ? "block" : "hidden"
      }`}
      initial="hidden"
      animate={isMouseMoved ? "hover" : "hidden"}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={variants}
    />
  )
}

