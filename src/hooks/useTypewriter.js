import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Постепенно «печатает» текст. При reduced-motion показывает сразу весь текст.
export function useTypewriter(text, enabled = true, step = 6, delay = 16) {
  const instant = !enabled || prefersReducedMotion()
  const [len, setLen] = useState(instant ? text.length : 0)

  useEffect(() => {
    if (!enabled || prefersReducedMotion()) {
      setLen(text.length)
      return undefined
    }
    let i = 0
    setLen(0)
    const id = setInterval(() => {
      i += step
      setLen(Math.min(i, text.length))
      if (i >= text.length) clearInterval(id)
    }, delay)
    return () => clearInterval(id)
  }, [text, enabled, step, delay])

  return text.slice(0, len)
}
