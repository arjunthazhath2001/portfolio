import React from 'react';
import Image from 'next/image';
import star from '@/app/assets/star.svg'; 

const MovingPhrase: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 h-full rounded-3xl overflow-hidden relative whitespace-nowrap">
      <div className="flex custom-width bg-slate-100 justify-start items-center mt-2 animate-scroll whitespace-nowrap">
        {Array(80).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            <Image src={star} alt="Star" className="w-4 h-4 mx-1" />
            <span className="mx-2 text-base font-normal">PERSONAL <span className='font-bold'>PORTFOLIO</span></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MovingPhrase;
