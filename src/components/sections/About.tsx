import React from 'react';
import SectionTitle from '../utills/SectionTitle';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Skills from './Skills';

const About = () => {
    return (
        <section id='about' className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="">
                    <SectionTitle>About me</SectionTitle>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 md:w-1/2 text-center sm:pr-8 sm:py-8">
                            <div className="rounded-lg inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
                                <img src="assets/images/my-image.jpg" alt="" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                <Link target="_blank" href="https://www.facebook.com/mahean.islam.5/" className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaFacebook className='h-5 w-5 fill-current' />
                                </Link>
                                <Link target="_blank" href="https://www.linkedin.com/in/mahianahmad/" className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaLinkedin className='h-5 w-5 fill-current' />
                                </Link>
                                <Link target="_blank" href="https://github.com/mahian" className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaGithub className='h-5 w-5 fill-current' />
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h2 className='font-bold text-4xl'>Mahian Ahmad</h2>
                            <p className="leading-relaxed text-lg mt-4">{"I’m a front end Developer, I love building applications that challenge me as a developer, as it forces me outside my comfort zone where the real learning begins! An adaptable and self-motivated learner with an interest in new programming technologies and self-improvement"}</p>
                            <Link href="#contact" className="text-primary mt-3 inline-flex items-center">Get in touch
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            <Skills/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;