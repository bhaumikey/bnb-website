import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Contact Us - Bulls & Bears Finance Club",
  description: "Get in touch with Bulls & Bears Finance Club of PDEU. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="container px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}

