import React from 'react';
import { ArrowDownTrayIcon, Bars3BottomRightIcon, BeakerIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
    const menus = ["home", "about", "services", "portfolio", "contact"];
    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [collapsMenu, setCollapsMenu] = React.useState(false);
    const [portfolios, setPortfolios] = React.useState([]);

    React.useEffect(() => {
        fetch('portfolio.json')
            .then(response => response.json())
            .then(data => setPortfolios(data));
    }, []);

    const openDemo = () => {
        if (!openDropdown) {
            setOpenDropdown(true)
        } else {
            setOpenDropdown(!openDropdown)
        }
    }

    return (
        <nav className="z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-gray-800 absolute">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                    <Link className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary" href="../../index.html">MAHIAN.</Link>
                    <button onClick={()=>!collapsMenu? setCollapsMenu(true): setCollapsMenu(!collapsMenu)} className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <Bars3BottomRightIcon className='h-5 text-white' />
                    </button>
                </div>
                <div className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none bg-blueGray-800" id="example-collapse-navbar ${!collapsMenu ? "hidden" : "block"}`}>
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        {
                            menus.map((menu, index) => (
                                <li key={index} className="flex items-center">
                                    <Link className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href={`#${menu}`}><i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i> {menu}</Link>
                                </li>
                            ))
                        }

                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                        <li className="inline-block relative">
                            <button onClick={openDemo} className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                Demo Pages
                            </button>
                            <div className={`${openDropdown ? 'block' : 'hidden'} bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute`} id="demo-pages-dropdown">
                                {
                                    portfolios.map((demo: any, index) => (
                                        <Link key={index} href={demo.liveLink} className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                                            {demo.name}
                                        </Link>
                                    ))
                                }

                            </div>
                        </li>
                        <li className="flex items-center">
                            <Link className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="">
                                <AiFillGithub className='h-5 w-5' />
                                <span className="lg:hidden inline-block ml-2">Github</span>
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <a className="bg-white flex items-center text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" href="https://www.creative-tim.com/product/notus-js?ref=njs-index">
                                <ArrowDownTrayIcon className='h-5 mr-3' /> Download resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;