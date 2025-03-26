import { notFound } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import BlogPost from "@/components/blog/blog-post"
import Breadcrumb from "@/components/ui/breadcrumb"

// Sample blog posts data - in a real app, this would come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Market Volatility: A Beginner's Guide",
    excerpt:
      "Learn how to navigate market fluctuations and make informed investment decisions during volatile periods.",
    content: `
      <h2>What is Market Volatility?</h2>
      <p>Market volatility refers to the rate at which the price of assets increases or decreases. High volatility is characterized by rapid and significant price fluctuations, while low volatility indicates more stable and predictable price movements.</p>
      
      <h2>Why Does Volatility Matter?</h2>
      <p>Volatility is important for several reasons:</p>
      <ul>
        <li>It affects investment risk and potential returns</li>
        <li>It influences trading strategies and portfolio management decisions</li>
        <li>It can create both opportunities and challenges for investors</li>
      </ul>
      
      <h2>Common Causes of Market Volatility</h2>
      <p>Several factors can trigger market volatility:</p>
      <ul>
        <li>Economic data releases and policy changes</li>
        <li>Geopolitical events and global crises</li>
        <li>Industry disruptions and technological changes</li>
        <li>Market sentiment and investor psychology</li>
      </ul>
      
      <h2>Strategies for Navigating Volatile Markets</h2>
      <p>Here are some approaches to consider during periods of high volatility:</p>
      <ol>
        <li><strong>Diversification:</strong> Spread investments across different asset classes to reduce risk.</li>
        <li><strong>Dollar-Cost Averaging:</strong> Invest fixed amounts at regular intervals to smooth out the impact of volatility.</li>
        <li><strong>Maintain a Long-Term Perspective:</strong> Focus on long-term goals rather than short-term fluctuations.</li>
        <li><strong>Set Stop-Loss Orders:</strong> Establish predetermined exit points to limit potential losses.</li>
        <li><strong>Consider Volatility ETFs:</strong> These specialized funds are designed to capitalize on market volatility.</li>
      </ol>
      
      <h2>Psychological Aspects of Dealing with Volatility</h2>
      <p>Managing emotions is crucial during volatile periods:</p>
      <ul>
        <li>Avoid panic selling during market downturns</li>
        <li>Don't chase performance during market rallies</li>
        <li>Maintain discipline and stick to your investment plan</li>
        <li>Use volatility as an opportunity to reassess your risk tolerance</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Market volatility is an inherent part of investing. By understanding its causes and implementing appropriate strategies, investors can navigate volatile periods more effectively and potentially turn market turbulence into opportunity.</p>
    `,
    image: "/images/blog-1.jpg",
    date: "March 10, 2024",
    author: "Priya Patel",
    category: "Investment",
    tags: ["volatility", "risk management", "investment strategy"],
  },
  {
    id: 2,
    title: "The Impact of Geopolitical Events on Global Markets",
    excerpt:
      "An analysis of how international conflicts and political developments affect financial markets worldwide.",
    content: `
      <h2>Introduction to Geopolitics and Markets</h2>
      <p>Geopolitical events—ranging from elections and policy changes to conflicts and trade disputes—can significantly impact financial markets around the world. Understanding these relationships is crucial for investors seeking to navigate the complex global financial landscape.</p>
      
      <h2>Historical Perspective: Major Geopolitical Shocks</h2>
      <p>Looking at past events provides valuable insights:</p>
      <ul>
        <li>The 1973 Oil Crisis triggered by the OPEC embargo</li>
        <li>The fall of the Berlin Wall and the dissolution of the Soviet Union</li>
        <li>The 9/11 terrorist attacks</li>
        <li>The 2008 Global Financial Crisis</li>
        <li>Brexit and its ongoing implications</li>
        <li>The COVID-19 pandemic</li>
      </ul>
      
      <h2>Transmission Mechanisms: How Geopolitics Affects Markets</h2>
      <p>Geopolitical events influence markets through several channels:</p>
      <ol>
        <li><strong>Trade Flows:</strong> Tariffs, sanctions, and trade agreements directly impact import/export businesses and supply chains.</li>
        <li><strong>Currency Valuations:</strong> Political instability often leads to currency depreciation in affected regions.</li>
        <li><strong>Commodity Prices:</strong> Conflicts in resource-rich regions can disrupt supply and drive price volatility.</li>
        <li><strong>Capital Flows:</strong> Investors may withdraw capital from regions perceived as risky, creating market pressure.</li>
        <li><strong>Policy Responses:</strong> Central banks and governments may implement monetary or fiscal measures in response to geopolitical developments.</li>
      </ol>
      
      <h2>Regional Impacts and Market Correlations</h2>
      <p>Different regions and asset classes respond differently to geopolitical events:</p>
      <ul>
        <li>Developed markets typically experience less severe but more correlated reactions</li>
        <li>Emerging markets often face more pronounced volatility</li>
        <li>Safe-haven assets like gold, U.S. Treasuries, and the Swiss Franc tend to appreciate during crises</li>
        <li>Energy markets are particularly sensitive to events in oil-producing regions</li>
      </ul>
      
      <h2>Investment Strategies for Geopolitical Uncertainty</h2>
      <p>Investors can adopt several approaches to manage geopolitical risk:</p>
      <ul>
        <li>Geographic diversification across regions with different risk profiles</li>
        <li>Sector allocation that considers geopolitical vulnerabilities</li>
        <li>Hedging strategies using derivatives or alternative assets</li>
        <li>Scenario planning for major potential geopolitical developments</li>
        <li>Maintaining liquidity to capitalize on market dislocations</li>
      </ul>
      
      <h2>Conclusion: The Increasing Importance of Geopolitical Analysis</h2>
      <p>As global markets become increasingly interconnected, geopolitical analysis is becoming an essential component of investment decision-making. Investors who develop a framework for understanding and responding to geopolitical events will be better positioned to protect their portfolios and identify opportunities amid uncertainty.</p>
    `,
    image: "/images/blog-2.jpg",
    date: "March 5, 2024",
    author: "Rahul Mehta",
    category: "Global Finance",
    tags: ["geopolitics", "global markets", "risk analysis"],
  },
  // Add more blog posts as needed
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
    title: `${post.title} - Bulls & Bears Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container px-4 pt-24 pb-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.id}`, active: true },
          ]}
        />
        <BlogPost post={post} />
      </div>
      <Footer />
    </main>
  )
}

