import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <footer className="container mx-auto px-5 md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="assets/images/logo.png" alt="" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                        <li className='mr-3'>
                            <Link target="_blank" href="https://www.facebook.com/mahean.islam.5/" className="mr-4 hover:underline md:mr-6 "><FaFacebook className='w-8 h-8' /></Link>
                        </li>
                        <li className='mr-3'>
                            <Link target="_blank" href="https://www.linkedin.com/in/mahianahmad/" className="mr-4 hover:underline md:mr-6 "><FaLinkedin className='w-8 h-8' /></Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://github.com/mahian" className="mr-4 hover:underline md:mr-6 "><FaGithub className='w-8 h-8' /></Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© <a href="" className="hover:underline">Mahian Ahmad</a>. All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};

export default Footer;