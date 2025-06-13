import HeroSection from "@/app/components/hero-section"
import ProblemSolutionSection from "./components/problem-solution-section"
import HowItWorksSection from "./components/how-it-works-section"
import CTASection from "./components/cta-section"

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  )
}
