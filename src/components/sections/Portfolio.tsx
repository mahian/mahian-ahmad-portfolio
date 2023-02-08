import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../utills/SectionTitle';

const Portfolio = () => {
  const portfolios = useSelector((state: any) => state.allPortfolios.portfolios);
  console.log(portfolios)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle>portfolio</SectionTitle>
        <div className="flex flex-wrap -m-4">
          {portfolios.map((portfolio: any, index: number) => {
            const {thumbnail} = portfolio
            return (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group">
                <div className="md:flex relative overflow-hidden rounded-lg">
                  <img alt="gallery" className="group-hover:scale-110 transition-all h-full" src={thumbnail} />
                </div>
                <div className="">
                  <h1 className="text-lg font-bold text-gray-900">The Hero section</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk</p>
                  <button className="bg-primary text-gray-800 hover:bg-opacity-90 font-bold py-2 px-4 rounded inline-flex items-center mt-3">
                    More details
                  </button>
                </div>
              </div>
            )
          })}


        </div>
      </div>
    </section>
  );
};

export default Portfolio;