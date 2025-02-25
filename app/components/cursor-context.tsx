"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface CursorContextType {
  isHovered: boolean
  setIsHovered: (value: boolean) => void
  hoveredElement: HTMLElement | null
  setHoveredElement: (element: HTMLElement | null) => void
  elementSize: { width: number; height: number }
  setElementSize: (size: { width: number; height: number }) => void
}

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
  hoveredElement: null,
  setHoveredElement: () => {},
  elementSize: { width: 20, height: 20 },
  setElementSize: () => {},
})

export function useCursor() {
  return useContext(CursorContext)
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null)
  const [elementSize, setElementSize] = useState({ width: 20, height: 20 })

  return (
    <CursorContext.Provider
      value={{
        isHovered,
        setIsHovered,
        hoveredElement,
        setHoveredElement,
        elementSize,
        setElementSize,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

