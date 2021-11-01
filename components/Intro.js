import { FaCircle } from 'react-icons/fa';


function Intro() {
    return (
             <div className="flex mt-4">
                 <div className="pt-4 bg-white  w-full items-center shadow px-6 py-4 flex flex-col">
	<img src="https://res.cloudinary.com/moodgiver/image/upload/v1608198254/thumbnail_fashion_1_d66f5610d2.jpg" alt="img" title="img" className="rounded-full h-40 w-40 object-cover" />
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
                <p>I am an Indian student in my junior year at Delhi Technological University.I am doing my BTech. in Computer Science Engineering.I am doing my minor in Data Analytics.I am proficient in C++ and C.Currently,I am exploring various front end frameworks and javascript based libraries like react.js,next.js,etc.</p>
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
