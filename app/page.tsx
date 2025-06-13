import HeroSection from "@/app/components/hero-section"
import ProblemSolutionSection from "./components/problem-solution-section"
import HowItWorksSection from "./components/how-it-works-section"
import CTASection from "./components/cta-section"

export default function LandingPage() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="problem-solution">
        <ProblemSolutionSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="cta">
        <CTASection />
      </div>
    </main>
  )
}
