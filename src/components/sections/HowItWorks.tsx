"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800">
    <Image
      src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
      alt="avatar"
      height="100"
      width="100"
      className="h-full w-full object-cover rounded-lg"
    />
  </div>
);

const items = [
  {
    title: "Tokenized Asset Staking",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "Project Tracking",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "Green DAO Participation",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "AI Insights",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "DePin Carbon Mining",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
];

export default function StakeDeployTrack() {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto px-4 pb-12 pt-16 min-h-screen"
    >
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 leading-tight bg-gradient-to-r from-zinc-100 to-gray-400 bg-clip-text text-transparent">
        Stake, Build, Deploy & Track
      </h2>
      <div>
        <BentoGrid className="max-w-5xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
