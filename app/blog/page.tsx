import BlogHero from "@/components/blog/blog-hero"
import FeaturedPosts from "@/components/blog/featured-posts"
import RecentPosts from "@/components/blog/recent-posts"
import NewsletterSignup from "@/components/blog/newsletter-signup"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata = {
  title: "Blog - Bulls & Bears Finance Club",
  description: "Financial insights, market analysis, and event updates from Bulls & Bears Finance Club of PDEU",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <FeaturedPosts />
      <RecentPosts />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

