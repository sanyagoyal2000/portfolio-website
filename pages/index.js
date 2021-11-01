import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import { motion } from "framer-motion"
import H6 from "@material-tailwind/react/Heading6";
import Intro from '../components/Intro.js';


//import LargeCard from "../components/LargeCard";
export default function Home({projectData}) {
  return (
    <div>
      <Head>
        <title>Sanya Goyal</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 pb-3">
      
        <Intro/>
      </section>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 pb-3">
        
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
        <h2 color="teal" 
    className="text-3xl font-semibold pb-5 font-inter pt-4 pl-4 text-gray-800">Education</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-4 ml-1 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg></motion.div>
        <About/>
          <Skills/>
        </section>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">
          <motion.div className="flex"
          animate={{ x: 100 }}
          transition={{
            duration: 3,
            
          }}>
        <h2 className="text-3xl font-semibold pb-5 font-inter pt-4 pl-4 text-gray-800 shadow:md shadow:gray-400">Projects</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-5 ml-2 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg></motion.div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        
        
        {projectData?.map((item)=>(
            <Projects key={item.img} img={item.image} title={item.title} text={item.text} link1={item.link1} link2={item.link2}/>
          ))}
          </div>
      </section>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">
      <motion.div className="flex" animate={{ x: 100 }}
          transition={{
            duration: 3,
            
          }}>
        <h2 className="text-3xl font-semibold pb-5 font-inter pt-4 pl-4 text-gray-800">Resume</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-6 ml-2 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
</svg></motion.div>
        <Resume className="items-center"/>

      </section>
      <br/><br/>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">

     
      
      <Contact/></section>
     
      <br/><br/>
      <Footer/>

      
    </div>
  )
}
export async function getStaticProps(){
  
  
  const projectData=await fetch('https://jsonkeeper.com/b/U9LO').then((res)=>res.json());
  return {
    props: {
      
      projectData:projectData,
    }
  }
}