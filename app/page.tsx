"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronDown, Check, X, Star, ShoppingBag, Lock, Droplets, Zap, Layers, Usb, Wind } from "lucide-react"

import Header from "@/components/header"
import FeatureCard from "@/components/feature-card"
import ReviewCard from "@/components/review-card"
import Footer from "@/components/footer"

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const buyRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: false })

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: <Layers className="h-8 w-8 text-teal-500" />,
      title: "Expandable Design",
      description: "Grows from 30L to 60L capacity to adapt to your travel needs",
    },
    {
      icon: <Droplets className="h-8 w-8 text-teal-500" />,
      title: "Waterproof",
      description: "Premium waterproof materials keep your belongings dry in any weather",
    },
    {
      icon: <Lock className="h-8 w-8 text-teal-500" />,
      title: "Anti-Theft Lock",
      description: "Built-in TSA-approved lock system for peace of mind while traveling",
    },
    {
      icon: <Zap className="h-8 w-8 text-teal-500" />,
      title: "Compression Tech",
      description: "Vacuum-seal technology reduces volume by up to 50%",
    },
    {
      icon: <Usb className="h-8 w-8 text-teal-500" />,
      title: "USB Port",
      description: "Integrated USB charging port to keep your devices powered on the go",
    },
    {
      icon: <Wind className="h-8 w-8 text-teal-500" />,
      title: "Breathable Padding",
      description: "Ergonomic design with breathable padding for all-day comfort",
    },
  ]

  const reviews = [
    {
      name: "Alex Thompson",
      rating: 5,
      text: "This backpack changed how I travel. The compression technology is a game-changer for long trips.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Chen",
      rating: 5,
      text: "I've tried many travel bags, but TrekTight is by far the most versatile and well-designed.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Rodriguez",
      rating: 4,
      text: "Great quality and thoughtful features. The expandable design is perfect for both weekend getaways and longer adventures.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onComparisonClick={() => scrollToSection(comparisonRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onBuyClick={() => scrollToSection(buyRef)}
      />

      {/* Hero Section */}
      <div ref={heroRef} className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=ddrhienm0&public_id=dikovux5f0mfcyc9ayjk&profile=cld-default"
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <motion.div
          className="relative z-20 text-center px-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">Pack Smarter. Travel Lighter.</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">
            The ultimate expandable compression backpack for smart travel.
          </p>
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(buyRef)}
          >
            Shop Now
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Designed for Modern Travelers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every feature of TrekTight is thoughtfully engineered to make your journey smoother.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Product Breakdown */}
      <section className="py-20 px-4 w-full bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Ultimate Travel Companion</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes TrekTight the preferred choice for savvy travelers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full max-w-lg mx-auto lg:mx-0"
            >
              <Image
                src="/products/trektight-bp/1.png"
                alt="TrekTight Backpack"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 lg:mt-0"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Premium Materials & Smart Design
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Military-Grade Materials</h4>
                    <p className="text-gray-600">
                      Tear-resistant, waterproof fabric that withstands the harshest conditions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Vacuum Seal Technology</h4>
                    <p className="text-gray-600">Patented compression system reduces volume by up to 50%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Modular Compartments</h4>
                    <p className="text-gray-600">
                      Customizable interior with removable dividers for optimal organization
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Ergonomic Design</h4>
                    <p className="text-gray-600">
                      Scientifically designed to distribute weight evenly for all-day comfort
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Smart Accessibility</h4>
                    <p className="text-gray-600">Quick-access pockets and hidden compartments for valuables</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={comparisonRef} className="py-20 px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TrekTight?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how TrekTight compares to standard travel bags.</p>
        </motion.div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full min-w-[640px] border-collapse"
          >
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left text-gray-900 font-medium border-b">Features</th>
                <th className="p-4 text-center text-teal-600 font-medium border-b">TrekTight</th>
                <th className="p-4 text-center text-gray-600 font-medium border-b">Generic Travel Bag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b text-gray-800">Expandable Capacity</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b text-gray-800">Vacuum Compression</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b text-gray-800">Waterproof Materials</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b text-gray-800">Anti-Theft Lock System</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b text-gray-800">USB Charging Port</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b text-gray-800">Modular Compartments</td>
                <td className="p-4 border-b text-center">
                  <Check className="h-5 w-5 text-teal-500 mx-auto" />
                </td>
                <td className="p-4 border-b text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-20 px-4 w-full bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have upgraded their journey with TrekTight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                rating={review.rating}
                text={review.text}
                image={review.image}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Buy Now Section */}
      <section ref={buyRef} className="py-20 px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your TrekTight Today</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your journey with the ultimate travel companion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full max-w-lg mx-auto lg:mx-0"
          >
            <Image
              src="/products/trektight-bp/1.png"
              alt="TrekTight Backpack"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mt-6 lg:mt-0"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">TrekTight Expandable Backpack</h3>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-6">$199.99</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Free shipping worldwide</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">30-day money-back guarantee</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Available in 3 colors: Midnight Black, Ocean Blue, Slate Gray</span>
              </li>
            </ul>

            <div className="mb-8">
              <motion.button
                className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/product'}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </motion.button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-500">
              <Lock className="h-4 w-4 mr-2" />
              Secure checkout with SSL encryption
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

