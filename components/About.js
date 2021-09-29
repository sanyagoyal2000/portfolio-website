function About() {
    return (
        <div className=" bg-gray-100 mx-auto  mt-2 mb-4 p-4">
            
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2" ></div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-4 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Delhi Technological University</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><i>2019-2023</i><br/>BTech. in Computer Science Engineering<br/>8.90 cgpa till 4<sup>th</sup> semester</p>
            </div>
          </div>
      
          
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-white text-xl">CR Oasis Convent Senior Sec School</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"><i>2017-2019</i><br/>12<sup>th</sup> standard<br/>94% </p>
            </div>
          </div>
          
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:animate-bounce">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Delhi Public School Sector 45,Gurgaon</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"><i>2015-2017</i><br/>10<sup>th</sup> standard<br/>10 cgpa</p>
            </div>
          </div>
          </div>
      
          
          
      </div>
    )
}

export default About
