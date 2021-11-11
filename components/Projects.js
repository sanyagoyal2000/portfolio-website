//https://www.tailwind-kit.com/templates/errors404
import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';
import { motion } from "framer-motion"
import data from "../public/data.json";


/*const divVariants={
    hover:{
        scale:1.1, 
        
        transition:{
            yoyo:Infinity
        }
    }
}*/
function Projects() {
   return(
     <>
     
    {data.portfolios.map((portfolios, i) => (
        
    <motion.div animate={{ rotate:5}}
    transition={{
      repeat: 1,
      repeatType: "reverse",
      duration: 2,
      yoyo:Infinity
    }}
    className="rounded overflow-hidden bg-gray-50 shadow-lg hover:bg-gray-200 group transition-tansform-ease-out ">
    
    <img className="w-full" src={portfolios.image} alt={portfolios.title}/>
    <div className="hidden group-hover:block flex-row  pl-6 space-x-6  ">
        
        <a href={portfolios.link1}><GitHub style={{ fill: '#6e5494' }}  /></a>
        <a href={portfolios.link2}><Language /></a></div>
        
    
    <div className="px-6 py-4">
      <div className="font-semibold text-xl mb-2 font-inter text-gray-700">{portfolios.title}</div>
      <p className="text-gray-700 text-base font-fira-sans">
        {portfolios.text}
      </p>
    </div>
    
  </motion.div>
 
   ))}
   </>
   )}

export default Projects