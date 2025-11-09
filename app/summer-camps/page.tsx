import Navigation from "@/components/navigation"

import styles from "./page.module.css"

const camps = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  focus: "STEM",
  title: "Princeton Science Program",
  organization: "Princeton University",
  location: "Princeton, NJ",
  originalCost: "$3,000",
  savings: "$600",
  walletPrice: "$2,400",
  enrolled: "156 enrolled",
}))

export default function SummerCampsPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.content}>
          <header className={styles.hero}>
            <div className={styles.heroHeadingGroup}>
              <span className={styles.eyebrow}>Summer Camps</span>
              <h1 className={styles.title}>Secure Your Spot at <br /> Elite Summer Programs</h1>
              <p className={styles.description}>
                Discover immersive summer experiences that help students build skills, explore interests,
                and connect with peers. Use Merit Wallet funding to make top-tier camps more affordable
                for your family.
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.statsItem}>
                <span className={styles.statsValue}>72%</span>
                <span className={styles.statsLabel}>Of high-achieving students can&apos;t afford camps</span>
              </div>
              <div className={styles.statsItem}>
                <span className={styles.statsValue}>$3,200</span>
                <span className={styles.statsLabel}>Average camp cost beyond reach for most families</span>
              </div>
            </div>
          </header>

          <section className={styles.solution}>
            <div className={styles.solutionCopy}>
              <span className={styles.eyebrow}>The Solution</span>
              <h2 className={styles.solutionTitle}>Turn Your Achievements Into Camp Funding</h2>
              <p className={styles.solutionDescription}>
                Every verified achievement adds real money to your Merit Wallet. Apply it toward camp tuition
                to offset costs by 20-40% and unlock experiences that accelerate your growth.
              </p>
              <div className={styles.solutionActions}>
                <button className={styles.primaryAction}>Start Earning Today</button>
                <button className={styles.secondaryAction}>Browse Camps</button>
              </div>
            </div>
            <div className={styles.solutionHighlight}>
              <h3>Merit Wallet Benefits</h3>
              <ul>
                <li>Automatic funding deposited for verified achievements</li>
                <li>Use rewards across curated summer programs nationwide</li>
                <li>Track savings and remaining balances in real time</li>
              </ul>
            </div>
          </section>

          <div className={styles.cardGrid}>
            {camps.map((camp) => (
              <article className={styles.card} key={camp.id}>
                <span className={styles.cardTag}>{camp.focus}</span>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{camp.title}</h3>
                  <span className={styles.cardOrganization}>{camp.organization}</span>
                  <span className={styles.cardLocation}>{camp.location}</span>
                </div>
                <div className={styles.cardPricing}>
                  <span className={styles.cardOriginalCost}>{camp.originalCost} original cost</span>
                  <div className={styles.cardSavings}>
                    <span>Save {camp.savings}</span>
                    <span>with Merit Wallet</span>
                  </div>
                  <span className={styles.cardWalletPrice}>Pay only {camp.walletPrice}</span>
                </div>
                <footer className={styles.cardFooter}>
                  <span>{camp.enrolled}</span>
                  <button className={styles.cardButton}>Use Merit Wallet</button>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}