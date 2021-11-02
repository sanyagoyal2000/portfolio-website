import { FaCircle } from 'react-icons/fa';


function Intro() {
    return (
             <div className=" mt-4 flex flex-row-1 sm:flex-row-1 md:flex-row-2 lg:flex-row-2">
                 <div className="pt-4 bg-white  w-full items-center shadow px-6 py-4 flex flex-col">
	<img src="https://raw.githubusercontent.com/sanyagoyal2000/portfolio-website/main/img/profile.jpeg" alt="img" title="img" className="rounded-full h-40 w-40 object-cover" />
	<h4 className="mt-8 border-b-2 font-recur text-teal-600">SANYA GOYAL</h4>
	<div className="mb-10 text-center capitalize text-blueGray-400">Student</div>
</div>
             
            <div className=" ml-4 border rounded ">
                <div className="bg-gray-100 flex ">
                    <div className="flex ml-3 p-2 space-x-2">
                    <FaCircle  className="text-red-500"/>
                    <FaCircle className="text-yellow-300"/>
                    <FaCircle className="text-green-600"/>
                    </div>
                   <div></div>
                </div>
                <div className=" ml-2 p-4 font-incon text-blueGray-500">
                    <br></br>
                    
                    
                    <br></br>
                <p>I am a pre-final year BTech student at Delhi Technological University pursuing my major in Computer Science Engineering and minor in Data Analytics. I started with C and C++ and now I am continuing my journey exploring web development and machine learning. I believe there's a lot to learn, explore and certainly more problems to solve and a lot left to build. I have worked on various projects and done internships to get some perspective of what I would like to do after graduating. I have been a part of multiple communities of my college which have helped me develop teamwork skills and leadership skills along with my technical skills.</p>
<ul>
<li>Full Name: Sanya Goyal</li>

<li>Nationality: Indian</li>

<li>Languages: English,Hindi,and basic Spanish</li>

<li>Location : India</li>
</ul>






                </div>
            </div>
            </div>
    )
}

export default Intro
