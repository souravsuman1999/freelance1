"use client"

import { useState } from "react"
import styles from "./faq.module.css"

const faqs = [
  {
    question: "Is Onor IQ free for students?",
    answer:
      "Yes! Onor IQ is 100% free for students. There are no hidden fees or charges. We believe every student should have access to showcase their achievements and connect with opportunities.",
  },
  {
    question: "How do I verify my achievements?",
    answer:
      "After you upload your achievements, your school counselor or administrator will review and verify them. This ensures authenticity and adds credibility to your profile. The verification process typically takes 1-3 business days.",
  },
  {
    question: "When can I redeem my merit wallet?",
    answer:
      "You can redeem your accumulated merit rewards when you receive an acceptance from a partner university. The rewards can be applied toward tuition, fees, or other educational expenses, depending on the university's program.",
  },
  {
    question: "What types of achievements can I add?",
    answer:
      "You can add academic achievements (GPA, test scores, honor roll), awards and recognitions, extracurricular activities, leadership positions, community service hours, research projects, publications, and any other documented accomplishments that demonstrate your potential.",
  },
  {
    question: "How do schools get invited to Onor IQ?",
    answer:
      "Schools can request an invitation through our platform. We carefully review each application to maintain the quality and integrity of our verification network. Once approved, schools receive access to our verification dashboard and training materials.",
  },
  {
    question: "Can universities create custom scholarships?",
    answer:
      "Yes! Partner universities can create micro-scholarships with custom criteria such as GPA requirements, specific achievements, geographic preferences, or areas of study. This helps you efficiently target and reward students who align with your institution's values.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQs</h2>
          <p className={styles.subtitle}>Got Questions? We've Got Answers</p>
          <p className={styles.description}>
            Clear explanations about earning merit, verification, and unlocking opportunities
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ""}`}>
              <button className={styles.question} onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={styles.answer}>
                <div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
