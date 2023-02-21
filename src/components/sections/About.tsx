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
                        <div className="sm:w-1/3 md:w-1/2 text-center sm:pr-8 sm:py-8">
                            <div className="rounded-lg inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
                                <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/295180433_1389599218214479_7405679272567519554_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFpuKkaaErB_LaWCxu8gwLpif56hKVHbsKJ_nqEpUduwi1tsZd_kzKYCQCZT3FfwDm4h5vRck0yZt0tqfCRCPh-&_nc_ohc=Yv7axQxXrxcAX8P74hR&tn=t9dFul_90A6WQvlC&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfCStRkSuu30q1Ubjd2GzDmrJ9TLDQq1vM-cvdrK5-aGIg&oe=63F6FA6F" alt="" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mt-3">
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaFacebook className='h-5 w-5 fill-current' />
                                </button>
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaLinkedin className='h-5 w-5 fill-current' />
                                </button>
                                <button className="bg-primary p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <FaGithub className='h-5 w-5 fill-current' />
                                </button>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <h2 className='font-bold text-4xl'>Mahian Ahmad</h2>
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