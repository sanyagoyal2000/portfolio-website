import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/fontawesome-free-solid';



function Intro() {
    return (
             <div className="flex">
                 <div className="pt-4 bg-white  w-full items-center shadow px-6 py-4 flex flex-col">
	<img src="https://res.cloudinary.com/moodgiver/image/upload/v1608198254/thumbnail_fashion_1_d66f5610d2.jpg" alt="img" title="img" className="rounded-full h-40 w-40 object-cover" />
	<h4 className="mt-8 border-b-2">Sara Doe</h4>
	<div className="mb-10 text-center capitalize">CEO</div>
</div>
             
            <div className=" ml-4 border rounded ">
                <div className="bg-gray-100 flex ">
                    <div className="flex ml-3 p-2 space-x-2">
                    <FontAwesomeIcon icon={faCircle} className="text-red-500"/>
                    <FontAwesomeIcon icon={faCircle} className="text-yellow-300"/>
                    <FontAwesomeIcon icon={faCircle} className="text-green-600"/>
                    </div>
                   <div></div>
                </div>
                <div className=" ml-2 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            </div>
    )
}

export default Intro
