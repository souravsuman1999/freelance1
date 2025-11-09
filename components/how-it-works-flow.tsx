"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./how-it-works-flow.module.css"

const steps = [
  {
    title: "Achievement",
    description: "Students showcase their academic accomplishments, competitions, and extracurricular activities",
  },
  {
    title: "Verification",
    description: "Schools and educators verify all achievements to ensure authenticity and credibility",
  },
  {
    title: "Merit Wallet",
    description: "Build a comprehensive digital portfolio of all your verified achievements and credentials",
  },
  {
    title: "Opportunities",
    description: "Get matched with scholarships, programs, and universities based on your verified merit",
  },
]

export default function HowItWorksFlow() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSteps((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>How ONOR IQ Works</h1>
          <p className={styles.subtitle}>Four simple steps to transform your achievements into opportunities</p>
        </div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              className={`${styles.stepWrapper} ${visibleSteps.includes(index) ? styles.visible : ""}`}
            >
              <div className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                  <div className={styles.connectorArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5L12 19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
