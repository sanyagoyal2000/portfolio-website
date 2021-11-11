import { motion } from "framer-motion"
import Intro from './Intro.js';
import Skills from "./Skills.js";
import Achievement from "./Achievement.js";

function About() {
    return (
       <div className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 pb-3" id="about">
         <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        repeat: 1,
        repeatType: "reverse",
        
      }}
      className=" text-3xl font-semibold pb-5 font-pt pt-4 pl-4 dark:text-red-400 text-gray-800 md:text-center shadow:md shadow:gray-400">ABOUT ME</motion.h2>
         <hr/>
         <br/>
         <Intro />
         <br/><br/>

         <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
        <h2 
    className=" text-3xl font-semibold pb-5 font-pt pt-4 dark:text-white text-blueGray-700">Education</h2>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
</svg></motion.div>
        <div className=" bg-gray-100 mx-auto  mt-2 mb-4 p-4">
            
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" ></div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-4 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-gray-800 sm:text-sm md:text-xl ">Delhi Technological University</h3>
              <p className="sm:text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><i>2019-2023</i><br/>BTech. in Computer Science Engineering<br/>8.90 CGPA till 4<sup>th</sup> semester</p>
            </div>
          </div>
      
          
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-white sm:text-sm md:text-xl">CR Oasis Convent Senior Sec School</h3>
              <p className="sm:text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"><i>2017-2019</i><br/>12<sup>th</sup> standard<br/>94% </p>
            </div>
          </div>
          
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-gray-800 sm:text-sm md:text-xl">Delhi Public School Sector 45,Gurgaon</h3>
              <p className="sm:text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><i>2015-2017</i><br/>10<sup>th</sup> standard<br/>10 CGPA</p>
            </div>
          </div>
          </div>
          </div>
          <br/><br/>
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
        <h2 
    className="text-3xl font-semibold pb-5 font-pt pt-4 dark:text-white text-blueGray-700">Skills</h2>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-blueGray-500 dark:text-teal-600" viewBox="0 0 20 20" fill="currentColor">
  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
</svg></motion.div>
<Skills/>
<br/><br/>
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
      <br/><br/><br/>
        <h2 
    className=" md:text-3xl  font-semibold pb-5 font-pt sm:p-1 md:pt-4 dark:text-white text-blueGray-700">Positions of Responsibility</h2>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
</svg></motion.div>
<Achievement/>
          
          
      </div>
    )
}

export default About
