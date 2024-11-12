'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of Renewable Energy in Africa",
    excerpt: "Exploring the potential and challenges of sustainable power solutions across the continent.",
    image: "/blog-post-1.jpg",
    date: "2024-03-15",
    author: "Jane Doe"
  },
  {
    title: "Impact Investing: Balancing Profit and Purpose",
    excerpt: "How OnGridAfrica is revolutionizing the way investors approach renewable energy projects.",
    image: "/blog-post-2.jpg",
    date: "2024-03-10",
    author: "John Smith"
  },
  {
    title: "Community-Driven Solar Projects: A Case Study",
    excerpt: "Examining the success of our recent solar installation in rural Kenya.",
    image: "/blog-post-3.jpg",
    date: "2024-03-05",
    author: "Alice Johnson"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <Link href={`/blog/${index}`} passHref>
                  <Button variant="outline" className="mt-4 w-full">Read More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center space-x-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Stay updated with the latest news, insights, and investment opportunities in African renewable energy.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
            />
            <Button type="submit" className="bg-oga-green hover:bg-oga-green/90 transition-colors duration-200">
              Subscribe
            </Button>
          </form>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-oga-green hover:bg-oga-green/90 transition-colors duration-200">
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}