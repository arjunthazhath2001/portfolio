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
import yt from '@/app/assets/yt.png';
import cr from '@/app/assets/CRYP.png';
import VisitIcon from './ui/VisitIcon';

function Row2() {
    return (
        <div className="w-full min-h-screen gap-4 lg:gap-2 grid grid-cols-1 lg:grid-cols-2 justify-start mb-10 md:mx-14"> {/* Adjusted gap-x */}
            <div className="col-span-12 lg:col-span-1 mx-4 md:ml-12 lg:ml-6 rounded-3xl flex flex-col"> {/* Adjusted mx */}
                <div className='gap-2 grid grid-cols-12'>
                    <div className="col-span-12 md:col-span-4 rounded-3xl mb-2">
                        <div className='bg-white shadow-md mb-5 h-32 p-4 rounded-3xl'> {/* Adjusted padding */}
                            <LinkedInIcon />
                        </div>
                        <div className='bg-white shadow-md mb-5 h-32 p-4 rounded-3xl'>
                            <GithubIcon />
                        </div>
                        <div className='bg-white shadow-md h-32 p-4 rounded-3xl'>
                            <UpworkIcon />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 ml-0 md:ml-2 rounded-3xl">
                        <div className='bg-white mb-5 h-[276px] p-4 rounded-3xl shadow-md grid grid-rows-12'> {/* Adjusted padding */}
                            <div className='row-span-8'>
                                <TechIconsScroll />
                            </div>
                            <div className='row-span-4 text-3xl font-mono text-center mt-3 text-slate-600'>
                                TECH I 💖
                            </div>
                        </div>
                        <div className='bg-white h-32 p-4 shadow-md rounded-3xl'> {/* Adjusted padding */}
                            <MailIcon />
                        </div>
                    </div>
                </div>

                <div className='gap-2 grid grid-cols-12 bg-white shadow-md rounded-3xl p-8 mt-4 grid-rows-12'> {/* Adjusted padding */}
                    <div className='bg-black row-span-6 md:row-span-8 col-span-12 h-[250px] md:h-[290px] shadow-lg flex items-center justify-center'>
                        <Image src={yt} alt="youtube icon" height={440} />
                    </div>
                    <div className='row-span-6 md:row-span-4 col-span-12'>
                        <div className='text-4xl font-mono text-gray-500 pt-3 flex justify-between items-center'>
                            YOUTUBE UPLOADER
                            <a href="https://github.com/arjunthazhath2001/youtube-uploader/tree/master" target="_blank" rel="noopener noreferrer">
                                <VisitIcon />
                            </a>
                        </div>
                        <div className='flex flex-row mt-4 md:mt-8 flex-wrap'>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={react} alt="reactjs" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={tw} alt="tailwind" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={js} alt="javascript" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={py} alt="python" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={oauth} alt="oauth" width={40} height={40} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={sql} alt="sql" width={80} height={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 lg:col-span-1 mx-4 md:mr-12 lg:mr-6 rounded-3xl flex flex-col mt-0 md:mt-0"> {/* Adjusted mx */}
                <div className='gap-2 grid grid-cols-12 bg-white shadow-md rounded-3xl p-8 mt-2 grid-rows-12'> {/* Adjusted padding */}
                    <div className='bg-white row-span-6 md:row-span-8 col-span-12 h-[250px] md:h-[290px] shadow-lg flex items-center justify-center'>
                        <Image src={cr} alt="wallet image" height={440} />
                    </div>
                    <div className='row-span-6 md:row-span-4 col-span-12'>
                        <div className='text-4xl font-mono text-gray-500 pt-3 flex justify-between items-center'>
                            CRYPTO WALLET
                            <a href="https://solanawallet-pearl.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <VisitIcon />
                            </a>
                        </div>
                        <div className='flex flex-row mt-8 flex-wrap'>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={react} alt="reactjs" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={tw} alt="tailwind" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={js} alt="javascript" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-3 flex justify-center items-center hover:scale-110 duration-300'>
                                <Image src={py} alt="python" width={25} height={25} />
                            </div>
                            <div className='bg-gray-200 w-12 h-12 rounded-xl mr-2 p-1 flex justify-center items-center hover:scale-110 duration-300'>
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
