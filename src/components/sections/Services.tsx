import React from 'react';
import SectionTitle from '../utills/SectionTitle';
import {MdDevices, MdDesignServices, MdAccessibility} from 'react-icons/md';
import {TbBrowserCheck} from 'react-icons/tb';
import {HiWrenchScrewdriver} from 'react-icons/hi2';
import {FaCode} from 'react-icons/fa';

const Services = () => {
    const servicesData = [
        {
            title: "Website Design",
            desc: "As a front-end web developer, you can offer website design services to clients. This involves creating a visually appealing and functional website layout that is responsive to different devices. You can use tools like Sketch, Figma, or Adobe XD to create wireframes and prototypes, and then translate them into HTML, CSS, and JavaScript code.",
            icon: <MdDesignServices className='h-16 w-16' />
        },
        {
            title: "Website development",
            desc: "In addition to design, you can also offer website development services. This involves writing code in HTML, CSS, and JavaScript to build websites from scratch or customize existing templates. You can also integrate third-party libraries and APIs, and optimize websites for performance and SEO.",
            icon: <FaCode className='h-16 w-16' />
        },
        {
            title: "Responsive Design",
            desc: "With the proliferation of mobile devices, it's important for websites to be responsive to different screen sizes. You can specialize in responsive design, ensuring that websites adapt to different devices and provide a seamless user experience across all platforms.",
            icon: <MdDevices className='h-16 w-16' />
        },
        {
            title: "Cross-Browser Compatibility",
            desc: "Different web browsers (e.g. Chrome, Firefox, Safari, Edge) can interpret HTML, CSS, and JavaScript code differently, leading to inconsistencies in website appearance and functionality. You can specialize in cross-browser compatibility, testing websites on multiple browsers and ensuring that they look and work the same way on all of them.",
            icon: <TbBrowserCheck className='h-16 w-16' />
        },
        {
            title: "Accessibility",
            desc: "Making websites accessible to people with disabilities (e.g. vision impairment, hearing impairment, motor impairment) is an important consideration for any web developer. You can specialize in accessibility, following best practices and guidelines to ensure that websites are usable by as many people as possible.",
            icon: <MdAccessibility className='h-16 w-16' />
        },
        {
            title: "Website Maintenance",
            desc: "Once a website is built, it requires ongoing maintenance and updates to ensure that it continues to function properly and remains secure. You can offer website maintenance services, providing regular backups, updates, and security checks to keep websites running smoothly. You can also troubleshoot and fix any issues that arise over time.",
            icon: <HiWrenchScrewdriver className='h-16 w-16' />
        },
    ]
    return (
        <section id='services'>
            <div className="container px-5 pb-20 mx-auto">
                <SectionTitle>Services</SectionTitle>
                <div className="flex flex-wrap -m-4">
                    {servicesData.map((service, index) => {
                        const { title, desc, icon } = service;
                        return (
                            <div key={index} className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer">
                                <div className="bg-white group hover:bg-primary hover:text-white shadow-md p-6 rounded-lg">
                                    <div className='text-primary group-hover:text-white'>{icon}</div>
                                    <h2 className="text-2xl text-gray-900 group-hover:text-white font-medium title-font mb-2">{title}</h2>
                                    <p className="leading-relaxed text-base">{desc.length > 150 ? desc.slice(0, 150) : desc }
                                    <button className='text-yellow-500 ml-1 hover:underline'>Show more</button>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;