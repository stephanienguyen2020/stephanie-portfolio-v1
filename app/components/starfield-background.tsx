"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useMousePosition } from "@/app/lib/mouse"

export default function StarfieldBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create stars with a natural distribution (denser in center)
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.3, // Larger for better visibility
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    })

    const starsVertices = []
    for (let i = 0; i < 8000; i++) {
      const r = Math.random() * 2000 // Spread stars outwards
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi) - 500 // Shifted back for better depth

      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Camera position
    camera.position.z = 600

    // Animation
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Parallax Effect with Smooth Interpolation
      const targetRotationX = (mousePosition.y - window.innerHeight / 2) * 0.00002
      const targetRotationY = (mousePosition.x - window.innerWidth / 2) * 0.00002

      stars.rotation.x += (targetRotationX - stars.rotation.x) * 0.1
      stars.rotation.y += (targetRotationY - stars.rotation.y) * 0.1

      // Subtle continuous movement
      stars.rotation.z += 0.00005

      // Twinkling Effect (Random small opacity changes)
      starsMaterial.opacity = 0.8 + Math.sin(Date.now() * 0.0005) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [mousePosition])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background: "radial-gradient(circle at 50% 50%, #121212, #000000)",
      }}
    />
  )
}

