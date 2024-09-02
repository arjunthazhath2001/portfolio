import React from 'react';
import Image from 'next/image';
import react from '@/app/assets/icons/react.svg';
import tw from '@/app/assets/icons/tailwind.svg';
import js from '@/app/assets/icons/javascript.svg';
import py from '@/app/assets/icons/python.svg';
import oauth from '@/app/assets/icons/0Auth.svg';
import sql from '@/app/assets/icons/sql.svg';
import '@/app/globals.css';
import { LinkedInIcon } from './ui/LinkedInIcon';
import { GithubIcon } from './ui/GithubIcon';
import { UpworkIcon } from './ui/UpworkIcon';
import { MailIcon } from './ui/MailIcon';
import TechIconsScroll from './ui/TechIcons';
import yt from '@/app/assets/yt.png'
import cr from '@/app/assets/CRYP.png'
import VisitIcon from './ui/VisitIcon';


function Row2() {
    return (
      <div className="w-full min-h-screen gap-4 grid grid-cols-12 justify-start mb-10">
        <div className="col-span-6 ml-14 rounded-3xl flex flex-col">
            <div className='gap-2 grid grid-cols-12'>
              <div className="col-span-4 rounded-3xl">
                <div className='bg-white shadow-md mb-5 h-32 p-5 rounded-3xl'>
                    <LinkedInIcon/>
                </div>
                <div className='bg-white shadow-md mb-5 h-32 p-5 rounded-3xl'>
                    <GithubIcon/>
                </div>
                <div className='bg-white shadow-md h-32 p-5 rounded-3xl'>
                    <UpworkIcon/>
                </div>
              </div>


              <div className="col-span-8 ml-2 rounded-3xl">
                 <div className='bg-white mb-5 h-[276px] p-5 rounded-3xl  shadow-md grid grid-rows-12'> 
                    <div className='row-span-8'>
                      <TechIconsScroll/>
                    </div>
                    <div className='row-span-4 text-3xl font-mono text-center mt-3 text-slate-600'>
                      TECH I 💖
                    </div>
                  </div>

                <div className='bg-white h-32 p-5 shadow-md rounded-3xl'>
                    <MailIcon/>
                </div>
              </div>
            </div>

            <div className='gap-2 grid grid-cols-12 bg-white shadow-md rounded-3xl p-9 mt-4 grid-rows-12'>
                       <div className='bg-black row-span-8 col-span-12 h-[290px] shadow-lg flex items-center'>
                        <Image src={yt} alt="youtube icon" height={440}></Image>
                       </div>

                       <div className='row-span-4 col-span-12'>
                       <div className='text-4xl font-mono text-gray-500 pt-3 flex justify-between items-center'>
                          YOUTUBE UPLOADER
                          <a href="https://github.com/arjunthazhath2001/youtube-uploader/tree/master" target="_blank" rel="noopener noreferrer">
                            <VisitIcon />
                          </a>
                        </div>

                          <div className='flex flex-row mt-8'>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={react} alt="reactjs" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={tw} alt="tailwind" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={js} alt="javascript" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={py} alt="python" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={oauth} alt="oauth" width={40} height={40} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={sql} alt="sql" width={80} height={80} />
                            </div>
                          </div>
                       </div>
            </div>

            
          
        </div>
        <div className="col-span-6 mr-14 rounded-3xl flex flex-col">
        <div className='gap-2 grid grid-cols-12 bg-white shadow-md rounded-3xl p-9 grid-rows-12'>
                       <div className=' bg-custom-gray row-span-8 col-span-12 h-[290px] shadow-lg flex items-center'>
                        <Image src={cr} alt="wallet image" height={440}></Image>
                       </div>

                       <div className='row-span-4 col-span-12'>
                       <div className='text-4xl font-mono text-gray-500 pt-3 flex justify-between items-center'>
                          CRYPTO WALLET
                          <a href="https://github.com/arjunthazhath2001/webwallet" target="_blank" rel="noopener noreferrer">
                            <VisitIcon />
                          </a>
                        </div>

                          <div className='flex flex-row mt-8'>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={react} alt="reactjs" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={tw} alt="tailwind" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={js} alt="javascript" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={py} alt="python" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 items-center flex justify bg-center hover:scale-110 duration-300'>
                            <Image src={sql} alt="sql" width={80} height={80} />
                            </div>
                          </div>
                       </div>
            </div>
        </div>
    </div>
  );
}

export default Row2;


        
  