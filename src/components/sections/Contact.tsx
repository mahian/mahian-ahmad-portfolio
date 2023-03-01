import React from 'react';
import SectionTitle from '../utills/SectionTitle';
import {MdLocationOn, MdPhone, MdEmail} from 'react-icons/md';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id='contact' className="relative z-10 overflow-hidden bg-white pb-20">
      <div className="container mx-auto px-5">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <SectionTitle>Get in touch</SectionTitle>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div
                  className="bg-blue-500 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
                >
                  <MdLocationOn className='w-8 h-8' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">Location</h4>
                  <p className="text-body-color text-base">
                    Kauniya branch road, barishal, bangladesh
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div
                  className="bg-blue-500 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
                >
                  <MdPhone className='w-8 h-8' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                  <Link href="tel:+880 1706-988476" className='hover:underline'><p className="text-body-color text-base">(+880)1706 988476</p></Link>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div
                  className="bg-blue-500 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
                >
                  <MdEmail className='w-8 h-8' />
                </div>
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                  <Link href="mailto:mahianahmad9@gmail.com" className='hover:underline'><p className="text-body-color text-base">mahianahmad9@gmail.com</p></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-xl sm:p-12">
              <form action='https://formspree.io/f/mzbqggdq' method='POST'>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    name="message"
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;