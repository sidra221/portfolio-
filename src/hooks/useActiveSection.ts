import { useState, useEffect } from 'react'
import { site } from '../content'

export function useActiveSection(defaultSection = 'about') {
  const [activeSection, setActiveSection] = useState(defaultSection)

  useEffect(() => {
    const elements = site.navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target.id) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
