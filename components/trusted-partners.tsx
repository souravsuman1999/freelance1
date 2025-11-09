"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./trusted-partners.module.css"

const stats = [
  { count: 50, suffix: "+", label: "Partner Universities" },
  { count: 2, prefix: "$", suffix: "M+", label: "Scholarships Available" },
  { count: 35, suffix: "+", label: "Countries" },
]

const universities = [
  {
    name: "Yale University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-09%20at%202.15.19%E2%80%AFPM-EwTrpHE9d8lgAXABxcM6ASgxUTkwzp.png",
  },
  {
    name: "MIT",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-09%20at%202.13.45%E2%80%AFPM-Nvz9MdqAJlhEWOUiQ4R8JAyrpWuwIw.png",
  },
  {
    name: "Stanford University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-09%20at%202.14.17%E2%80%AFPM-J5iKQJCtTsajUm175ivIFmd6WinUKr.png",
  },
  {
    name: "Columbia University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-09%20at%202.15.47%E2%80%AFPM-MIuykAdB9ebFSZLoHffuUwYYGOUDwh.png",
  },
]

function Counter({ target, prefix = "", suffix = "", duration = 2000 }: any) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const currentTime = Date.now()
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(startValue + (target - startValue) * easeOutQuart)

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function TrustedPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.sectionSubheading}>Trusted Partnerships</h3>
          <h2 className={styles.sectionTitle}>Partner Universities</h2>
          <p className={styles.sectionSubtitle}>Join students connecting with world-leading institutions</p>
        </div>
        {/* </CHANGE> */}
    {/* Marquee Section */}
    <div className={styles.marqueeSection}>
          {/* <h3 className={styles.marqueeTitle}>Trusted by Leading Universities</h3> */}
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[...universities, ...universities, ...universities].map((university, index) => (
                <div key={index} className={styles.marqueeLogoBox}>
                  <img
                    src={university.logo || "/placeholder.svg"}
                    alt={university.name}
                    className={styles.marqueeUniversityLogo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
       

        {/* Stats Section */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>
                <Counter target={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  )
}
