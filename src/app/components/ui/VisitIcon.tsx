"use client"; // This makes the component a client component

import { Player } from '@lottiefiles/react-lottie-player';
import visit from '@/app/assets/Forward.json';

export default function VisitIcon() {
  return (
    <Player
      hover  // Add this property to trigger the animation on hover
      loop
      src={visit}
      style={{ height: '55px', width: '55px' }}
      className='hover:scale-110 duration-300 cursor-pointer'    
      
    />
  );
}
