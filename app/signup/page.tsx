import Link from "next/link"

import Navigation from "@/components/navigation"

import styles from "../auth.module.css"

export default function SignupPage() {
  return (
    <>
      <Navigation />
      <main className={styles.authWrapper}>
        <section className={styles.authLayout}>
          <aside className={styles.narrative}>
            <span className={styles.badge}>Start your journey</span>
            <h1 className={styles.title}>Join the ONOR IQ community</h1>
            <p className={styles.subtitle}>
              Build a future-proof academic profile, discover opportunities tailored to your strengths, and stay
              organized every step of the way.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>◆</span>
                Personalized roadmap that matches your achievements with top-tier programs.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>◆</span>
                Smart timelines to manage applications, deadlines, and supporting documents.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>◆</span>
                Collaborative planning with advisors, counselors, and family members.
              </li>
            </ul>
            <div className={styles.infoCluster}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>①</span>
                <div>
                  Complete your profile to unlock curated opportunities across merit scholarships, summer camps, and
                  global universities.
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>②</span>
                <div>
                  Receive actionable insights powered by ONOR IQ advisors who understand selective admissions.
                </div>
              </div>
            </div>
          </aside>

          <section className={styles.card} aria-labelledby="signup-heading">
            <div className={styles.cardHeader}>
              <h2 id="signup-heading" className={styles.cardTitle}>
                Create your account
              </h2>
              <p className={styles.cardSubtitle}>
                Let&apos;s learn a little about you so we can tailor opportunities to your goals.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-first-name">
                  First name
                </label>
                <input
                  id="signup-first-name"
                  className={styles.input}
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Sasha"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-last-name">
                  Last name
                </label>
                <input
                  id="signup-last-name"
                  className={styles.input}
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Rivera"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-email">
                  Email
                </label>
                <input
                  id="signup-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-grade">
                  Current grade level
                </label>
                <select id="signup-grade" name="grade" className={styles.input} defaultValue="">
                  <option value="" disabled>
                    Select grade level
                  </option>
                  <option value="middle-school">Middle School (Grades 6-8)</option>
                  <option value="freshman">High School Freshman</option>
                  <option value="sophomore">High School Sophomore</option>
                  <option value="junior">High School Junior</option>
                  <option value="senior">High School Senior</option>
                  <option value="gap-year">Gap Year / Transfer</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="signup-password">
                  Password
                </label>
                <input
                  id="signup-password"
                  className={styles.input}
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <button type="submit" className={styles.primaryButton}>
                Create account
              </button>
            </form>

            <div className={styles.divider}>need a hand?</div>

            <Link href="/contact" className={styles.secondaryAction}>
              Talk with an enrollment advisor
            </Link>

            <p className={styles.helper}>
              Already registered?{" "}
              <Link href="/login" className={styles.helperLink}>
                Log in instead
              </Link>
            </p>

            <p className={styles.footnote}>
              We&apos;ll send onboarding emails with tips tailored for your journey. You can opt out anytime.
            </p>
          </section>
        </section>
      </main>
    </>
  )
}

