// Import the main component
import { useState } from 'react';
import { motion } from "framer-motion"

 

function Resume() {
    const [embedURL]=useState("https://drive.google.com/file/d/1rgehSUqdQu5zN7AAm-gDFuPfxnfnjGrs/preview");
   return(
       <div id="resume" className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">
        <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        
      }}
      className="text-3xl font-semibold pb-5 font-pt pt-4 pl-4 text-gray-800 md:text-center shadow:md shadow:gray-400">RESUME</motion.h2>
      <hr/>
      <br/>
       <iframe src={embedURL} className=" md: ml-10 sm:w-[600px] sm:h-[400px] md:w-[1000px] md:h-[500px]"/>
       </div>
    )}

export default Resume
