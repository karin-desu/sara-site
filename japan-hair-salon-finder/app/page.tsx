import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CityCards from "@/components/city-cards"
import SalonCards from "@/components/salon-cards"
import SaraPromotion from "@/components/sara-promotion"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import Sidebar from "@/components/sidebar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="flex gap-8">
        <div className="flex-1">
          <HeroSection />
          <CityCards />
          <SalonCards />
          <SaraPromotion />
          <AboutSection />
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}
