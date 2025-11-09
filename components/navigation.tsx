"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./navigation.module.css"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>ONOR IQ</span>
        </div>

        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <div className={styles.actions}>
          <Link href="#login" className={styles.login}>
            Log In
          </Link>
          <Link href="#signup" className={styles.signup}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
