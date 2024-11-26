'use client'

import React, { useEffect, useState } from 'react'

export default function DustCloud() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      setIsMoving(true)

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div 
      className={`
        fixed z-10 pointer-events-none w-36 h-36 rounded-full
        bg-gradient-to-r from-emerald-100 to-emerald-200
        opacity-50 transition-all duration-300 ease-out
        ${isMoving ? 'scale-125 blur-xl' : 'scale-100 blur-md'}
      `}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  )
}