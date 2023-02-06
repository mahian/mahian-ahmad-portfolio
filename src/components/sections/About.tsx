import React from 'react';
import SectionTitle from '../utills/SectionTitle';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="">
                    <SectionTitle>About me</SectionTitle>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Mahian ahmad</h2>
                                <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                                <p className="text-base">Front end developer in bangladesh.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaFacebook className='h-5 w-5 fill-current'/>
                                </button>
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaLinkedin className='h-5 w-5 fill-current'/>
                                </button>
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaGithub className='h-5 w-5 fill-current'/>
                                </button>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{"I’m a front end Developer, I love building applications that challenge me as a developer, as it forces me outside my comfort zone where the real learning begins! An adaptable and self-motivated learner with an interest in new programming technologies and self-improvement"}</p>
                            <a className="text-primary inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;