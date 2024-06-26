"use client"

import { GlareCard } from "./ui/glare-card";

interface services {
  title: string;
  description: string;
  emoji: string;
}

export function ServiceCards({ title, description, emoji }:services) {
  return (
    <div className="m-8">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="text-[4rem] mb-4">{emoji}</p>
        <p className="font-bold text-white text-lg">{title}</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          {description}
        </p>
      </GlareCard>
    </div>
  );
}
