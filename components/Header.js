
import Image from "next/image";

import Link from 'next/link'

import { Transition } from "@headlessui/react";
import React, { useState,useEffect } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
       if (window.scrollY > 80) {
         setHandleShow(true); 
         } else 
         setHandleShow(false); 
       }; 
       window.addEventListener("scroll", listener);
       
       return () => { 
         window.removeEventListener("scroll", listener); 
       }; 
     }, []);
    return (
        
      <header className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 ${handleShow ? "bg-gray-800 shadow-md" : ""} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `}> 
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/59a379a9cc89f2108bfaa6d5871a881b1dcc6a04/final%20(150%20x%2060%20px)%20(50%20x%2040%20px).svg" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           
           <div className="hidden md:flex items-center justify-end space-x-4 text-gray-800 ">
           
              <ul className="flex text-white font-bold font-rubik uppercase space-x-6 ">
                <li className="mr-2 hover:text-yellow-200 cursor-pointer"><Link href="/"><a>Home</a></Link></li>
                <li className="mr-2 hover:text-yellow-200 cursor-pointer"><Link href="/about"><a>About</a></Link></li>
                <li className="mr-2 hover:text-yellow-200 cursor-pointer"><Link href="/projects"><a>Projects</a></Link></li>
                <li className="mr-2 hover:text-yellow-200 cursor-pointer"><Link href="/resume"><a>Resume</a></Link></li>
                <li className="mr-2 hover:text-yellow-200 cursor-pointer"><Link href="/contact"><a>Contact</a></Link></li>
                
              </ul>
           
           </div>
           <div className="-mr-2 flex md:hidden items-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-4 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-2 w-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
         

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-1 pb-2 space-y-1 sm:px-3">
              <Link href="/projects">
                <a
                  
                  className="hover:bg-gray-700 text-white block px-2 py-1 rounded-md text-xs "
                >
                  Home
                </a></Link>

                <a
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-xs "
                >
                  About
                </a>

                <a
                 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-xs "
                >
                  Projects
                </a>

                <a
                 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-xs "
                >
                  Resume
                </a>

                <a
                 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-1 rounded-md text-xs "
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>

        </header>
        
    )
}

export default Header
