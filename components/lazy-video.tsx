"use client"

import { useState, useEffect, useRef } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  className?: string
}

export default function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!videoRef.current || !isMounted) return

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before video enters viewport
      }
    )

    observer.observe(videoRef.current)

    return () => observer.disconnect()
  }, [isMounted])

  useEffect(() => {
    if (isInView && videoRef.current && !isLoaded) {
      videoRef.current.load()
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  return (
    <video
      ref={videoRef}
      className={className}
      {...props}
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}