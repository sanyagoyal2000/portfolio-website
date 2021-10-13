// Import the main component
import { useState } from 'react';

 

function Resume() {
    const [embedURL]=useState("https://drive.google.com/file/d/1rgehSUqdQu5zN7AAm-gDFuPfxnfnjGrs/preview");
   return(
       <>
       <iframe src={embedURL} className="sm:w-[600px] sm:h-[400px] md:w-[1000px] md:h-[500px]"/>
       </>
    )}

export default Resume
