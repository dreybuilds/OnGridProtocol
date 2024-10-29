import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'The Future of Renewable Energy in Africa',
    excerpt: 'Exploring the potential and challenges of sustainable power generation across the continent.',
    image: '/blog-post-1.jpg',
    date: 'May 15, 2024',
    author: 'John Doe',
    category: 'Industry Insights',
  },
  {
    title: 'Impact Investing: Making a Difference Through Energy',
    excerpt: 'How investors are driving positive change in African communities through renewable energy projects.',
    image: '/blog-post-2.jpg',
    date: 'May 10, 2024',
    author: 'Jane Smith',
    category: 'Investment',
  },
  {
    title: 'Success Story: Solar-Powered Schools in Rural Kenya',
    excerpt: 'A look at how OnGridAfrica investors transformed education in remote areas.',
    image: '/blog-post-3.jpg',
    date: 'May 5, 2024',
    author: 'Alice Johnson',
    category: 'Case Studies',
  },
]

const categories = ['All', 'Industry Insights', 'Investment', 'Case Studies', 'Technology']

export default function Blog() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News & Insights</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="m-1"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-green-500 font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link href={`/blog/${index}`}>
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mb-8">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Stay updated with the latest news, insights, and investment opportunities in African renewable energy.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Subscribe
            </Button>
          </form>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}