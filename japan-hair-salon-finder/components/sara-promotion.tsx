import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function SaraPromotion() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-gradient-to-r from-[#EDE9F6] to-[#C8BFE7] border-none rounded-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-3">
                <MessageCircle className="w-8 h-8 text-[#5E4B8B]" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#5E4B8B] mb-2">Not sure how to explain your style in Japanese?</h3>

            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#D8E88C] mr-2" />
              <p className="text-[#5E4B8B]">Sara helps you prepare your visit with a smart assistant.</p>
            </div>

            <Button
              asChild
              className="bg-[#5E4B8B] hover:bg-white hover:text-[#5E4B8B] text-white border-2 border-transparent hover:border-[#5E4B8B] transition-all duration-300"
            >
              <Link href="/sara">Try Sara</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
