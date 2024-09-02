import React from "react";
import Image from "next/image";
import linkedn from '@/app/assets/linkedin-dark.svg'


export function LinkedInIcon() {
  return (
    <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
      <a
        className="w-[80%] h-[80%] flex items-center justify-center rounded-3xl"
        href="https://www.linkedin.com/in/arjun-t-a-583a84313"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-full w-auto aspect-square">
          <Image
            alt="LinkedIn"
            src={linkedn} // Adjust the path as needed
            layout="fill"
            objectFit="contain"
          />
        </div>
      </a>
    </div>
  );
}
