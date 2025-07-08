import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles, Users, Calendar } from "lucide-react"

export default function SaraPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-[#EDE9F6] rounded-full p-4">
                <MessageCircle className="w-12 h-12 text-[#5E4B8B]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#5E4B8B] mb-4">Sara - Smart Salon Assistant</h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Bridge the language gap between international clients and Japanese hair salons with AI-powered
              communication assistance.
            </p>

            <div className="bg-[#D8E88C] text-[#5E4B8B] px-6 py-3 rounded-full inline-block font-semibold">
              🚧 Currently in Development
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-[#EDE9F6] rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#5E4B8B] mr-3" />
                  <h3 className="text-xl font-bold text-[#5E4B8B]">For Clients</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Translate your style preferences to Japanese</li>
                  <li>• Generate visual references for your desired look</li>
                  <li>• Practice common salon phrases</li>
                  <li>• Get cultural tips for salon visits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#EDE9F6] rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-[#5E4B8B] mr-3" />
                  <h3 className="text-xl font-bold text-[#5E4B8B]">For Salons</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Understand international clients better</li>
                  <li>• Reduce communication barriers</li>
                  <li>• Expand your international clientele</li>
                  <li>• Improve customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#EDE9F6] to-[#C8BFE7] border-none rounded-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[#5E4B8B] mb-4">Interested in Sara for your salon?</h2>
              <p className="text-[#5E4B8B] mb-6">
                Join our waitlist to be notified when Sara launches and get early access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#5E4B8B] hover:bg-white hover:text-[#5E4B8B] text-white border-2 border-transparent hover:border-[#5E4B8B]">
                  <Calendar className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-[#5E4B8B] border-[#5E4B8B] hover:bg-[#5E4B8B] hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
