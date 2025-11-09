"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import styles from "./navigation.module.css"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return

    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
        setIsMobileDropdownOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        setIsMobileDropdownOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleToggleDropdown = () => setIsDropdownOpen((prev) => !prev)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev
      if (!next) {
        setIsMobileDropdownOpen(false)
      }
      return next
    })
  }
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileDropdownOpen(false)
  }
  const toggleMobileDropdown = () => setIsMobileDropdownOpen((prev) => !prev)
  const closeDesktopDropdown = () => setIsDropdownOpen(false)

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>ONOR IQ</span>
        </div>

        <button
          type="button"
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.mobileToggleActive : ""}`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.menu}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/how-it-works" className={styles.navLink}>
            How It Works
          </Link>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.dropdownToggle} ${
                isDropdownOpen ? styles.dropdownToggleActive : ""
              }`}
              onClick={handleToggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Opportunities
              <span className={styles.caret} aria-hidden="true" />
            </button>
            <div
              className={`${styles.dropdownMenu} ${
                isDropdownOpen ? styles.dropdownMenuOpen : ""
              }`}
              role="menu"
            >
              <Link href="/merit-opportunities" role="menuitem" onClick={closeDesktopDropdown}>
                Merit Opportunities
              </Link>
              <Link href="/summer-camps" role="menuitem" onClick={closeDesktopDropdown}>
                Summer Camps
              </Link>
              <Link href="/universities" role="menuitem" onClick={closeDesktopDropdown}>
                Universities
              </Link>
            </div>
          </div>
          <Link href="/faq" className={styles.navLink}>
            FAQ
          </Link>
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

      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={styles.mobileMenuContent}>
          <Link href="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/how-it-works" onClick={closeMobileMenu}>
            How It Works
          </Link>
          <div
            className={`${styles.mobileDropdown} ${
              isMobileDropdownOpen ? styles.mobileDropdownOpen : ""
            }`}
          >
            <button
              type="button"
              className={styles.mobileDropdownToggle}
              onClick={toggleMobileDropdown}
              aria-expanded={isMobileDropdownOpen}
            >
              Opportunities
              <span className={styles.mobileCaret} aria-hidden="true" />
            </button>
            <div className={styles.mobileDropdownPanel}>
              <Link href="/merit-opportunities" onClick={closeMobileMenu}>
                Merit Opportunities
              </Link>
              <Link href="/summer-camps" onClick={closeMobileMenu}>
                Summer Camps
              </Link>
              <Link href="/universities" onClick={closeMobileMenu}>
                Universities
              </Link>
            </div>
          </div>
          <Link href="/faq" onClick={closeMobileMenu}>
            FAQ
          </Link>
        </div>
        <div className={styles.mobileActions}>
          <Link href="#login" className={styles.login} onClick={closeMobileMenu}>
            Log In
          </Link>
          <Link href="#signup" className={styles.signup} onClick={closeMobileMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
