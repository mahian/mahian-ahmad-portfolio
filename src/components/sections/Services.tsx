import React from 'react';
import SectionTitle from '../utills/SectionTitle';
import { CodeBracketIcon } from '@heroicons/react/24/solid'

const Services = () => {
    const servicesData = [
        {
            title: "Website development",
            desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
            icon: <CodeBracketIcon className='h-16 w-16' />
        },
        {
            title: "Website development",
            desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
            icon: <CodeBracketIcon className='h-16 w-16' />
        },
        {
            title: "Website development",
            desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
            icon: <CodeBracketIcon className='h-16 w-16' />
        }
    ]
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <SectionTitle>Services</SectionTitle>
                <div className="flex flex-wrap -m-4">
                    {servicesData.map((service, index) => {
                        const {title, desc, icon} = service;
                        return (
                            <div key={index} className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer group">
                                <div className="bg-white hover:bg-primary hover:text-white shadow-md p-6 rounded-lg">
                                    <div className='text-primary group-hover:text-white'>{icon}</div>
                                    <h2 className="text-lg text-gray-900 group-hover:text-white font-medium title-font mb-2">{title}</h2>
                                    <p className="leading-relaxed text-base">{desc}</p>
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