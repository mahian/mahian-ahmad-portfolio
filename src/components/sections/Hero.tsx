import React from "react";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import {BsFillEyeFill} from 'react-icons/bs'
import Link from "next/link";


const Hero = () => {
    return (
        <>
            <div className="relative w-full min-h-screen flex pb-10">
                <div className="hidden md:block">
                    <img className="absolute bg-cover bg-center w-full h-full object-cover inset-0" src="assets/images/background.jpg" />
                </div>
                <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                    <div className="text-color w-full md:w-1/2 pt-16 lg:pt-32 xl:pt-12">
                        <h1 className="text-6xl mt-10 md:mt-0 w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">I am Mahian</h1>
                        <p className="text-2xl w-11/12 lg:w-11/12 xl:w-full mt-3 text-gray-600 font-semibold">Front End Developer</p>
                        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                            <h2>The next big thing starts here. Start building with Prodify and be the first to market with a product that is ready to take on the competition and delight your customers</h2>
                        </div>
                        <img className="w-full md:hidden md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0 rounded-lg" src="assets/images/hero.webp" alt="sample page" role="img" />
                        <div className="lg:flex">
                            <Link href="https://drive.google.com/file/d/1m4jno2qeLwNLRmme4zWjZY_fvh-UdglO/view" target="_blank" className="flex justify-center hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r p-4  bg-primary text-white font-bold focus:outline-none uppercase rounded">Download resume <ArrowDownTrayIcon className='h-5 w-5 ml-3' /></Link>
                            <Link href="#portfolio" className="flex justify-center hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r p-4 bg-white text-primary font-medium focus:outline-none uppercase rounded whitespace-nowrap">explore demo <BsFillEyeFill className='h-5 w-5 ml-3' /></Link>
                        </div>
                    </div>
                    {/* <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-primary text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded">Start building now</button>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded">Try it out</button> */}
                </div>
            </div>


            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
};

export default Hero;