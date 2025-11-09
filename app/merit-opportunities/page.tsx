import Navigation from "@/components/navigation"

import styles from "./page.module.css"

const opportunities = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  tag: "competition",
  title: "National STEM Competition",
  organization: "NASA",
  description:
    "Design innovative solutions for space exploration challenges. Winners receive scholarships and mentorship opportunities.",
  location: "Houston, TX",
  dates: "Dec 15 - Dec 17, 2025",
  deadline: "Nov 15, 2025",
  focus: "Academic Excellence",
  ages: "Ages 14-18 Science",
}))

export default function MeritOpportunitiesPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <div className={styles.heroHeadingGroup}>
                <span className={styles.eyebrow}>Merit Opportunities</span>
                <h1 className={styles.title}>Build the Profile Top Universities Are Looking For</h1>
              </div>
              <p className={styles.description}>
                Discover opportunities that strengthen your college application—curated for students
                aiming for Harvard, MIT, Stanford, and beyond.
              </p>
              <div className={styles.heroActions}>
                <button className={styles.ctaButton}>Find best opportunities</button>
              </div>
            </div>
            <div className={styles.heroHighlight}>
              <h2 className={styles.highlightTitle}>Browse Active Opportunities</h2>
              <p className={styles.highlightCopy}>
                Filter by grade level, interests, and location to find opportunities that interest
                you. Sign up to see personalized matches!
              </p>
            </div>
          </div>
          <div className={styles.cardGrid}>
            {opportunities.map((opportunity) => (
              <article className={styles.card} key={opportunity.id}>
                <span className={styles.cardTag}>{opportunity.tag}</span>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{opportunity.title}</h3>
                  <span className={styles.cardOrganization}>{opportunity.organization}</span>
                </div>
                <p className={styles.cardDescription}>{opportunity.description}</p>
                <div className={styles.cardLocation}>
                  <div className={styles.cardCity}>{opportunity.location}</div>
                  <div className={styles.cardDates}>{opportunity.dates}</div>
                </div>
                <div className={styles.cardMeta}>
                  <span>Deadline: {opportunity.deadline}</span>
                  <span>{opportunity.focus}</span>
                  <span>{opportunity.ages}</span>
                </div>
                <button className={styles.cardButton}>Sign up</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

