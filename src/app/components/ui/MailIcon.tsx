import React from "react";
import Image from "next/image";
import mail from '@/app/assets/email-dark.svg';


export function MailIcon() {
  return (
    <div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
      <a
        className="w-[85%] h-[85%] flex items-center justify-center rounded-3xl"
        href="mailto:arjunta32@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-full w-auto aspect-square">
          <Image
            alt="mail"
            src={mail} // Adjust the path as needed
            layout="fill"
            objectFit="contain"
          />
        </div>
      </a>
    </div>
  );
}
