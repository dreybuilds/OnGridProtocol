import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Projects', href: '#projects' },
  { name: 'Impact', href: '#impact' },
  { name: 'Partners', href: '#partners' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay updated with our latest news and projects.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
              <Button type="submit" className="rounded-r-md bg-green-500 hover:bg-green-600">Subscribe</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300">123 Green Street, Nairobi, Kenya</p>
            <p className="text-gray-600 dark:text-gray-300">info@ongridafrica.com</p>
            <p className="text-gray-600 dark:text-gray-300">+254 123 456 789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-green-500">
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; 2024 OnGridAfrica. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-green-500 mr-4">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-green-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}