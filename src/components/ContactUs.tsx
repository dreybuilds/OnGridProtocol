import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

const faqs = [
  {
    question: "How can I invest in OnGridAfrica projects?",
    answer: "You can invest in our projects by creating an account on our platform, browsing available projects, and choosing the ones that align with your investment goals."
  },
  {
    question: "What is the minimum investment amount?",
    answer: "The minimum investment amount varies by project, but typically starts at $100 USD."
  },
  {
    question: "How are returns calculated and distributed?",
    answer: "Returns are calculated based on the project's performance and are typically distributed quarterly. The exact terms are specified in each project's investment agreement."
  },
]

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <p className="flex items-center"><Phone className="mr-2" /> +254 123 456 789</p>
              <p className="flex items-center"><Mail className="mr-2" /> info@ongridafrica.com</p>
              <p className="flex items-center"><MapPin className="mr-2" /> 123 Green Street, Nairobi, Kenya</p>
            </div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500"><Facebook /></a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500"><Twitter /></a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-500"><Linkedin /></a>
            </div>
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2">{faq.question}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}