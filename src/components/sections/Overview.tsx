"use client";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Droplet,
  Radio,
  SunIcon as Solar,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Overview() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-block rounded-full border border-gray-900 px-4 py-2">
            <span className="text-sm font-medium text-green-800">
              Our Mission
            </span>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-gray-600">
            Our mission is to bridge clean energy projects with on-chain finance to create a sustainable, carbon-neutral future.
            </p>
          </div>

          <div className="relative aspect rounded-3xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yd1mMbyxre8pp7oCKlkTrDvUmiJxeP.png"
              alt="Solar panel farm"
              className="object-cover w-full h-full"
            />
          </div>
          <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 h-12">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            icon={<Solar className="h-6 w-6" />}
            title="Clean Energy Production"
            description="Contribute to the generation of renewable energy, reducing reliance on fossil fuels."
            highlighted={false}
          />
          <FeatureCard
            icon={<Solar className="h-6 w-6" />}
            title="Financial Returns"
            description="Earn competitive returns on your investment while supporting sustainable development."
            highlighted={true}
          />
          <FeatureCard
            icon={<Radio className="h-6 w-6" />}
            title="Zero Emission"
            description="We convert solar energy to 100% renewable power"
            highlighted={false}
          />
          <FeatureCard
            icon={<Droplet className="h-6 w-6" />}
            title="Clean Energy"
            description="We convert solar energy to 100% renewable power"
            highlighted={false}
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  highlighted,
}: FeatureCardProps) {
  return (
    <Card className={`p-6 ${highlighted ? "bg-emerald-100" : "bg-gray-50"}`}>
      <div className="space-y-4">
        <div className="text-gray-700">{icon}</div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Card>
  );
}
