"use client"

export default function CoreFeatures() {
  const features = [
    {
      title: "Trustless Energy Investments",
      description:
        "Secure, verifiable transactions for effortless green investments, powered by AI to identify optimal returns and carbon impact.",
      icon: "Leaf",
      color: "blue-500",
      label: "INVEST",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "Scalable Layer 2 Framework",
      description:
        "High-speed, low-cost transactions suited for large-scale renewable energy initiatives.",
      icon: "Layers",
      color:"green-500",
      label: "CONNECT",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "Tokenization of Renewable Assets",
      description:
        "Convert solar, wind, and other clean energy projects into asset-backed tokens, making them accessible and tradable.",
      icon: "SunMedium",
      //   colors: ["amber-600", "emerald-500"],
      label: "TOKENIZE",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "DePin Devices & Carbon Credit Mining",
      description:
        "Deploy DePin (Decentralized Physical Infrastructure) devices to track, verify, and mine carbon credits on-chain—rewarding eco-friendly participation.",
      icon: "Factory",
        color:"orange-500",
      label: "DEPLOY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "AI-Driven Eco Solutions",
      description:
        "Leverage AI to analyze market data, forecast energy demands, and streamline green transitions in real-time.",
      icon: "Brain",
      colors: "oga-yellow-dark",
      label: "ANALYZE",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
    {
      title: "DAO-Driven Governance",
      description:
        "Community-led decisions on funding and resource allocation, promoting transparent management of green projects.",
      icon: "Users",
      color:"green-500",
      label: "GOVERN",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLDwIE5hh4EaA9xmT2uXoy8Bo9AEz1.png",
    },
  ];

  return (
    <div className="relative mx-auto px-4 pb-12 pt-16 min-h-screen bg-neutral-900 bg-opacity-20 backdrop-blur-lg backdrop-filter">
        <div className="glowing-ellipse h-24 w-24"></div>
        <div className="glowing-ellipse h-24 w-24 bottom-0 right-0"></div>

      <h2 className=" text-center text-3xl md:text-5xl font-bold mb-16 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
        Core Features
      </h2>
      <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-12 p-3 md:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            className="relative w-full rounded-[22px] max-w-sm max-h-[] p-4 sm:p-10 overflow-visible rounded-3xl bg-zinc-900"
            key={index}
          >
            <div className={`absolute inset-0  blur-3xl`} />
            {feature.image && (
              <div className="absolute -top-5 right-7/12 -translate-x-1/2">
                <div className="relative w-28 h-28">
                  <img
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    className="object-contain drop-shadow-[0_0_40px_rgba(45,212,191,0.3)]"
                  />
                </div>
              </div>
            )}
            <div className="relative mt-20">
              {/* <div className={`text-sm font-medium text-${feature.colors[0]} tracking-wider mb-4`}>
                {feature.label}
              </div> */}

              <h2
                className={`text-2xl font-bold text-${
                  feature?.color ?? "oga-yellow"
                } mb-4 flex items-center gap-4`}
              >
                {feature.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
