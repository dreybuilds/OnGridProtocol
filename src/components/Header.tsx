import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Projects', href: '#projects' },
  { name: 'Impact', href: '#impact' },
  { name: 'Partners', href: '#partners' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
]

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-color.png"
            alt="OnGridAfrica"
            width={200}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-oga-green transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="bg-oga-green hover:bg-oga-green/90 text-white">
            Invest Now
          </Button>
        </div>
      </nav>
    </header>
  )
}