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
    <div className="w-full h-[17.5rem] font-mono gap-4 grid grid-cols-12 justify-start mb-5 mt-4">
      <div className="col-span-5 ml-14 bg-white shadow-lg rounded-3xl flex flex-col">
        <div className="flex flex-1 pt-3 items-center justify-between">    
            <Image src={arjun} alt="Arjun" className='h-28 w-28 ml-7 hover:scale-105 duration-300'/>
            <div className='mr-24 font-semibold text-4xl'>Arjun T A</div>
        </div>
        <div className='flex flex-1 text-sm'>
            <span className='mx-8 my-3'>I am a passionate software developer with an insane work ethic.<span className='mt-12'> Currently acquiring Web3 & Web Dev skills.</span>
            </span>
        </div>
      </div>


      <div className="col-span-7 mr-14">
        <div className="bg-slate-50 shadow-lg w-auto p-2 h-14 rounded-3xl">
          <HorizontalScroll/>
        </div>


        <div className="w-auto h-[13rem] mt-4 rounded-3xl grid grid-cols-12 gap-4">
          <div className="bg-slate-100 col-span-5 rounded-3xl overflow-hidden relative shadow-md">
            <Image src={map} alt="Map" layout="fill" objectFit="cover" className="rounded-3xl" />
          </div>

          <div className="col-span-7 flex flex-col gap-2 items-center justify-center">
            <div className='bg-white shadow-md flex-1 rounded-3xl w-full items-center flex flex-row'>
              <div className='flex-1 m-5 ml-9'>
                  <p className='font-light text-sm text-neutral-500'>2024 CV</p>
                  <h1 className='font-semibold text-2xl'>RESUME</h1>
              </div>
              <div className='flex-1 flex flex-row gap-5'>
                <LottieAnimation/> 
                <EyeAnimation/>
              </div>
            </div>


            <div className='bg-white flex-1 shadow-md rounded-3xl w-full p-2 font-mono text-center'>
              I DESIGN TOO,😋       
              <div className='flex flex-row mt-2 justify-center items-center'>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-4 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={ps} alt="ps" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-4 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={ai} alt="ai" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-4 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
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
