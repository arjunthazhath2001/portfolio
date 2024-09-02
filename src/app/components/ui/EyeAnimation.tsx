"use client"; // This makes the component a client component

import { Player } from '@lottiefiles/react-lottie-player';
import eye from '@/app/assets/eye.json';

export default function EyeAnimation() {
  return (
    <a href="/Arjun_CV.pdf" target="_blank" rel="noopener noreferrer">
      <Player
        hover  // Add this property to trigger the animation on hover
        loop
        src={eye}
        style={{ height: '60px', width: '60px' }}
        className='hover:scale-110 duration-300 cursor-pointer'
      />
    </a>
  );
}
