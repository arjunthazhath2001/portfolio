import React from 'react';
import Image from 'next/image';
import arjun from '@/app/assets/arjun.png';
import map from '@/app/assets/map.png';
import '@/app/globals.css';
import LottieAnimation from './ui/LottieAnimation'; // Import the client component
import EyeAnimation from './ui/EyeAnimation';
import HorizontalScroll from './ui/HorizontalScroll';
import ps from '@/app/assets/icons/photoshop.svg';
import pr from '@/app/assets/icons/premiere.svg';
import ai from '@/app/assets/icons/illustrator.svg';

function Row1() {
  return (
    <div className="w-full h-auto font-mono gap-4 grid grid-cols-12 justify-start mb-5 mt-4 px-4 sm:px-6 md:px-14">
      <div className="col-span-12 md:col-span-5 bg-white shadow-lg rounded-3xl flex flex-col p-4 sm:p-6">
        <div className="flex flex-1 pt-3 items-center justify-between">    
          <Image src={arjun} alt="Arjun" className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 hover:scale-105 duration-300"/>
          <div className="font-semibold mr-60 text-lg sm:text-2xl md:text-4xl ml-4 sm:mr-24 sm:ml-6">Arjun T A</div>
        </div>
        <div className="flex flex-1 text-xs sm:text-sm mt-3">
          <span className="leading-relaxed">
            I am a passionate software developer with an insane work ethic.
            <span className="block mt-2">Currently acquiring Web3 & Web Dev skills.</span>
          </span>
        </div>
      </div>

      <div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
        <div className="bg-slate-50 shadow-lg p-2 rounded-3xl w-full h-12 sm:h-14">
          <HorizontalScroll/>
        </div>

        <div className="w-full mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5 bg-slate-100 rounded-3xl overflow-hidden shadow-md relative">
            <Image src={map} alt="Map" layout="fill" objectFit="cover" className="rounded-3xl" />
          </div>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-4 items-center justify-center">
            <div className="bg-white shadow-md rounded-3xl w-full flex flex-row items-center p-4">
              <div className="flex-1">
                <p className="font-light text-neutral-500 text-xs sm:text-sm">2024 CV</p>
                <h1 className="font-semibold text-lg sm:text-2xl">RESUME</h1>
              </div>
              <div className="flex-1 flex gap-4 sm:gap-5 justify-center">
                <LottieAnimation/> 
                <EyeAnimation/>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-3xl w-full p-4 text-center">
              I DESIGN TOO,😋       
              <div className="flex flex-row mt-2 justify-center items-center gap-2 sm:gap-4">
                <div className="bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl p-2 flex items-center justify-center hover:scale-110 duration-300">
                  <Image src={ps} alt="ps" width={25} height={25} />
                </div>
                <div className="bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl p-2 flex items-center justify-center hover:scale-110 duration-300">
                  <Image src={ai} alt="ai" width={25} height={25} />
                </div>
                <div className="bg-gray-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl p-2 flex items-center justify-center hover:scale-110 duration-300">
                  <Image src={pr} alt="pr" width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row1;
