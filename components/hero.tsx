import Link from "next/link"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Turn Your Achievements into University Offers</h1>
          <p className={styles.description}>
            Transform student achievements into scholarship opportunities. Build a powerful academic profile that opens
            doors to top universities.
          </p>
          <div className={styles.buttons}>
            <Link href="#build" className={styles.primaryBtn}>
              Start Building Your Merit Wallet
            </Link>
            <Link href="#how-it-works" className={styles.secondaryBtn}>
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
