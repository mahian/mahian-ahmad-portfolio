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
            return (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer group">
                <div className="md:flex relative">
                  <img alt="gallery" className="inset-0 h-full object-center" src="https://i.ytimg.com/vi/flAcHu-squc/maxresdefault.jpg" />
                  <div className="md:absolute md:px-8 z-10 pt-5 md:py-10 md:bg-black/60 md:opacity-0 hover:opacity-100 transition-all">
                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">The Hero section</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3">
                      More details
                    </button>
                  </div>
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