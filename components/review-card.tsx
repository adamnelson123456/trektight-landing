"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  rating: number
  text: string
  image: string
  index: number
}

export default function ReviewCard({ name, rating, text, image, index }: ReviewCardProps) {
  return (
    <motion.div
      className="bg-white p-5 sm:p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden mr-3 sm:mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm sm:text-base">"{text}"</p>
    </motion.div>
  )
}

