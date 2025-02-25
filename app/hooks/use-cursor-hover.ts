"use client"

import { useCursor } from "@/app/components/cursor-context"
import { useEffect, useRef } from "react"

export function useCursorHover() {
  const { setIsHovered, setHoveredElement, setElementSize } = useCursor()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const handleMouseEnter = () => {
      setIsHovered(true)
      setHoveredElement(element)
      const { width, height } = element.getBoundingClientRect()
      setElementSize({ width, height })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setHoveredElement(null)
      setElementSize({ width: 20, height: 20 })
    }

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [setIsHovered, setHoveredElement, setElementSize])

  return ref
}

