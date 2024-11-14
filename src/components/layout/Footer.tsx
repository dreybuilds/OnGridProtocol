'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Twitter, Rss } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">OnGrid Protocol</h3>
            <p className="text-gray-400">Empowering the future of renewable energy with secure, scalable, and decentralized blockchain infrastructure.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/partnership" className="text-gray-400 hover:text-white transition-colors">Partnership Requests</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Blog</span>
                <Rss size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">Stay updated on OnGrid Protocol latest updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 text-white border-gray-700" />
              <Button type="submit" className="bg-oga-green hover:bg-oga-green/90 text-white">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 OnGrid Protocol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}