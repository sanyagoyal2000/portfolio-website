import Image from "next/image";
import '@heroicons/react/solid';
import {Link} from 'react-scroll'


function Banner() {
    return (
        <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[500px] w-full" id="home">
           <Image src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/casey-horner-O0R5XZfKUGQ-unsplash.jpg" 
           layout="fill" objectFit="cover" /> 

           <div className="absolute top-1/2 w-full font-semi-bold text-center sm:text-lg">
             
           
           
           <p className=" text-white sm:text-lg lg:text-5xl font-fira-sans "><section className="animate-wave text-5xl">👋 </section>I am Sanya Goyal.</p>
           <Link  to="about" activeClass="active"  spy={true}
        smooth={true}
        offset={-100}
        duration={500}><button className=" hover:shadow-xl text-white  font-bold my-2 rounded-full shadow-md active:scale-90 transition-duration-150">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-bounce" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
</svg>
</button></Link>
           </div>
        </div>
    )
}

export default Banner
