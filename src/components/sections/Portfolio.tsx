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
    <section className="text-gray-600 body-font">
      <div className="py-24 mx-auto">
        <div className='container mx-auto px-5 '>
          <SectionTitle>portfolio</SectionTitle>
        </div>
        <div className="container mx-auto px-5 flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 bg-white text-gray-800">
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Architecto</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Corrupti</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Excepturi</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span>Consectetur</span>
          </a>
        </div>

        {/* portfolio section */}
        <section className="py-10 bg-gray-100">
          <div className="container px-5 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolios.map((portfolio: any, index: number) => {
              const { thumbnail, name, subtitle, liveLink } = portfolio;
              return (
                <article key={index} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <Link href={liveLink}>
                    <div className="relative flex overflow-hidden h-40 rounded-xl">
                      <img className='w-full object-cover' src={thumbnail} alt="portfolio_thumbnail" />
                    </div>
                    <div className="mt-1 p-2">
                      <h2 className="text-slate-700 font-bold text-2xl">{name}</h2>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
                        <Link href={liveLink}>
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