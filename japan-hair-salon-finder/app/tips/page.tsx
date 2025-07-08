import Header from "@/components/header"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      <main className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-[#5E4B8B] hover:text-[#C8BFE7] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-8">
                <MapPin className="w-8 h-8 text-[#5E4B8B] mr-3" />
                <div>
                  <h1 className="text-3xl font-bold text-[#5E4B8B]">Travel Tips</h1>
                  <p className="text-gray-600">Useful information for international travelers</p>
                </div>
              </div>

              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-16 h-16 text-[#C8BFE7] mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-[#5E4B8B] mb-2">Coming Soon</h2>
                  <p className="text-gray-600">
                    We're compiling helpful travel tips covering transportation, WiFi, traditional experiences, and more
                    for international visitors.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
