"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface blogs {
  title: string;
  url: string;
  description: string;
  thumbnail: StaticImageData;
}

export function BlogsCards({ title, url, description, thumbnail }: blogs) {
  return (
    <div className="h-[25rem] flex items-center justify-center z-10">
      <PinContainer title="/medium.com/@aaradhyablogs">
        <Link
          href={url}
          className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
        >
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !p-0 font-normal mt-2 mb-6">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <Image src={thumbnail} alt={title} />
        </Link>
      </PinContainer>
    </div>
  );
}
