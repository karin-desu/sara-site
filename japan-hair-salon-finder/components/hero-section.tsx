"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Loader2 } from "lucide-react"
import SalonCards from "./salon-cards"

const popularTags = [
  { id: "lang_en_fluent", label: "English Fluent", category: "language" },
  { id: "lang_en_basic", label: "English Basic", category: "language" },
  { id: "feature_private", label: "Private Salon", category: "feature" },
  { id: "feature_women_only", label: "Women Only", category: "feature" },
  { id: "feature_lgbt_friendly", label: "LGBTQ+ Friendly", category: "feature" },
  { id: "feature_kids_ok", label: "Kids OK", category: "feature" },
  { id: "lang_with_sara", label: "Sara Assisted", category: "language" },
]

// Sample salon data for filtering
const allSalons = [
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

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string>("")
  const [filteredSalons, setFilteredSalons] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    setShowResults(true)

    // Simulate API call delay
    setTimeout(() => {
      let results = allSalons

      if (searchQuery) {
        results = results.filter(
          (salon) =>
            salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            salon.area.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      setFilteredSalons(results)
      setIsLoading(false)
    }, 800)
  }

  const handleTagClick = (tagId: string) => {
    if (selectedTag === tagId) {
      // Deselect if same tag clicked
      setSelectedTag("")
      setShowResults(false)
      setFilteredSalons([])
      return
    }

    setSelectedTag(tagId)
    setIsLoading(true)
    setShowResults(true)

    // Simulate API call delay
    setTimeout(() => {
      const tagLabel = popularTags.find((tag) => tag.id === tagId)?.label
      let results = allSalons

      if (tagLabel) {
        results = allSalons.filter(
          (salon) => salon.languageTags.includes(tagLabel) || salon.featureTags.includes(tagLabel),
        )
      }

      setFilteredSalons(results)
      setIsLoading(false)
    }, 600)
  }

  const getTagStyle = (tag: any, isSelected: boolean) => {
    if (tag.category === "language") {
      return isSelected
        ? "bg-[#D8E88C] text-[#5E4B8B] border-[#D8E88C]"
        : "bg-white text-[#5E4B8B] border-[#C8BFE7] hover:bg-[#EDE9F6]"
    } else {
      return isSelected
        ? "bg-[#5E4B8B] text-white border-[#5E4B8B]"
        : "bg-white text-[#5E4B8B] border-[#C8BFE7] hover:bg-[#EDE9F6]"
    }
  }

  const clearFilters = () => {
    setSelectedTag("")
    setSearchQuery("")
    setShowResults(false)
    setFilteredSalons([])
  }

  return (
    <section className="py-16 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5E4B8B] mb-4 leading-tight">
          Looking for a salon in Japan?
        </h1>

        <p className="text-lg text-gray-600 mb-8">Find and book salons that welcome international guests.</p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for a city or station"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 border-[#C8BFE7] focus:border-[#5E4B8B] focus:ring-[#5E4B8B]"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} className="bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white px-6 py-3">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Popular Tags Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#5E4B8B] mb-4">Popular Filters</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {popularTags.map((tag) => {
              const isSelected = selectedTag === tag.id
              return (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className={`cursor-pointer transition-all duration-200 ${getTagStyle(tag, isSelected)}`}
                  onClick={() => handleTagClick(tag.id)}
                >
                  {tag.label}
                </Badge>
              )
            })}
          </div>
          {(selectedTag || searchQuery) && (
            <div className="mt-4">
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-[#5E4B8B] hover:bg-[#EDE9F6]">
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Search Results Section */}
        {showResults && (
          <div className="mt-12 text-left">
            <div className="border-t border-[#EDE9F6] pt-8">
              <h2 className="text-2xl font-bold text-[#5E4B8B] text-center mb-6">
                {isLoading
                  ? "Searching..."
                  : `Found ${filteredSalons.length} salon${filteredSalons.length !== 1 ? "s" : ""}`}
              </h2>

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-[#5E4B8B]" />
                </div>
              ) : (
                <div className="bg-[#EDE9F6]/30 rounded-2xl p-6">
                  <SalonCards salons={filteredSalons} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
