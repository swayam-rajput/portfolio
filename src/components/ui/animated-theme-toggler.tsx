"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {  SunIcon } from "@/components/ui/sun"
import {  MoonIcon } from "@/components/ui/moon"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}
const ThemeCircle = ({className}:{className:string})=>{
  return (
    <span className={cn("size-4 rounded-full flex", className)}></span>
  )
}
export const AnimatedThemeToggler = ({
  className,
  duration = 600,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark")
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark")
      })
    })

    await transition.ready

    document.documentElement.animate(
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [isDark, setTheme, duration])

  if (!mounted) {
    return (
      <button
        className={cn(className, "opacity-0")}
        {...props}
      >
        <SunIcon />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {
        isDark ? <ThemeCircle className="bg-[#9e9e9e]"/> : <ThemeCircle className="bg-[#2b2b2b]"/>
      }
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
