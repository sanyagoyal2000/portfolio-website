import data from "../public/data.json";
import Button from "@material-tailwind/react/Button";
import Link from 'next/link'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function Achievement() {
    return (
        
           <div className="container mt-4 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    {data.por.map((por, i) => (
      <div className="dark:bg-white card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div className="m-3">
          <h2 className="text-lg mb-2 text-lato text-center text-orange-400 ">{por.position}

         <span className="sm:text-xs text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">#{por.tag}</span></h2>
        <hr/>
        <div className="flex ">
          <div className="p-1 space-y-2">
          <Link href={por.link1}>
            <Button
            color="red"
            
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className=" bg-white  h-10 w-10 text-red-400 hover:shadow hover:gray-800"
            >
                <InstagramIcon size="3xl" color="blue-500"/>
            </Button></Link>
            <Link href={por.link2}>
            <Button
            color="blue"
            
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className=" bg-white  h-10 w-10 text-blue-400  hover:shadow hover:gray-800"
            >
                <FacebookIcon size="3xl" color="blue-500"/>
            </Button></Link>
            <Link href={por.link3}>
            <Button
            color="blue"
            
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className=" bg-white  h-10 w-10 text-blue-600 hover:shadow hover:gray-800"
            >
                <LinkedInIcon size="3xl" color="blue-500"/>
            </Button></Link>
          </div>
          <div>
          <p className="font-light font-mono mt-2 text-sm text-gray-700 bg-blueGray-100 ml-1 hover:text-gray-900 transition-all duration-200">{por.text}</p>
          </div>
        </div>
        
        </div>
        </div>
    ))}
       
    </div>
  </div>
  
        
    )
}

export default Achievement;
