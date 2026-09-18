import { useEffect, useState } from 'react'

/**
 * Whether scroll-reveal animations can actually run here.
 *
 * Every reveal on this page starts at opacity 0 and is brought in by an
 * animation frame. If frames never arrive — a throttled renderer, a
 * backgrounded tab that is never focused, a browser that blocks WebGL/rAF —
 * the page would stay blank forever. So: assume frames work, and if the
 * first one has not landed shortly after mount, drop the animations and
 * render the content plainly. A portfolio must never hide its own text.
 */
export function useAnimationsUsable(timeoutMs = 1200) {
  const [usable, setUsable] = useState(true)

  useEffect(() => {
    let fired = false
    const frame = requestAnimationFrame(() => {
      fired = true
    })
    const timer = window.setTimeout(() => {
      if (!fired) setUsable(false)
    }, timeoutMs)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [timeoutMs])

  return usable
}
