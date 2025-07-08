'use client';
import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SalonListCard from '@/components/salon-list-card';
import AreaSearchSection from '@/components/area-search-section';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Sample salon data for cities
const salonsByCity: Record<string, any[]> = {
  osaka: [
    {
      id: 10,
      name: 'Osaka International Hair',
      nameJapanese: '大阪インターナショナルヘア',
      area: 'Osaka・Namba',
      description:
        'Premier salon in Osaka with multilingual staff. We specialize in international hair care and modern styling techniques for diverse hair types.',
      languageTags: ['English Fluent'],
      featureTags: ['Private Salon', 'Color Expert'],
      reservationUrl: 'https://reserve.google.com/osaka1',
      mapUrl: 'https://maps.google.com/osaka1',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 11,
      name: 'Osaka Family Salon',
      nameJapanese: '大阪ファミリーサロン',
      area: 'Osaka・Umeda',
      description:
        'Family-friendly salon with English support and kids area. Perfect for international families living in Osaka with comfortable environment.',
      languageTags: ['English Basic'],
      featureTags: ['Kids OK', 'LGBTQ+ Friendly'],
      reservationUrl: 'https://reserve.google.com/osaka2',
      mapUrl: 'https://maps.google.com/osaka2',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  kyoto: [
    {
      id: 12,
      name: 'Kyoto Traditional & Modern Hair',
      nameJapanese: '京都トラディショナル＆モダンヘア',
      area: 'Kyoto・Gion',
      description:
        'Unique salon blending traditional Japanese aesthetics with modern techniques. English consultation available for cultural hair experiences.',
      languageTags: ['English Basic'],
      featureTags: ['Traditional Style', 'Women Only'],
      reservationUrl: 'https://reserve.google.com/kyoto1',
      mapUrl: 'https://maps.google.com/kyoto1',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  kobe: [
    {
      id: 13,
      name: 'Kobe International Style',
      nameJapanese: '神戸インターナショナルスタイル',
      area: 'Kobe・Sannomiya',
      description:
        'Cosmopolitan salon in Kobe with international flair. Experienced with Western hair types and modern European styling techniques.',
      languageTags: ['English Fluent'],
      featureTags: ['European Style', 'Color Expert'],
      reservationUrl: 'https://reserve.google.com/kobe1',
      mapUrl: 'https://maps.google.com/kobe1',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
  nagoya: [
    {
      id: 14,
      name: 'Nagoya Global Hair',
      nameJapanese: '名古屋グローバルヘア',
      area: 'Nagoya・Sakae',
      description:
        'Modern salon in central Nagoya with English-speaking staff. Specializing in international hair care and contemporary styling.',
      languageTags: ['English Basic'],
      featureTags: ['Modern Styling', 'Private Salon'],
      reservationUrl: 'https://reserve.google.com/nagoya1',
      mapUrl: 'https://maps.google.com/nagoya1',
      image: '/placeholder.svg?height=200&width=300',
    },
  ],
};

const cityNames: Record<string, { english: string; japanese: string }> = {
  osaka: { english: 'Osaka', japanese: '大阪' },
  kyoto: { english: 'Kyoto', japanese: '京都' },
  kobe: { english: 'Kobe', japanese: '神戸' },
  nagoya: { english: 'Nagoya', japanese: '名古屋' },
  sapporo: { english: 'Sapporo', japanese: '札幌' },
  fukuoka: { english: 'Fukuoka', japanese: '福岡' },
  hiroshima: { english: 'Hiroshima', japanese: '広島' },
  sendai: { english: 'Sendai', japanese: '仙台' },
  yokohama: { english: 'Yokohama', japanese: '横浜' },
  naha: { english: 'Naha', japanese: '那覇' },
};

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city;
  const cityInfo = cityNames[city];
  const allSalons = salonsByCity[city] || [];
  const [filteredSalons, setFilteredSalons] = useState(allSalons);

  if (!cityInfo) {
    return <div>City not found</div>;
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
                  {cityInfo.english} ({cityInfo.japanese})
                </h1>
              </div>
              <p className="text-gray-600">
                Hair salons welcoming international guests in {cityInfo.english}
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
            areaName={cityInfo.english}
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
                  {cityInfo.english}
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
