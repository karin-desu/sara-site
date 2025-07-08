'use client';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SalonListCard from '@/components/salon-list-card';
import AreaSearchSection from '@/components/area-search-section';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Sample salon data for Tokyo stations
const salonsByStation: Record<string, any[]> = {
  shibuya: [
    {
      id: 1,
      name: 'Shibuya International Hair Studio',
      nameJapanese: '渋谷インターナショナルヘアスタジオ',
      area: 'Tokyo・Shibuya',
      description:
        'Modern salon specializing in international hair types with English-speaking stylists. Located just 3 minutes from Shibuya Station. We understand diverse hair textures and provide personalized consultations.',
      languageTags: ['English Fluent'],
      featureTags: ['Private Salon', 'LGBTQ+ Friendly'],
      reservationUrl: 'https://reserve.google.com/example1',
      mapUrl: 'https://maps.google.com/example1',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 2,
      name: 'Shibuya Color Lab',
      nameJapanese: '渋谷カラーラボ',
      area: 'Tokyo・Shibuya',
      description:
        'Expert color specialists with experience in Western hair textures. We speak English and provide detailed consultations to achieve your perfect color.',
      languageTags: ['English Basic'],
      featureTags: ['Color Expert', 'Women Only'],
      reservationUrl: 'https://reserve.google.com/example2',
      mapUrl: 'https://maps.google.com/example2',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 3,
      name: 'Shibuya Sara Salon',
      nameJapanese: '渋谷サラサロン',
      area: 'Tokyo・Shibuya',
      description:
        'Family-friendly salon with Sara assistance for international guests. Perfect for those who need language support during their visit.',
      languageTags: ['Sara Assisted'],
      featureTags: ['Kids OK', 'Private Salon'],
      reservationUrl: 'https://reserve.google.com/example3',
      mapUrl: 'https://maps.google.com/example3',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  shinjuku: [
    {
      id: 4,
      name: 'Shinjuku Global Salon',
      nameJapanese: '新宿グローバルサロン',
      area: 'Tokyo・Shinjuku',
      description:
        'International-friendly salon in the heart of Shinjuku. Our team has experience with diverse hair types and modern styling techniques.',
      languageTags: ['English Fluent'],
      featureTags: ['Private Salon', 'Kids OK'],
      reservationUrl: 'https://reserve.google.com/example4',
      mapUrl: 'https://maps.google.com/example4',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  harajuku: [
    {
      id: 5,
      name: 'Harajuku Creative Studio',
      nameJapanese: '原宿クリエイティブスタジオ',
      area: 'Tokyo・Harajuku',
      description:
        'Trendy salon in the heart of Harajuku specializing in creative colors and avant-garde styles. English consultation available.',
      languageTags: ['English Basic'],
      featureTags: ['Color Expert', 'Creative Styling'],
      reservationUrl: 'https://reserve.google.com/example5',
      mapUrl: 'https://maps.google.com/example5',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  omotesando: [
    {
      id: 6,
      name: 'Omotesando Luxury Hair',
      nameJapanese: '表参道ラグジュアリーヘア',
      area: 'Tokyo・Omotesando',
      description:
        'Premium salon on Omotesando Hills offering luxury hair treatments. Bilingual staff and international clientele welcome.',
      languageTags: ['English Fluent'],
      featureTags: ['Luxury Treatment', 'Private Salon'],
      reservationUrl: 'https://reserve.google.com/example6',
      mapUrl: 'https://maps.google.com/example6',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  ginza: [
    {
      id: 7,
      name: 'Ginza International Beauty',
      nameJapanese: '銀座インターナショナルビューティー',
      area: 'Tokyo・Ginza',
      description:
        'Sophisticated salon in Ginza district with multilingual staff. Specializing in classic and modern styles for international clients.',
      languageTags: ['English Fluent'],
      featureTags: ['Luxury Treatment', 'Color Expert'],
      reservationUrl: 'https://reserve.google.com/example7',
      mapUrl: 'https://maps.google.com/example7',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  ikebukuro: [
    {
      id: 8,
      name: 'Ikebukuro Family Hair',
      nameJapanese: '池袋ファミリーヘア',
      area: 'Tokyo・Ikebukuro',
      description:
        'Family-friendly salon near Ikebukuro Station. Comfortable environment for families with children and English support available.',
      languageTags: ['English Basic'],
      featureTags: ['Kids OK', 'Family Friendly'],
      reservationUrl: 'https://reserve.google.com/example8',
      mapUrl: 'https://maps.google.com/example8',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  ueno: [
    {
      id: 9,
      name: 'Ueno Traditional Modern',
      nameJapanese: '上野トラディショナルモダン',
      area: 'Tokyo・Ueno',
      description:
        'Unique salon blending traditional Japanese techniques with modern styling. English consultation and cultural hair experience.',
      languageTags: ['English Basic'],
      featureTags: ['Traditional Style', 'Cultural Experience'],
      reservationUrl: 'https://reserve.google.com/example9',
      mapUrl: 'https://maps.google.com/example9',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  akihabara: [
    {
      id: 10,
      name: 'Akihabara Tech Hair',
      nameJapanese: '秋葉原テックヘア',
      area: 'Tokyo・Akihabara',
      description:
        'Modern salon in Akihabara with tech-savvy approach. Digital consultation tools and English-speaking staff for international visitors.',
      languageTags: ['English Fluent'],
      featureTags: ['Digital Consultation', 'Modern Styling'],
      reservationUrl: 'https://reserve.google.com/example10',
      mapUrl: 'https://maps.google.com/example10',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
};

const stationNames: Record<string, { english: string; japanese: string }> = {
  shibuya: { english: 'Shibuya', japanese: '渋谷' },
  shinjuku: { english: 'Shinjuku', japanese: '新宿' },
  harajuku: { english: 'Harajuku', japanese: '原宿' },
  omotesando: { english: 'Omotesando', japanese: '表参道' },
  ginza: { english: 'Ginza', japanese: '銀座' },
  ikebukuro: { english: 'Ikebukuro', japanese: '池袋' },
  ueno: { english: 'Ueno', japanese: '上野' },
  akihabara: { english: 'Akihabara', japanese: '秋葉原' },
};

import { useState } from 'react';

export default function TokyoStationPage({
  params,
}: {
  params: { station: string };
}) {
  const station = params.station;
  const stationInfo = stationNames[station];
  const allSalons = salonsByStation[station] || [];
  const [filteredSalons, setFilteredSalons] = useState(allSalons);

  if (!stationInfo) {
    return <div>Station not found</div>;
  }

  const handleFilter = (salons: any[]) => {
    setFilteredSalons(salons);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      <main className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-[#5E4B8B] hover:text-[#C8BFE7] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Area Header with Map */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <MapPin className="w-6 h-6 text-[#5E4B8B] mr-2" />
                <h1 className="text-3xl font-bold text-[#5E4B8B]">
                  {stationInfo.english} ({stationInfo.japanese})
                </h1>
              </div>
              <p className="text-gray-600">
                Hair salons welcoming international guests in{' '}
                {stationInfo.english}
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full md:w-80 h-48 bg-[#EDE9F6] rounded-2xl flex items-center justify-center">
              <div className="text-center text-[#5E4B8B]">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Google Maps</p>
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <AreaSearchSection
            areaName={stationInfo.english}
            salons={allSalons}
            onFilter={handleFilter}
          />

          {/* Salon Count */}
          <div className="mb-6">
            <Card className="bg-[#EDE9F6] border-none">
              <CardContent className="p-4 text-center">
                <p className="text-[#5E4B8B] font-semibold">
                  {filteredSalons.length} salon
                  {filteredSalons.length !== 1 ? 's' : ''} found in{' '}
                  {stationInfo.english}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Salon Listings */}
          <div className="space-y-6">
            {filteredSalons.length > 0 ? (
              filteredSalons.map((salon) => (
                <SalonListCard key={salon.id} salon={salon} />
              ))
            ) : (
              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-600 mb-4">
                    No salons match your current filters.
                  </p>
                  <p className="text-sm text-gray-500">
                    Try adjusting your search criteria.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
