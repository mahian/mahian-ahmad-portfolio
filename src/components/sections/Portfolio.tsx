import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SectionTitle from '../utills/SectionTitle';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch('portfolio.json')
      .then(response => response.json())
      .then(data => setPortfolios(data));
  }, []);
  return (
    <section className="text-gray-600 body-font" id='portfolio'>
      <div className="pb-20 mx-auto">
        <div className='container mx-auto px-5 '>
          <SectionTitle>portfolio</SectionTitle>
        </div>
        <div className="container mx-auto px-5 flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 bg-white text-gray-800">
          <Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 space-x-2text-gray-600 bg-gray-100">
            <span>All</span>
          </Link>
          <Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
            <span>Front-end</span>
          </Link>
          <Link rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
            <span>backend</span>
          </Link>
        </div>

        {/* portfolio section */}
        <section className="py-10 bg-gray-100">
          <div className="container px-5 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolios.map((portfolio: any, index: number) => {
              const { thumbnail, name, subtitle, liveLink } = portfolio;
              return (
                <article key={index} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <Link href={liveLink} target="_blank">
                    <div className="relative flex overflow-hidden h-40 rounded-xl">
                      <img className='w-full object-cover' src={thumbnail} alt="portfolio_thumbnail" />
                    </div>
                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700 font-bold text-2xl">{name}</h2>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
                        <Link href={liveLink} target="_blank">
                          <div className="h-10 w-10 flex items-center justify-center rounded-full border border-primary hover:bg-primary text-primary hover:text-white duration-100">
                            <ArrowRightIcon className='h-5'/>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;