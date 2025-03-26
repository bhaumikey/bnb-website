import BazaarHero from "@/components/bazaar/bazaar-hero"
import BazaarGallery from "@/components/bazaar/bazaar-gallery"
import BazaarInfo from "@/components/bazaar/bazaar-info"
import BazaarRegistration from "@/components/bazaar/bazaar-registration"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Bazaar Event - Bulls & Bears Finance Club",
  description: "Join us for the annual Bazaar event by Bulls & Bears Finance Club of PDEU",
}

export default function BazaarPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BazaarHero />
      <BazaarInfo />
      <BazaarGallery />
      <BazaarRegistration />
      <Footer />
    </main>
  )
}

