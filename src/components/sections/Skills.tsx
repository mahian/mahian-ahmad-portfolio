import React from 'react';
import SectionTitle from '../utills/SectionTitle';

const Skills = () => {
    const skills = [
        {
            name: "React",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/react.png"
        },
        {
            name: "Next js",
            level: "Expert",
            experience: "1 year",
            logo: "assets/skills/next-logo.png"
        },
        {
            name: "Typescript",
            level: "Intermediate",
            experience: "6 month",
            logo: "assets/skills/typescript.png"
        },
        {
            name: "HTML",
            level: "Expert",
            experience: "3 year",
            logo: "assets/skills/html.png"
        },
        {
            name: "CSS",
            level: "Expert",
            experience: "3 year",
            logo: "assets/skills/css.png"
        },
        {
            name: "Js",
            level: "Intermediate",
            experience: "2 year",
            logo: "assets/skills/js.png"
        },
        {
            name: "Tailwind",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/tailwind.png"
        },
        {
            name: "Bootstrap",
            level: "Expert",
            experience: "2 year",
            logo: "assets/skills/bootstrap.png"
        },
    ]
    return (
        <div className='py-10'>
            <SectionTitle>Skills</SectionTitle>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    skills.map((skill, index) => (
                        <div key={index} className='bg-gray-100 p-3 rounded-lg sm:flex justify-between'>
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
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;