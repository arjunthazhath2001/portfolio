import React from "react";
import Image from "next/image";
import upwork from '@/app/assets/upwork.svg';


export function UpworkIcon() {
  return (
    <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
      <a
        className="w-[80%] h-[80%] flex items-center justify-center rounded-3xl"
        href="https://www.upwork.com/freelancers/arjunt3?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-full w-auto aspect-square">
          <Image
            alt="Upwork"
            src={upwork} // Adjust the path as needed
            layout="fill"
            objectFit="contain"
          />
        </div>
      </a>
    </div>
  );
}
