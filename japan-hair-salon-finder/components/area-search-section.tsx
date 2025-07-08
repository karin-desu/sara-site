"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Loader2 } from "lucide-react"

const popularTags = [
  { id: "lang_en_fluent", label: "English Fluent", category: "language" },
  { id: "lang_en_basic", label: "English Basic", category: "language" },
  { id: "feature_private", label: "Private Salon", category: "feature" },
  { id: "feature_women_only", label: "Women Only", category: "feature" },
  { id: "feature_lgbt_friendly", label: "LGBTQ+ Friendly", category: "feature" },
  { id: "feature_kids_ok", label: "Kids OK", category: "feature" },
  { id: "lang_with_sara", label: "Sara Assisted", category: "language" },
]

interface AreaSearchSectionProps {
  areaName: string
  salons: any[]
  onFilter: (filteredSalons: any[]) => void
}

export default function AreaSearchSection({ areaName, salons, onFilter }: AreaSearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)

    setTimeout(() => {
      let results = salons

      if (searchQuery) {
        results = results.filter(
          (salon) =>
            salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            salon.description?.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      onFilter(results)
      setIsLoading(false)
    }, 500)
  }

  const handleTagClick = (tagId: string) => {
    if (selectedTag === tagId) {
      setSelectedTag("")
      onFilter(salons)
      return
    }

    setSelectedTag(tagId)
    setIsLoading(true)

    setTimeout(() => {
      const tagLabel = popularTags.find((tag) => tag.id === tagId)?.label
      let results = salons

      if (tagLabel) {
        results = salons.filter(
          (salon) => salon.languageTags.includes(tagLabel) || salon.featureTags.includes(tagLabel),
        )
      }

      onFilter(results)
      setIsLoading(false)
    }, 400)
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
    onFilter(salons)
  }

  return (
    <div className="bg-[#EDE9F6]/30 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-[#5E4B8B] mb-4 text-center">Search salons in {areaName}</h3>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder={`Search salons in ${areaName}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-3 border-[#C8BFE7] focus:border-[#5E4B8B] focus:ring-[#5E4B8B]"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button onClick={handleSearch} className="bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white px-6 py-3">
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
        </Button>
      </div>

      {/* Filter Tags */}
      <div>
        <p className="text-sm font-medium text-[#5E4B8B] mb-3 text-center">Filter by features</p>
        <div className="flex flex-wrap justify-center gap-2">
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
          <div className="mt-4 text-center">
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-[#5E4B8B] hover:bg-[#EDE9F6]">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
