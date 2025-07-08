import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#5E4B8B] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">Japan Hair Salon Finder</h3>
            <p className="text-sm text-[#C8BFE7]">Connecting international guests with welcoming salons</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <Link href="/sara" className="text-[#C8BFE7] hover:text-white transition-colors">
              For Hair Stylists
            </Link>
            <a
              href="https://forms.google.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8BFE7] hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://notion.so/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8BFE7] hover:text-white transition-colors"
            >
              About Us
            </a>
          </div>
        </div>

        <div className="border-t border-[#C8BFE7] mt-6 pt-4 text-center text-sm text-[#C8BFE7]">
          <p>&copy; 2024 Japan Hair Salon Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
