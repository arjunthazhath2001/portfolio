"use client"; // This makes the component a client component

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '@/app/assets/download.json';

export default function LottieAnimation() {
  return (
    <a href="/Arjun_CV.pdf" download="Arjun_TA_Resume.pdf"> {/* Direct URL to the PDF */}
      <Player
        hover  // Add this property to trigger the animation on hover
        loop
        src={animationData}
        style={{ height: '55px', width: '55px' }}
        className='hover:scale-110 duration-300 cursor-pointer'
      />
    </a>
  );
}
