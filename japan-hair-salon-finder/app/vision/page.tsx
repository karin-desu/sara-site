import Header from "@/components/header"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VisionPage() {
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
                <Heart className="w-8 h-8 text-[#5E4B8B] mr-3" />
                <div>
                  <h1 className="text-3xl font-bold text-[#5E4B8B]">Our Vision</h1>
                  <p className="text-gray-600">Project mission, future vision, and values</p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-white border-[#EDE9F6]">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-[#5E4B8B] mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We believe that everyone should feel welcome and confident when visiting a hair salon, regardless
                      of language barriers or cultural differences. Our mission is to bridge the gap between
                      international visitors and Japanese hair salons, creating meaningful connections and beautiful
                      experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#EDE9F6]">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-[#5E4B8B] mb-4">Future Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We envision a future where language is no longer a barrier to accessing quality hair care services
                      in Japan. Through technology, cultural understanding, and community building, we aim to make every
                      salon visit a positive and empowering experience for international guests.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-[#EDE9F6]">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-[#5E4B8B] mb-4">Our Values</h2>
                    <ul className="text-gray-700 space-y-2">
                      <li>
                        • <strong>Inclusivity:</strong> Welcoming everyone regardless of background
                      </li>
                      <li>
                        • <strong>Cultural Respect:</strong> Honoring Japanese traditions while embracing diversity
                      </li>
                      <li>
                        • <strong>Innovation:</strong> Using technology to solve real-world problems
                      </li>
                      <li>
                        • <strong>Community:</strong> Building connections between people and businesses
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
