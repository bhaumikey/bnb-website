import TeamHero from "@/components/team/team-hero"
import CoreTeamSection from "@/components/team/core-team-section"
import DepartmentHeadsSection from "@/components/team/department-heads-section"
import SubcommitteeSection from "@/components/team/subcommittee-section"
import JoinTeamSection from "@/components/team/join-team-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Our Team - Bulls & Bears Finance Club",
  description: "Meet the dedicated team behind Bulls & Bears Finance Club of PDEU",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TeamHero />
      <CoreTeamSection />
      <DepartmentHeadsSection />
      <SubcommitteeSection />
      <JoinTeamSection />
      <Footer />
    </main>
  )
}

