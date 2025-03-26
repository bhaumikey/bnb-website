import EventsHero from "@/components/events/events-hero"
import UpcomingEventsSection from "@/components/events/upcoming-events-section"
import PastEventsSection from "@/components/events/past-events-section"
import EventGallerySection from "@/components/events/event-gallery-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Events - Bulls & Bears Finance Club",
  description: "Explore past and upcoming events organized by Bulls & Bears Finance Club of PDEU",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EventsHero />
      <UpcomingEventsSection />
      <PastEventsSection />
      <EventGallerySection />
      <Footer />
    </main>
  )
}

