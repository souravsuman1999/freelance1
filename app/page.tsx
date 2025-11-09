import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import OpportunityCards from "@/components/opportunity-cards"
import Features from "@/components/features"
import TrustedPartners from "@/components/trusted-partners"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <OpportunityCards />
        <Features />
        <TrustedPartners />
      </main>
    </>
  )
}
