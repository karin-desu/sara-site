import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Map } from "lucide-react"
import Image from "next/image"

interface SalonListCardProps {
  salon: {
    id: number
    name: string
    nameJapanese: string
    area: string
    description: string
    languageTags: string[]
    featureTags: string[]
    reservationUrl: string
    mapUrl: string
    image: string
  }
}

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

const getFeatureTagColor = () => {
  return "bg-white border border-[#C8BFE7] text-[#5E4B8B]"
}

export default function SalonListCard({ salon }: SalonListCardProps) {
  return (
    <Card className="bg-white border-[#EDE9F6] hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3">
            <div className="relative h-48 md:h-full min-h-[200px]">
              <Image
                src={salon.image || "/placeholder.svg?height=200&width=300"}
                alt={salon.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-6">
            <div className="flex flex-col h-full">
              {/* Header - English name prominent, Japanese name smaller */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#5E4B8B] mb-1">{salon.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{salon.nameJapanese}</p>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {salon.area}
                </div>
              </div>

              {/* Description - English only, max 150 chars */}
              <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                {salon.description.length > 150 ? `${salon.description.substring(0, 150)}...` : salon.description}
              </p>

              {/* Tags */}
              <div className="space-y-3 mb-4">
                {/* Language Tags */}
                <div className="flex flex-wrap gap-2">
                  {salon.languageTags.map((tag) => (
                    <Badge key={tag} className={`${getLanguageTagColor(tag)} hover:opacity-80`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {salon.featureTags.map((tag) => (
                    <Badge key={tag} variant="outline" className={getFeatureTagColor()}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Google Maps Link */}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-[#5E4B8B] border-[#5E4B8B] hover:bg-[#EDE9F6]"
                >
                  <a
                    href={salon.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Map className="w-4 h-4 mr-2" />
                    View on Google Maps
                  </a>
                </Button>

                {/* Main Reservation Button - High visibility */}
                <Button
                  asChild
                  className="w-full bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white py-3 text-lg font-semibold"
                >
                  <a
                    href={salon.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Book Appointment on Google
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
