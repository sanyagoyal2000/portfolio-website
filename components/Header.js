
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/solid";
import React, { useState,useEffect } from 'react';


function Header() {
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
           
           <div className="flex items-center justify-end space-x-4 text-gray-800 ">
           
              <ul className="flex text-white font-bold font-rubik uppercase space-x-6 ">
                <li className="mr-2 hover:text-yellow-200"><a>Home</a></li>
                <li className="mr-2 hover:text-yellow-200"><a>About</a></li>
                <li className="mr-2 hover:text-yellow-200"><a>Projects</a></li>
                <li className="mr-2 hover:text-yellow-200"><a>Resume</a></li>
                <li className="mr-2 hover:text-yellow-200"><a>Contact</a></li>
                
              </ul>
           
           </div>

        </header>
        
    )
}

export default Header
