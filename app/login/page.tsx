import Link from "next/link"

import Navigation from "@/components/navigation"

import styles from "../auth.module.css"

export default function LoginPage() {
  return (
    <>
      <Navigation />
      <main className={styles.authWrapper}>
        <section className={styles.authLayout}>
          <aside className={styles.narrative}>
            <span className={styles.badge}>Returning scholars</span>
            <h1 className={styles.title}>Welcome back to ONOR IQ</h1>
            <p className={styles.subtitle}>
              Sign in to continue building a standout profile that turns your achievements into powerful opportunities.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                Real-time progress tracking across merit and summer programs.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                Updated recommendations curated for your academic journey.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                Collaborative workspace to align mentors, parents, and counselors.
              </li>
            </ul>
            <div className={styles.infoCluster}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>★</span>
                <div>
                  <strong className={styles.highlight}>Stay ahead of deadlines</strong> with weekly insights crafted by
                  our admissions experts.
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>∞</span>
                <div>
                  Keep your achievements synced across every ONOR IQ experience&mdash;from discovery to scholarship
                  readiness.
                </div>
              </div>
            </div>
          </aside>

          <section className={styles.card} aria-labelledby="login-heading">
            <div className={styles.cardHeader}>
              <h2 id="login-heading" className={styles.cardTitle}>
                Log in to your account
              </h2>
              <p className={styles.cardSubtitle}>We&apos;re glad you&apos;re back. Let&apos;s pick up where you left off.</p>
            </div>

            <form className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="login-email">
                  Email
                </label>
                <input
                  id="login-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="login-password">
                  Password
                </label>
                <input
                  id="login-password"
                  className={styles.input}
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className={styles.formExtras}>
                <label htmlFor="remember-me" className={styles.checkboxRow}>
                  <input id="remember-me" type="checkbox" className={styles.checkbox} name="remember" />
                  Remember me on this device
                </label>
                <Link href="/forgot-password" className={styles.link}>
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className={styles.primaryButton}>
                Continue to dashboard
              </button>
            </form>

            <div className={styles.divider}>or continue with</div>

            <button type="button" className={styles.secondaryAction}>
              Sign in with Google
            </button>

            <p className={styles.helper}>
              New to ONOR IQ?{" "}
              <Link href="/signup" className={styles.helperLink}>
                Create an account
              </Link>
            </p>

            <p className={styles.footnote}>
              By continuing you agree to our{" "}
              <Link href="/terms" className={styles.link}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </section>
      </main>
    </>
  )
}

