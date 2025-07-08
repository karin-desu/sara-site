import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin } from "lucide-react"

interface SalonCardsProps {
  salons?: any[]
}

const defaultSalons = [
  {
    id: 1,
    name: "Shibuya International Hair Studio",
    nameJapanese: "渋谷インターナショナルヘアスタジオ",
    area: "Tokyo・Shibuya",
    languageTags: ["English Fluent"],
    featureTags: ["Private Salon", "LGBTQ+ Friendly"],
    reservationUrl: "https://reserve.google.com/example1",
    saraStatus: "sara_yes",
  },
  {
    id: 2,
    name: "Harajuku Color Expert",
    nameJapanese: "原宿カラーエキスパート",
    area: "Tokyo・Harajuku",
    languageTags: ["English Basic"],
    featureTags: ["Color Expert", "Women Only"],
    reservationUrl: "https://reserve.google.com/example2",
    saraStatus: "sara_no",
  },
  {
    id: 3,
    name: "Ginza Premium Salon",
    nameJapanese: "銀座プレミアムサロン",
    area: "Tokyo・Ginza",
    languageTags: ["English Reviews"],
    featureTags: ["Private Salon", "Vegan Friendly"],
    reservationUrl: "https://reserve.google.com/example3",
    saraStatus: "sara_soon",
  },
  {
    id: 4,
    name: "Shinjuku Family Hair",
    nameJapanese: "新宿ファミリーヘア",
    area: "Tokyo・Shinjuku",
    languageTags: ["Sara Assisted"],
    featureTags: ["Kids OK", "Family Friendly"],
    reservationUrl: "https://reserve.google.com/example4",
    saraStatus: "sara_yes",
  },
  {
    id: 5,
    name: "Omotesando Style Lab",
    nameJapanese: "表参道スタイルラボ",
    area: "Tokyo・Omotesando",
    languageTags: ["English Fluent"],
    featureTags: ["Private Salon", "Pet Friendly"],
    reservationUrl: "https://reserve.google.com/example5",
    saraStatus: "sara_no",
  },
]

const getLanguageTagColor = (tag: string) => {
  switch (tag) {
    case "English Fluent":
      return "bg-[#D8E88C] text-[#5E4B8B]"
    case "English Basic":
      return "bg-[#C8BFE7] text-[#5E4B8B]"
    case "Sara Assisted":
      return "bg-[#EDE9F6] text-[#5E4B8B]"
    case "English Reviews":
      return "bg-[#C8BFE7] text-[#5E4B8B]"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

const getFeatureTagColor = (tag: string) => {
  return "bg-white border border-[#C8BFE7] text-[#5E4B8B]"
}

export default function SalonCards({ salons = defaultSalons }: SalonCardsProps) {
  if (salons.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 mb-2">No salons found matching your criteria.</p>
        <p className="text-sm text-gray-500">Try adjusting your search or filters.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {salons.map((salon) => (
        <Card
          key={salon.id}
          className="bg-white border-[#EDE9F6] hover:shadow-lg transition-all duration-300 rounded-2xl"
        >
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              {/* Salon Name and Area */}
              <div>
                <h3 className="text-xl font-bold text-[#5E4B8B] mb-1">{salon.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{salon.nameJapanese}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {salon.area}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {salon.languageTags.map((tag: string) => (
                    <Badge key={tag} className={`${getLanguageTagColor(tag)} hover:opacity-80`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {salon.featureTags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className={getFeatureTagColor(tag)}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Reservation Button */}
              <div className="pt-2">
                <Button asChild className="w-full bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white">
                  <a
                    href={salon.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Book Appointment
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
