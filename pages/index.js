import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import About from "../components/About";
import Achievement from "../components/Achievement";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

import { motion } from "framer-motion"

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
       <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Recursive&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <br/>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 pb-3">
      <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        
      }}
      className="text-3xl font-semibold pb-5 font-pt pt-4  text-gray-800 text-center shadow:md shadow:gray-400">ABOUT ME</motion.h2>
         <hr/>
         <br/>
        <Intro/>
      </section>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 pb-3">
        
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
        <h2 
    className="text-3xl font-semibold pb-5 font-pt pt-4  text-blueGray-700">Education</h2>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
</svg></motion.div>
        <About/>
        <br/><br/>
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
        <h2 
    className="text-3xl font-semibold pb-5 font-pt pt-4  text-blueGray-700">Skills</h2>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-blueGray-500" viewBox="0 0 20 20" fill="currentColor">
  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
</svg></motion.div>
<Skills/>
<br/><br/>
        <motion.div className="flex" animate={{ x: 100 }}
    transition={{
      duration: 3,
      
    }}>
      <br/><br/>
        <h2 
    className="text-3xl font-semibold pb-5 font-pt pt-4  text-blueGray-700">Positions of Responsibility</h2>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-6 ml-1 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
</svg></motion.div>
<Achievement/>
          
        </section>
        <br/><br/><br/>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">
        <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        repeat: 1,
      repeatType: "reverse",
        
      }}
      className="text-3xl font-semibold pb-5 font-pt pt-4 pl-4 text-gray-800 text-center shadow:md shadow:gray-400">PROJECTS</motion.h2>
        <hr/>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        
        
        {projectData?.map((item)=>(
            <Projects key={item.img} img={item.image} title={item.title} text={item.text} link1={item.link1} link2={item.link2}/>
          ))}
          </div>
      </section>
      <br/><br/><br/>
      <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">
      <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        
      }}
      className="text-3xl font-semibold pb-5 font-pt pt-4  text-gray-800 text-center shadow:md shadow:gray-400">RESUME</motion.h2>
      <hr/>
      <br/>
        <Resume className="items-center"/>

      </section>
      <br/><br/>
      <br/><br/>

        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">

     <br/><br/>
     <br/><br/>
      
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