import Image from "next/image";




function Banner() {
    return (
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
           <Image src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg" 
           layout="fill" objectFit="cover" /> 

           <div className="absolute top-1/2 w-full font-semi-bold text-center sm:text-lg">
             <p className="font-fira-sans font-semibold">Not sure where to go? Perfect.</p>
             <button className="bg-white hover:shadow-xl text-purple-500 font-bold my-3 py-4 px-10 rounded-full shadow-md active:scale-90 transition-duration-150">
  I'm flexible
</button>
           </div>
        </div>
    )
}

export default Banner
