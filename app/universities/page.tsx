import Link from "next/link"
import Navigation from "@/components/navigation"
import styles from "./page.module.css"

const steps = [
  {
    title: "Step 1: Build Your Merit Wallet",
    description:
      "Add and verify your achievements—academics, sports, volunteering. Each adds $10-$500 to your wallet.",
  },
  {
    title: "Step 2: Browse Universities",
    description: "Explore partner universities and see which ones match your profile and interests.",
  },
  {
    title: "Step 3: Get Matched",
    description: "Universities see your verified achievements and can offer you scholarships directly.",
  },
]

const highlights = [
  {
    title: "Turn Merit Into Money",
    description:
      "Your verified achievements directly translate to scholarship dollars at partner universities.",
    stat: "Up to $50,000",
  },
  {
    title: "Stand Out to Top Schools",
    description: "Get noticed by universities actively looking for students with your achievements.",
    stat: "50+ Partner Universities",
  },
  {
    title: "Track Your Progress",
    description: "See which universities are viewing your profile and get real-time scholarship alerts.",
    stat: "95% Match Rate",
  },
]

const universities = [
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
  {
    name: "Stanford University",
    scholarshipRange: "$1,000 - $3,000",
    matchPotential: "High Match Potential",
    matches: "342 matched",
    wallet: "$500 + wallet",
  },
]

export default function UniversitiesPage() {
  const delays = [styles.delay100, styles.delay200, styles.delay300]

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={`${styles.container} ${styles.heroContent}`}>
            {/* <span className={`${styles.sectionBadge} ${styles.fadeInUp} ${styles.delay100}`}>
              From Summer Camp to Scholarships
            </span> */}
            <h1 className={`${styles.heroTitle} ${styles.fadeInUp} ${styles.delay200}`}>
            From Summer Camp 
              <span className={styles.heroHighlight}>to Scholarships</span>
            </h1>
            <p className={`${styles.heroSubtitle} ${styles.fadeInUp} ${styles.delay300}`}>
            Camp experience + verified achievements = stronger university profile. Opens doors to bigger scholarship offers

            </p>
            <div className={`${styles.heroActions} ${styles.fadeInUp} ${styles.delay400}`}>
              <Link href="/merit-opportunities" className={styles.primaryCta}>
                Start Earning Today
              </Link>
              <Link href="#connect" className={styles.secondaryCta}>
                Browse Universities
              </Link>
            </div>
           
          </div>
        </section>

        <section id="connect" className={`${styles.section} ${styles.stepsSection}`}>
          <div className={styles.container}>
            <header className={`${styles.sectionHeader} ${styles.fadeInUp} ${styles.delay100}`}>
              <h2 className={styles.sectionTitle}>How to Connect with Universities</h2>
              <p className={styles.sectionSubtitle}>
                Your achievements are your currency. Here's how to turn them into opportunities.
              </p>
            </header>
            <ol className={styles.stepsList}>
              {steps.map((step, index) => (
                <li key={step.title} className={`${styles.stepCard} ${styles.fadeInUp} ${delays[index]}`}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${styles.section} ${styles.loveSection}`}>
          <div className={styles.container}>
            <div className={`${styles.loveCard} ${styles.fadeInUp} ${styles.delay100}`}>
              <header className={`${styles.sectionHeader} ${styles.delay200}`}>
                <h2 className={styles.sectionTitle}>Why Students Love ONORIQ</h2>
                <p className={styles.sectionSubtitle}>
                  Track your momentum, stay visible to top schools, and convert your merit into meaningful offers.
                </p>
              </header>
              <div className={styles.featuresGrid}>
                {highlights.map((highlight, index) => (
                  <article key={highlight.title} className={`${styles.featureCard} ${styles.fadeInUp} ${delays[index]}`}>
                    <h3 className={styles.featureTitle}>{highlight.title}</h3>
                    <p className={styles.featureDescription}>{highlight.description}</p>
                    <span className={styles.featureStat}>{highlight.stat}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.universitiesSection}`}>
          <div className={styles.container}>
            <header className={`${styles.sectionHeader} ${styles.fadeInUp} ${styles.delay100}`}>
              <h2 className={styles.sectionTitle}>Featured Partner Universities</h2>
              <p className={styles.sectionSubtitle}>
                Preview scholarship-ready matches curated from your merit wallet. Explore programs tailored to
                your achievements.
              </p>
            </header>

            <div className={styles.universityGrid}>
              {universities.map((university, index) => (
                <article
                  key={`${university.name}-${index}`}
                  className={`${styles.universityCard} ${styles.fadeInUp} ${
                    delays[index % delays.length]
                  }`}
                >
                  <div>
                    <h3 className={styles.universityName}>{university.name}</h3>
                    <div className={styles.universityMeta}>
                      <span className={styles.metaLabel}>Scholarship Range</span>
                      <span className={styles.metaValue}>{university.scholarshipRange}</span>
                    </div>
                    <p className={styles.matchPotential}>&lt;{university.matchPotential}&gt;</p>
                    <div className={styles.matchSummary}>
                      <span>{university.matches}</span>
                      <span>{university.wallet}</span>
                    </div>
                  </div>
                  <div className={styles.cardDivider} />
                  <Link href="#" className={styles.cardButton}>
                    View Programs
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

