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
        <header className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 ${handleShow ? "bg-blue-600 shadow-md" : ""} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `}>
            <div className="flex space-x-4 items-center text-white text-bold">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contactme">Contact me</a></li>

            </ul>
            </div>
        </header>
    )
}

export default Header
