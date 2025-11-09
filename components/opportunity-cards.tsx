import styles from "./opportunity-cards.module.css"

const opportunities = [
  {
    title: "National STEM Competition",
    organization: "NASA",
    description:
      "Design innovative solutions for space exploration challenges. Winners receive scholarships and mentorship opportunities.",
    location: "Houston, TX",
    dates: "Dec 15 - Dec 17, 2025",
    deadline: "Nov 15, 2025",
    category: "Academic Excellence",
    ageRange: "Ages 14-18",
    subject: "Science",
    image: "/students-working-on-stem-project.jpg",
  },
  {
    title: "Global Innovation Challenge",
    organization: "MIT",
    description:
      "Develop technological solutions to real-world problems. Top teams receive mentorship from industry leaders and scholarships.",
    location: "Boston, MA",
    dates: "Jan 10 - Jan 12, 2026",
    deadline: "Dec 1, 2025",
    category: "Innovation",
    ageRange: "Ages 15-18",
    subject: "Technology",
    image: "/students-innovation-technology-lab.jpg",
  },
  {
    title: "International Math Olympiad",
    organization: "IMO Foundation",
    description:
      "Compete with the world's brightest math students. Medalists gain recognition and scholarship opportunities from top universities.",
    location: "Virtual & Regional",
    dates: "Feb 20 - Feb 22, 2026",
    deadline: "Jan 5, 2026",
    category: "Academic Excellence",
    ageRange: "Ages 13-18",
    subject: "Mathematics",
    image: "/students-math-competition-problem-solving.jpg",
  },
]

export default function OpportunityCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Opportunities</h2>
          <p className={styles.sectionSubtitle}>Discover competitions and programs that match your achievements</p>
        </div>
        {/* </CHANGE> */}

        <div className={styles.grid}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={opportunity.image || "/placeholder.svg"} alt={opportunity.title} className={styles.image} />
                <div className={styles.badge}>{opportunity.category}</div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{opportunity.title}</h3>
                <p className={styles.organization}>{opportunity.organization}</p>

                <p className={styles.description}>{opportunity.description}</p>

                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Location:</span>
                    <span className={styles.detailValue}>{opportunity.location}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Dates:</span>
                    <span className={styles.detailValue}>{opportunity.dates}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Deadline:</span>
                    <span className={styles.detailValue}>{opportunity.deadline}</span>
                  </div>
                </div>

                <div className={styles.tags}>
                  <span className={styles.tag}>{opportunity.ageRange}</span>
                  <span className={styles.tag}>{opportunity.subject}</span>
                </div>

                <button className={styles.signupButton}>Sign up</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.exploreButton}>Explore Opportunities</button>
        </div>
      </div>
    </section>
  )
}
