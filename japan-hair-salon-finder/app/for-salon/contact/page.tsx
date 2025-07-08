"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Users, Globe, Camera, MessageCircle, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function SalonContactPage() {
  const [formData, setFormData] = useState({
    salonName: "",
    contactName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  // simple validator – make sure a radio option has been chosen
  const isFormValid = () => {
    return (
      formData.salonName.trim() &&
      formData.contactName.trim() &&
      formData.email.trim() &&
      formData.message.trim() &&
      formData.inquiryType
    )
  }

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]">
        <Header />
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-[#5E4B8B] mb-4">お問い合わせありがとうございます</h1>
            <p className="text-gray-600 mb-8">
              2営業日以内にご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
            <Button asChild className="bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white">
              <Link href="/">ホームに戻る</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />

      <main className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-[#5E4B8B] hover:text-[#C8BFE7] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5E4B8B] mb-4 leading-tight">
              あなたの美容室をこのサイトに掲載しませんか？
            </h1>
            <p className="text-xl text-[#5E4B8B] mb-8">訪日外国人との出会いを、もっとスムーズに。</p>

            <div className="bg-white rounded-2xl p-8 border border-[#EDE9F6] max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-4">
                このサイトでは、日本にある美容室の中でも外国人対応に積極的なサロンを紹介しています。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                英語が話せなくても大丈夫。掲載は無料で、どなたでもお問い合わせいただけます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                また、外国人のお客様とのカウンセリングをサポートする
                <strong className="text-[#5E4B8B]">無料ツール「Sara」</strong>
                もご案内しています。
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-medium">まずはお気軽にご連絡ください。</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#5E4B8B] text-center mb-8">掲載のメリット</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-[#5E4B8B] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">英語対応の美容室として訪日外国人向けに紹介されます</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#5E4B8B] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Google予約リンクを掲載できます</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Camera className="w-6 h-6 text-[#5E4B8B] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">サロンの紹介文や写真を掲載可能です</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#EDE9F6]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-6 h-6 text-[#5E4B8B] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      希望者には、カウンセリング補助ツール「Sara」もご提供可能です（無料）
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recommended For Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#5E4B8B] text-center mb-8">こんな美容室におすすめ</h2>
            <Card className="bg-[#EDE9F6] border-none">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#5E4B8B]" />
                    <p className="text-gray-700">英語に不安があるけど外国人対応を始めたい</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-[#5E4B8B]" />
                    <p className="text-gray-700">すでに英語対応しているが、もっと集客につなげたい</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#5E4B8B]" />
                    <p className="text-gray-700">インバウンドのお客様向けの情報発信を強化したい</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#5E4B8B] text-center mb-4">お問い合わせフォーム</h2>
            <p className="text-center text-gray-600 mb-8">
              掲載をご希望の方・ご質問のある方は、以下のフォームよりご連絡ください。
            </p>

            <Card className="bg-white border-[#EDE9F6] max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="salonName" className="text-[#5E4B8B] font-medium">
                      サロン名 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="salonName"
                      required
                      value={formData.salonName}
                      onChange={(e) => handleInputChange("salonName", e.target.value)}
                      className="mt-2 border-[#C8BFE7] focus:border-[#5E4B8B]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName" className="text-[#5E4B8B] font-medium">
                      担当者のお名前 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      className="mt-2 border-[#C8BFE7] focus:border-[#5E4B8B]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#5E4B8B] font-medium">
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2 border-[#C8BFE7] focus:border-[#5E4B8B]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#5E4B8B] font-medium">
                      電話番号（任意）
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2 border-[#C8BFE7] focus:border-[#5E4B8B]"
                    />
                  </div>

                  <div>
                    <Label className="text-[#5E4B8B] font-medium">
                      お問い合わせの種類 <span className="text-red-500">*</span>
                    </Label>
                    <div className="mt-2 space-y-2">
                      {[
                        { value: "listing", label: "掲載希望" },
                        { value: "inquiry", label: "お問い合わせのみ" },
                        { value: "advertising", label: "広告掲載・タイアップのご相談" },
                      ].map((opt) => (
                        <div key={opt.value} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id={opt.value}
                            name="inquiryType"
                            value={opt.value}
                            checked={formData.inquiryType === opt.value}
                            onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                            className="h-4 w-4 text-[#5E4B8B] border-gray-300 focus:ring-[#5E4B8B]"
                            required
                          />
                          <Label htmlFor={opt.value}>{opt.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#5E4B8B] font-medium">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 w-full rounded-md border border-[#C8BFE7] p-2 focus:border-[#5E4B8B] focus:ring-[#5E4B8B]"
                      placeholder="ご質問やご要望をお聞かせください"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className="w-full bg-[#5E4B8B] hover:bg-[#C8BFE7] text-white py-3 text-lg disabled:opacity-50"
                  >
                    送信する
                  </Button>

                  <p className="text-sm text-gray-500 text-center">※送信後、2営業日以内にご連絡いたします。</p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sara Introduction Section */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-[#EDE9F6] to-[#C8BFE7] border-none">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-[#5E4B8B]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#5E4B8B] mb-4">外国人対応に不安がある方へ</h2>
                  <p className="text-[#5E4B8B] leading-relaxed mb-4">
                    言葉の壁があると、カウンセリングや施術に不安を感じることも。
                  </p>
                  <p className="text-[#5E4B8B] leading-relaxed mb-4">
                    「Sara」は、QRコードを読み取るだけで使える無料のカウンセリング補助ツールです。
                  </p>
                  <p className="text-[#5E4B8B] leading-relaxed mb-6">
                    掲載いただいた美容室の中で、ご希望がある方にだけご案内しています。
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white text-[#5E4B8B] border-[#5E4B8B] hover:bg-[#5E4B8B] hover:text-white"
                  >
                    <Link href="/sara">Saraについて詳しく見る</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry & Advertising Section */}
          <div className="mb-12">
            <Card className="bg-[#FAF9F6] border-[#C8BFE7]">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-[#5E4B8B] mb-4">美容業界関係者・広告掲載を検討されている方へ</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    このサイトでは、美容室を探している外国人や美容に関心のある訪日客へ向けた情報発信を行っています。
                  </p>
                  <p>
                    美容業界に関連するサービスや商品のプロモーションをご検討の方は、広告掲載やタイアップについてもお気軽にお問い合わせください。
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-[#EDE9F6]">
                    <p className="text-[#5E4B8B] font-medium">
                      上記フォームより「広告掲載・タイアップのご相談」を選択し、お送りください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Card className="bg-[#5E4B8B] border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">外国人対応に不安があっても大丈夫。</h2>
                <p className="text-white mb-6">まずはお気軽に、お問い合わせください。</p>
                <Button
                  onClick={() => {
                    document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-white text-[#5E4B8B] hover:bg-[#EDE9F6] px-8 py-3 text-lg"
                >
                  お問い合わせフォームへ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
