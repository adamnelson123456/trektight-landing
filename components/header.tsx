"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Mountain } from "lucide-react"

interface HeaderProps {
  onFeaturesClick: () => void
  onComparisonClick: () => void
  onReviewsClick: () => void
  onBuyClick: () => void
}

export default function Header({ onFeaturesClick, onComparisonClick, onReviewsClick, onBuyClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Mountain className={`h-8 w-8 ${isScrolled ? "text-teal-500" : "text-white"}`} />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>TrekTight</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={onFeaturesClick}
            className={`text-sm font-medium hover:text-teal-500 transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Features
          </button>
          <button
            onClick={onComparisonClick}
            className={`text-sm font-medium hover:text-teal-500 transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Comparison
          </button>
          <button
            onClick={onReviewsClick}
            className={`text-sm font-medium hover:text-teal-500 transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Reviews
          </button>
          <motion.button
            onClick={() => window.location.href = '/product'}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              isScrolled ? "bg-teal-500 text-white hover:bg-teal-600" : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </nav>

        <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-white z-40 pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 space-y-4">
            <button
              onClick={() => {
                onFeaturesClick()
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Features
            </button>
            <button
              onClick={() => {
                onComparisonClick()
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Comparison
            </button>
            <button
              onClick={() => {
                onReviewsClick()
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Reviews
            </button>
            <button
              onClick={() => {
                window.location.href = '/product'
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-center px-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
              Buy Now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

