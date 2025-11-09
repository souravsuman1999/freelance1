import Navigation from "@/components/navigation"
import HowItWorksFlow from "@/components/how-it-works-flow"

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main>
        <HowItWorksFlow />
        <section className="second-fold">
          <div className="second-fold__container">
            <h2 className="second-fold__title">Ready to Start Building?</h2>
            <p className="second-fold__subtitle">
              Join thousands of students raising scholarships through verified achievements.
            </p>
            <div className="second-fold__actions">
              <a className="second-fold__cta second-fold__cta--primary" href="/merit-wallet">
                Build Your Merit Wallet
              </a>
              <a className="second-fold__cta" href="/summer-camps">
                Browse Summer Camps
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
