
import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';

function Projects({img,title,text,link1,link2}) {
   return(
    <div className="rounded overflow-hidden bg-gray-50 shadow-lg hover:bg-gray-200 group transition-tansform-ease-out ">
    
    <img className="w-full" src={img} alt={title}/>
    <div className="hidden group-hover:block flex-row  pl-6 space-x-6  ">
        
        <a href={link1}><GitHub style={{ fill: '#6e5494' }}  /></a>
        <a href={link2}><Language /></a></div>
        
    
    <div className="px-6 py-4">
      <div className="font-semibold text-xl mb-2 font-inter text-gray-700">{title}</div>
      <p className="text-gray-700 text-base font-fira-sans">
        {text}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {/*<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
   */}
      </div>
  </div>
   )
}

export default Projects