import { notFound } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import BlogPost from "@/components/blog/blog-post"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CalendarDays, User, Tag, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import blog1 from "@/public/blog1.jpeg"
import blog2 from "@/public/blog2.webp"


// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Market Volatility: A Beginner's Guide",
    excerpt: "Learn how to navigate market fluctuations and make informed investment decisions during volatile periods.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">What is Market Volatility?</h2>
      <p class="text-lg leading-relaxed mb-6">Market volatility refers to the rate at which the price of assets increases or decreases. High volatility is characterized by rapid and significant price fluctuations, while low volatility indicates more stable and predictable price movements.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Why Does Volatility Matter?</h2>
      <p class="text-lg leading-relaxed mb-4">Volatility is important for several reasons:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">It affects investment risk and potential returns</li>
        <li class="text-lg">It influences trading strategies and portfolio management decisions</li>
        <li class="text-lg">It can create both opportunities and challenges for investors</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Common Causes of Market Volatility</h2>
      <p class="text-lg leading-relaxed mb-4">Several factors can trigger market volatility:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">Economic data releases and policy changes</li>
        <li class="text-lg">Geopolitical events and global crises</li>
        <li class="text-lg">Industry disruptions and technological changes</li>
        <li class="text-lg">Market sentiment and investor psychology</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Strategies for Navigating Volatile Markets</h2>
      <p class="text-lg leading-relaxed mb-4">Here are some approaches to consider during periods of high volatility:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-3">
        <li class="text-lg"><strong>Diversification:</strong> Spread investments across different asset classes to reduce risk.</li>
        <li class="text-lg"><strong>Dollar-Cost Averaging:</strong> Invest fixed amounts at regular intervals to smooth out the impact of volatility.</li>
        <li class="text-lg"><strong>Maintain a Long-Term Perspective:</strong> Focus on long-term goals rather than short-term fluctuations.</li>
        <li class="text-lg"><strong>Set Stop-Loss Orders:</strong> Establish predetermined exit points to limit potential losses.</li>
        <li class="text-lg"><strong>Consider Volatility ETFs:</strong> These specialized funds are designed to capitalize on market volatility.</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Psychological Aspects of Dealing with Volatility</h2>
      <p class="text-lg leading-relaxed mb-4">Managing emotions is crucial during volatile periods:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">Avoid panic selling during market downturns</li>
        <li class="text-lg">Don't chase performance during market rallies</li>
        <li class="text-lg">Maintain discipline and stick to your investment plan</li>
        <li class="text-lg">Use volatility as an opportunity to reassess your risk tolerance</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Conclusion</h2>
      <p class="text-lg leading-relaxed mb-6">Market volatility is an inherent part of investing. By understanding its causes and implementing appropriate strategies, investors can navigate volatile periods more effectively and potentially turn market turbulence into opportunity.</p>
    `,
    image: blog1,
    date: "March 31, 2025",
    author: "Vishva Gandhi",
    category: "Investment",
    tags: ["volatility", "risk management", "investment strategy"],
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Impact of Geopolitical Events on Global Markets",
    excerpt: "An analysis of how international conflicts and political developments affect financial markets worldwide.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Introduction to Geopolitics and Markets</h2>
      <p class="text-lg leading-relaxed mb-6">Geopolitical events—ranging from elections and policy changes to conflicts and trade disputes—can significantly impact financial markets around the world. Understanding these relationships is crucial for investors seeking to navigate the complex global financial landscape.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Historical Perspective: Major Geopolitical Shocks</h2>
      <p class="text-lg leading-relaxed mb-4">Looking at past events provides valuable insights:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">The 1973 Oil Crisis triggered by the OPEC embargo</li>
        <li class="text-lg">The fall of the Berlin Wall and the dissolution of the Soviet Union</li>
        <li class="text-lg">The 9/11 terrorist attacks</li>
        <li class="text-lg">The 2008 Global Financial Crisis</li>
        <li class="text-lg">Brexit and its ongoing implications</li>
        <li class="text-lg">The COVID-19 pandemic</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Transmission Mechanisms: How Geopolitics Affects Markets</h2>
      <p class="text-lg leading-relaxed mb-4">Geopolitical events influence markets through several channels:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-3">
        <li class="text-lg"><strong>Trade Flows:</strong> Tariffs, sanctions, and trade agreements directly impact import/export businesses and supply chains.</li>
        <li class="text-lg"><strong>Currency Valuations:</strong> Political instability often leads to currency depreciation in affected regions.</li>
        <li class="text-lg"><strong>Commodity Prices:</strong> Conflicts in resource-rich regions can disrupt supply and drive price volatility.</li>
        <li class="text-lg"><strong>Capital Flows:</strong> Investors may withdraw capital from regions perceived as risky, creating market pressure.</li>
        <li class="text-lg"><strong>Policy Responses:</strong> Central banks and governments may implement monetary or fiscal measures in response to geopolitical developments.</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Regional Impacts and Market Correlations</h2>
      <p class="text-lg leading-relaxed mb-4">Different regions and asset classes respond differently to geopolitical events:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">Developed markets typically experience less severe but more correlated reactions</li>
        <li class="text-lg">Emerging markets often face more pronounced volatility</li>
        <li class="text-lg">Safe-haven assets like gold, U.S. Treasuries, and the Swiss Franc tend to appreciate during crises</li>
        <li class="text-lg">Energy markets are particularly sensitive to events in oil-producing regions</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Investment Strategies for Geopolitical Uncertainty</h2>
      <p class="text-lg leading-relaxed mb-4">Investors can adopt several approaches to manage geopolitical risk:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li class="text-lg">Geographic diversification across regions with different risk profiles</li>
        <li class="text-lg">Sector allocation that considers geopolitical vulnerabilities</li>
        <li class="text-lg">Hedging strategies using derivatives or alternative assets</li>
        <li class="text-lg">Scenario planning for major potential geopolitical developments</li>
        <li class="text-lg">Maintaining liquidity to capitalize on market dislocations</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Conclusion: The Increasing Importance of Geopolitical Analysis</h2>
      <p class="text-lg leading-relaxed mb-6">As global markets become increasingly interconnected, geopolitical analysis is becoming an essential component of investment decision-making. Investors who develop a framework for understanding and responding to geopolitical events will be better positioned to protect their portfolios and identify opportunities amid uncertainty.</p>
    `,
    image: blog2,
    date: "March 31, 2025",
    author: "Kartik Akbari",
    category: "Global Finance",
    tags: ["geopolitics", "global markets", "risk analysis"],
    readTime: "10 min read"
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }

  return {
    title: `${post.title} | Bulls & Bears Insights`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Bulls & Bears Insights`,
      description: post.excerpt,
      images: [
        {
          url: post.image.src,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Bulls & Bears Insights`,
      description: post.excerpt,
      images: [{ url: post.image.src }],
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="container px-4 pt-28 pb-16 max-w-6xl">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.id}`, active: true },
          ]}
          //className="mb-8"
        />
        
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="h-96 w-full relative">
            <Image 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          
          {/* Article Header */}
          <div className="px-8 py-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="text-sm">By {post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none px-8 py-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article Footer */}
          <div className="px-8 py-6 border-t">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  ← Back to Blog
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
          {/* <RelatedPosts currentPostId={post.id} allPosts={blogPosts} /> */}
        </div>
      </div>
      <Footer />
    </main>
  )
}