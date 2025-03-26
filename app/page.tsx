import { Suspense } from "react"
import PreLanding from "@/components/pre-landing"
import MainContent from "@/components/main-content"
import PageLoader from "@/components/ui/page-loader"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<PageLoader />}>
        <PreLanding />
        <MainContent />
      </Suspense>
    </main>
  )
}

