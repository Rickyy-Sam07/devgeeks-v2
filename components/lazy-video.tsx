"use client"

import { useState, useEffect } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  className?: string
}

export default function LazyVideo({ src, className, ...props }: LazyVideoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={className} />
  }

  return (
    <video
      className={className}
      src={src}
      {...props}
    />
  )
}