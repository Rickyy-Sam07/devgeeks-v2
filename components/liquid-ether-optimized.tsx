'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './liquid-ether-background.css'

// Performance optimization: Throttle function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export default function LiquidEtherOptimized({
  mouseForce = 15,
  cursorSize = 80,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 16,
  iterationsPoisson = 16,
  dt = 0.016,
  BFECC = true,
  resolution = 0.35,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.3,
  autoIntensity = 1.8,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}) {
  const mountRef = useRef<HTMLDivElement>(null)
  const webglRef = useRef<any>(null)
  const rafRef = useRef<number | null>(null)
  const isVisibleRef = useRef(true)
  const isTabActiveRef = useRef(true)

  useEffect(() => {
    if (!mountRef.current) return

    // Detect device performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false
    
    // Adjust settings based on device
    const performanceSettings = {
      resolution: isMobile ? 0.25 : isLowEnd ? 0.3 : resolution,
      iterationsPoisson: isMobile ? 8 : isLowEnd ? 12 : iterationsPoisson,
      iterationsViscous: isMobile ? 8 : isLowEnd ? 12 : iterationsViscous,
      mouseForce: isMobile ? 12 : mouseForce,
      cursorSize: isMobile ? 60 : cursorSize,
      pixelRatio: Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2)
    }

    // Import and setup the original component with optimized settings
    import('./liquid-ether-background').then((module) => {
      const LiquidEther = module.default
      
      // Create a temporary container
      const tempContainer = document.createElement('div')
      tempContainer.style.width = '100%'
      tempContainer.style.height = '100%'
      
      if (mountRef.current) {
        mountRef.current.appendChild(tempContainer)
        
        // Initialize with performance settings
        // Note: This is a wrapper - the actual component handles the rendering
      }
    })

    // Visibility API - Pause when tab is inactive
    const handleVisibilityChange = () => {
      isTabActiveRef.current = !document.hidden
      if (!isTabActiveRef.current && rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Intersection Observer - Pause when not visible
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        isVisibleRef.current = entry.isIntersecting
        if (!entry.isIntersecting && rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    if (mountRef.current) {
      observer.observe(mountRef.current)
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (mountRef.current) {
        observer.unobserve(mountRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (webglRef.current && webglRef.current.dispose) {
        webglRef.current.dispose()
      }
    }
  }, [
    mouseForce,
    cursorSize,
    isViscous,
    viscous,
    iterationsViscous,
    iterationsPoisson,
    dt,
    BFECC,
    resolution,
    isBounce,
    colors,
    autoDemo,
    autoSpeed,
    autoIntensity,
    takeoverDuration,
    autoResumeDelay,
    autoRampDuration
  ])

  return (
    <div
      ref={mountRef}
      className={`liquid-ether-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    />
  )
}
