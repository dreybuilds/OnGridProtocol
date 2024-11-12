'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  location: string
  image: string
  progress: number
  goal: number
}

const projects: Project[] = [
  {
    id: 1,
    title: "Solar Farm in Kenya",
    location: "Nairobi, Kenya",
    image: "/Kenya-Solar.jpeg",
    progress: 750000,
    goal: 1000000
  },
  {
    id: 2,
    title: "Wind Energy in Tanzania",
    location: "Dar es Salaam, Tanzania",
    image: "/Tanzania-solar.jpeg",
    progress: 500000,
    goal: 800000
  },
  {
    id: 3,
    title: "Hydroelectric Plant in Uganda",
    location: "Kampala, Uganda",
    image: "/Uganda-solar.jpeg",
    progress: 1200000,
    goal: 1500000
  }
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const progressPercentage = (project.progress / project.goal) * 100

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-gradient"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.location}</p>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div 
              className="h-full bg-oga-green rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            ${project.progress.toLocaleString()} raised of ${project.goal.toLocaleString()} goal
          </p>
        </div>
        <Button className="w-full bg-oga-green hover:bg-oga-green/90 text-white">Invest Now</Button>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 gradient-text gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-oga-green hover:bg-oga-green/90 text-white">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}