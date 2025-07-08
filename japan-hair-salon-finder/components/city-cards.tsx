"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const tokyoStations = [
  { name: "Shibuya", japanese: "渋谷", area: "Shibuya", slug: "shibuya" },
  { name: "Shinjuku", japanese: "新宿", area: "Shinjuku", slug: "shinjuku" },
  { name: "Harajuku", japanese: "原宿", area: "Shibuya", slug: "harajuku" },
  { name: "Omotesando", japanese: "表参道", area: "Minato/Shibuya", slug: "omotesando" },
  { name: "Ginza", japanese: "銀座", area: "Chuo", slug: "ginza" },
  { name: "Ikebukuro", japanese: "池袋", area: "Toshima", slug: "ikebukuro" },
  { name: "Ueno", japanese: "上野", area: "Taito", slug: "ueno" },
  { name: "Akihabara", japanese: "秋葉原", area: "Chiyoda", slug: "akihabara" },
]

const otherCities = [
  { name: "Osaka", japanese: "大阪", slug: "osaka" },
  { name: "Kyoto", japanese: "京都", slug: "kyoto" },
  { name: "Kobe", japanese: "神戸", slug: "kobe" },
  { name: "Nagoya", japanese: "名古屋", slug: "nagoya" },
  { name: "Sapporo", japanese: "札幌", slug: "sapporo" },
  { name: "Fukuoka", japanese: "福岡", slug: "fukuoka" },
  { name: "Hiroshima", japanese: "広島", slug: "hiroshima" },
  { name: "Sendai", japanese: "仙台", slug: "sendai" },
  { name: "Yokohama", japanese: "横浜", slug: "yokohama" },
  { name: "Naha", japanese: "那覇", slug: "naha" },
]

export default function CityCards() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-[#5E4B8B] text-center mb-8">Choose a City</h2>

        {/* Tokyo Stations */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#5E4B8B] mb-6 text-center">Tokyo Popular Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tokyoStations.map((station) => (
              <Link key={station.name} href={`/area/tokyo/${station.slug}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-[#EDE9F6] hover:border-[#C8BFE7] bg-white hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-[#5E4B8B] mb-1">{station.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{station.japanese}</p>
                    <p className="text-xs text-gray-500">{station.area}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Cities */}
        <div>
          <h3 className="text-xl font-semibold text-[#5E4B8B] mb-6 text-center">Other Major Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {otherCities.map((city) => (
              <Link key={city.name} href={`/area/${city.slug}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-[#EDE9F6] hover:border-[#C8BFE7] bg-white hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-[#5E4B8B] mb-1">{city.name}</h4>
                    <p className="text-sm text-gray-600">{city.japanese}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
