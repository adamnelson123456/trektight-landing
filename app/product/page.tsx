"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, Check, Truck, ShieldCheck, CreditCard, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import { Swiper as SwiperType } from 'swiper/types'

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ShopifyBuyButton from "@/components/ShopifyBuyButton"

export default function ProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=600&width=600")
  const videoRef = useRef<HTMLVideoElement>(null)
  const isVideoInView = useInView(videoRef, { once: false })
  const userVideoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoInView])

  // Array of user testimonial videos
  const userVideos = [
    { src: '/productpage.reel/b0af19c9346a40b49edee526ac786b69.HD-720p-1.6Mbps-31345625 (1).mp4', poster: '' },
    { src: '/productpage.reel/04b094f94f9a45238b934dc0d603e30c.HD-720p-1.6Mbps-31346218.mp4', poster: '' },
    { src: '/productpage.reel/4068a99af51249b8974954ffd4e50d29.HD-720p-1.6Mbps-33055073.mp4', poster: '' },
    { src: '/productpage.reel/05d8910eecc54dd9bb8db2cdfa73b5d3.HD-1080p-7.2Mbps-31371402.mp4', poster: '' },
  ]

  // Handle video visibility for user testimonials
  useEffect(() => {
    const observers = userVideoRefs.current.map((videoRef, index) => {
      if (!videoRef) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.play()
            } else {
              videoRef.pause()
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(videoRef)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const thumbnails = [
    "/placeholder.svg?height=120&width=120",
    "/placeholder.svg?height=120&width=120",
    "/placeholder.svg?height=120&width=120",
    "/placeholder.svg?height=120&width=120",
  ]

  const customerPhotos = [
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
    "/placeholder.svg?height=200&width=200",
  ]

  const faqs = [
    {
      question: "How much can the TrekTight backpack hold?",
      answer:
        "The TrekTight backpack expands from 30L to 60L capacity, allowing you to pack for trips lasting 10+ days. With our vacuum compression technology, you can fit up to 50% more items than in a standard backpack of similar dimensions.",
    },
    {
      question: "Is the TrekTight backpack carry-on compliant?",
      answer:
        "Yes, the TrekTight backpack is designed to comply with most airline carry-on requirements when in its compressed state (30L). Always check your specific airline's size restrictions before traveling.",
    },
    {
      question: "How waterproof is the backpack?",
      answer:
        "The TrekTight backpack is made with premium waterproof oxford cloth and features sealed zippers, providing excellent protection against rain and splashes. While it can withstand heavy rain, we don't recommend full submersion.",
    },
    {
      question: "What's included with my purchase?",
      answer:
        "Your TrekTight backpack comes with a USB charging port (power bank not included), TSA-approved lock, and a detailed user guide. If you select the 2-pack bundle, you'll receive two identical backpacks at a discounted price.",
    }
  ]

  const productMedia = [
    { type: 'image', src: '/products/trektight-bp/1.png', alt: 'TrekTight Backpack Main View' },
    { type: 'video', src: '/products/trektight-bp/2.mp4', alt: 'TrekTight Backpack Demo Video' },
    { type: 'image', src: '/products/trektight-bp/3.png', alt: 'TrekTight Backpack Features' },
    { type: 'image', src: '/products/trektight-bp/4.png', alt: 'TrekTight Backpack Interior' },
    { type: 'image', src: '/products/trektight-bp/5.png', alt: 'TrekTight Backpack Security Features' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header onFeaturesClick={() => {}} onComparisonClick={() => {}} onReviewsClick={() => {}} onBuyClick={() => {}} />

      <div className="w-full max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column - Product Images */}
          <div>
            {/* Main Carousel */}
            <div className="relative mb-4 rounded-lg overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="product-main-swiper"
                initialSlide={0}
              >
                {productMedia.map((media, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center bg-white">
                    {media.type === 'video' ? (
                      <div className="relative w-full h-full">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={media.src}
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="relative w-full h-[600px] border border-gray-200">
                          <img
                            src={media.src}
                            alt={media.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Navigation */}
            <div className="hidden sm:block">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className="product-thumbs-swiper"
                watchSlidesProgress
              >
                {productMedia.map((media, index) => (
                  <SwiperSlide key={index} className="cursor-pointer rounded-lg overflow-hidden">
                    <div className="relative aspect-w-1 aspect-h-1">
                      {media.type === 'video' ? (
                        <div className="relative w-full h-full bg-gray-100">
                          <img
                            src="/products/trektight-bp/video-thumb.png"
                            alt={media.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[6px] border-l-gray-800 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={media.src}
                          alt={media.alt}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="mt-4 lg:mt-0">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium mb-3 sm:mb-4">
              HOT PRODUCT | LIMITED STOCK
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              TrekTight Expandable Backpack
            </h1>

            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-xs sm:text-sm text-gray-600">(128 reviews)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">$84.99</span>
              <span className="text-lg sm:text-xl text-gray-500 line-through">$129.99</span>
              <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs sm:text-sm font-medium">
                Save 35%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
              Pay in 4 interest-free installments of $21.25 with ShopPay
            </p>

            <p className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4">
              Pack more. Pay less. Stress never.
            </p>

            <ul className="space-y-2 mb-5 sm:mb-6">
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">10+ Days of items</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Odor-Free & Waterproof</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Pack 50% More</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Skip Baggage Fees</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-gray-700">Vacuum Pump Included</span>
              </li>
            </ul>

            {/* Buy Button */}
            <div className="mb-5 sm:mb-6">
              <ShopifyBuyButton />
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/products/trektight-bp/1.png"
                  alt="TrekTight Backpack"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/products/trektight-bp/3.png"
                    alt="TrekTight Backpack Side View"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/products/trektight-bp/4.png"
                    alt="TrekTight Backpack Features"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Product Info Section */}
        <div className="mb-12 sm:mb-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-1 mb-6 sm:mb-8 overflow-x-auto">
              <TabsTrigger value="description" className="text-xs sm:text-sm">
                Product Description
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">The Ultimate Travel Companion</h3>
                  <p className="text-gray-700 mb-4">
                    The TrekTight Expandable Backpack is designed for the modern traveler who demands versatility,
                    durability, and style. With its innovative vacuum compression technology, you can pack up to 50%
                    more items than in a standard backpack of similar dimensions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Made from premium waterproof materials, the TrekTight backpack keeps your belongings safe and dry in
                    any weather conditions. The ergonomic design ensures comfort even during long journeys, while the
                    anti-theft features provide peace of mind.
                  </p>

                  <h4 className="font-medium text-gray-900 mb-2">Dimensions:</h4>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Compressed: 20" x 14" x 8" (50.8cm x 35.6cm x 20.3cm)</li>
                    <li>Expanded: 22" x 14" x 12" (55.9cm x 35.6cm x 30.5cm)</li>
                    <li>Weight: 3.2 lbs (1.45 kg)</li>
                  </ul>

                  <h4 className="font-medium text-gray-900 mb-2">Carry-on Compliance:</h4>
                  <p className="text-gray-700 mb-4">
                    When compressed, the TrekTight backpack meets most airline carry-on requirements. Always check your
                    specific airline's size restrictions before traveling.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Materials:</h4>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Exterior: 900D waterproof oxford cloth</li>
                    <li>Interior lining: Ripstop nylon</li>
                    <li>Padding: High-density foam</li>
                    <li>Zippers: YKK water-resistant zippers</li>
                    <li>Buckles: Duraflex hardware</li>
                  </ul>

                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li>Expandable design (30L to 60L)</li>
                    <li>Vacuum compression technology</li>
                    <li>Waterproof construction</li>
                    <li>TSA-approved lock system</li>
                    <li>USB charging port</li>
                    <li>Breathable back padding</li>
                    <li>Hidden anti-theft pocket</li>
                    <li>Laptop compartment (fits up to 17")</li>
                    <li>Bottle holder</li>
                    <li>Adjustable chest and waist straps</li>
                  </ul>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Care Instructions:</h4>
                    <p className="text-gray-700">
                      Spot clean with mild soap and water. Do not machine wash. Air dry only. Do not use bleach or harsh
                      chemicals.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* See TrekTight in Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">See TrekTight in Action</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/ddrhienm0/video/upload/v1711944000/gesgujjocnls8b8jsgis.mp4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* User Video Testimonials */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
            Trusted & Used by Travelers Worldwide
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={3}
              spaceBetween={24}
              centeredSlides={false}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="user-videos-swiper"
            >
              {userVideos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 shadow-md">
                    <video
                      ref={(el) => {
                        userVideoRefs.current[index] = el
                        return undefined
                      }}
                      className="w-full h-full object-cover"
                      playsInline
                      loop
                      muted
                      preload="metadata"
                      poster={video.poster}
                      controls={false}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h3>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-lg font-medium text-gray-900">4.9 out of 5</span>
            <span className="ml-2 text-gray-600">Based on 128 reviews</span>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 font-medium text-gray-900">Alex T.</span>
                <span className="ml-2 text-sm text-gray-500">Verified Buyer</span>
              </div>
              <p className="text-gray-700 mb-2">
                This backpack changed how I travel. The compression technology is a game-changer for long trips.
              </p>
              <span className="text-sm text-gray-500">Posted 2 months ago</span>
            </div>

            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 font-medium text-gray-900">Sarah C.</span>
                <span className="ml-2 text-sm text-gray-500">Verified Buyer</span>
              </div>
              <p className="text-gray-700 mb-2">
                I've tried many travel bags, but TrekTight is by far the most versatile and well-designed. The
                expandable feature is perfect for bringing back souvenirs!
              </p>
              <span className="text-sm text-gray-500">Posted 1 month ago</span>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
                <span className="ml-2 font-medium text-gray-900">Michael R.</span>
                <span className="ml-2 text-sm text-gray-500">Verified Buyer</span>
              </div>
              <p className="text-gray-700 mb-2">
                Great quality and thoughtful features. The expandable design is perfect for both weekend getaways
                and longer adventures. Only giving 4 stars because I wish it came in more color options.
              </p>
              <span className="text-sm text-gray-500">Posted 3 weeks ago</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-5 sm:mb-6">
            Join thousands of satisfied travelers who have upgraded their journey with the TrekTight Expandable
            Backpack.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your TrekTight Today
            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

