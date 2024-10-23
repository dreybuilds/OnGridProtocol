import { Button } from "@/components/ui/button"
import { Sun } from 'lucide-react'
import Image from 'next/image'

interface SolarProject {
  id: number;
  title: string;
  company: string;
  location: string;
  status: 'Active' | 'Funding' | 'Completed';
  fundingProgress: number;
  fundingGoal: number;
  co2Reduction: number;
  carbonCredits: number;
  beneficiaries: number;
  image: string;
}

const solarProjects: SolarProject[] = [
  {
    id: 1,
    title: 'Solar Power for Rural Schools',
    company: 'SunEduc',
    location: 'Kenya',
    status: 'Funding',
    fundingProgress: 75000,
    fundingGoal: 100000,
    co2Reduction: 500,
    carbonCredits: 500,
    beneficiaries: 5000,
    image: '/Kenya-solar.jpeg',
  },
  {
    id: 2,
    title: 'Community Solar Grid',
    company: 'VillagePower',
    location: 'Tanzania',
    status: 'Active',
    fundingProgress: 250000,
    fundingGoal: 250000,
    co2Reduction: 1200,
    carbonCredits: 1200,
    beneficiaries: 10000,
    image: '/Tanzania-solar.jpeg',
  },
  {
    id: 3,
    title: 'Solar-Powered Agriculture',
    company: 'AgriSun',
    location: 'Uganda',
    status: 'Funding',
    fundingProgress: 150000,
    fundingGoal: 300000,
    co2Reduction: 800,
    carbonCredits: 800,
    beneficiaries: 3000,
    image: '/Uganda-solar.jpeg',
  },
]

export default function ProjectShowcase() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Solar Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solarProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: SolarProject }) {
  const fundingPercentage = (project.fundingProgress / project.fundingGoal) * 100

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">{project.company}</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">{project.location}</span>
        </div>
        <div className="flex items-center mb-4">
          <Sun className="h-5 w-5 text-yellow-500 mr-2" />
          <span className={`text-sm font-semibold ${
            project.status === 'Active' ? 'text-green-500' :
            project.status === 'Funding' ? 'text-yellow-500' :
            'text-blue-500'
          }`}>{project.status}</span>
        </div>
        <div className="mb-4">
          <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${fundingPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1">
            <span>{fundingPercentage.toFixed(0)}% Funded</span>
            <span>${project.fundingProgress.toLocaleString()} / ${project.fundingGoal.toLocaleString()}</span>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
          <p>CO2 Reduction: {project.co2Reduction.toLocaleString()} tons/year</p>
          <p>Carbon Credits: {project.carbonCredits.toLocaleString()} credits/year</p>
          <p>Beneficiaries: {project.beneficiaries.toLocaleString()} people</p>
        </div>
        <Button className="w-full">Invest Now</Button>
      </div>
    </div>
  )
}