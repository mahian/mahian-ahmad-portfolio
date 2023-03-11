import React, { useState } from 'react';
import SectionTitle from '../utills/SectionTitle';
import { XMarkIcon } from '@heroicons/react/24/solid'

const Skills = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [desc, setDesc] = useState("")

    const toggleModal = (e: any) => {
        setIsOpen(!isOpen);
        setDesc(e);
    };
    const skills = [
        {
            name: "React",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/react.png",
            introduction: "React is an open-source JavaScript library used for building user interfaces (UIs). It was created by Facebook and is now maintained by Facebook and a community of developers. React allows developers to create reusable UI components that can be used across different pages or applications."
        },
        {
            name: "Next js",
            level: "Expert",
            experience: "1 year",
            logo: "assets/skills/next-logo.png",
            introduction: "Next.js is a popular open-source framework for building server-side rendered (SSR) React applications. It was created by Vercel and is now maintained by a community of developers."
        },
        {
            name: "Typescript",
            level: "Intermediate",
            experience: "6 month",
            logo: "assets/skills/typescript.png",
            introduction: "TypeScript is a statically typed superset of JavaScript that adds optional static typing and other features to the language. It was developed by Microsoft and is now an open-source project with a large and active community of contributors."
        },
        {
            name: "HTML",
            level: "Expert",
            experience: "3 year",
            logo: "assets/skills/html.png",
            introduction: "HTML, which stands for Hypertext Markup Language, is a standard markup language used for creating and structuring content on the World Wide Web. It was developed by the World Wide Web Consortium (W3C) and is now widely used by developers to create web pages and applications."
        },
        {
            name: "CSS",
            level: "Expert",
            experience: "3 year",
            logo: "assets/skills/css.png",
            introduction: "CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the presentation of HTML or XML documents on the World Wide Web. It was developed by the World Wide Web Consortium (W3C) and is now widely used by developers to style and layout web pages and applications."
        },
        {
            name: "Js",
            level: "Intermediate",
            experience: "2 year",
            logo: "assets/skills/js.png",
            introduction: "JavaScript, often abbreviated as JS, is a high-level programming language used for creating dynamic and interactive web pages and applications. It was developed by Brendan Eich in the mid-1990s and has since become one of the most widely used programming languages on the web."
        },
        {
            name: "Tailwind",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/tailwind.png",
            introduction: "Tailwind CSS is a popular utility-first CSS framework that allows developers to quickly and easily style and layout web pages and applications. Unlike other CSS frameworks that provide pre-designed components and styles, Tailwind CSS provides a set of low-level utility classes that can be combined to create custom designs."
        },
        {
            name: "Bootstrap",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/bootstrap.png",
            introduction: "Bootstrap is a popular CSS framework that allows developers to quickly and easily create responsive and mobile-first web pages and applications. It was originally developed by Twitter and is now maintained by the open-source community."
        },
    ]
    return (
        <div className='py-10'>
            <SectionTitle>Skills</SectionTitle>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    skills.map((skill, index) => (
                        <>
                            <div key={index} onClick={()=>toggleModal(skill.introduction)} className='bg-gray-100 p-3 rounded-lg sm:flex justify-between cursor-pointer hover:bg-gray-200 transition' title={`get a short introduction about ${skill.name}`}>
                                <img className='w-10 object-contain mb-1 sm:hidden' src={skill.logo} alt="" />
                                <div>
                                    <h3 className='text-left font-bold'>{skill.name}</h3>
                                    <div className='text-sm text-left flex flex-wrap'>
                                        <span className='mr-1'>{skill.experience}</span>
                                        <span className='text-primary'>{skill.level}</span>
                                    </div>
                                </div>
                                <img className='w-10 object-contain hidden sm:block' src={skill.logo} alt="" />
                            </div>
                        </>
                    ))
                }
            </div>

            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-black bg-opacity-75"></div>
                        <div className="relative bg-white max-w-sm rounded-lg">
                            <div className="absolute top-0 right-0 p-2">
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={toggleModal}>
                                    <XMarkIcon className='h-5 w-5'/>
                                </button>
                            </div>
                            <div className="p-6 mt-2">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Skills;