"use client"

import type React from "react"

import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </motion.div>
  )
}

