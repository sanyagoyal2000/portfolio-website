import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
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
      {loading?
        <Loader/>
       :(<>
      <div className="dark:bg-custom">
      <Header/>
      <Banner />
      <br/>
      <About/>
      <br/><br/><br/>
      <div className="pt-6  max-w-7xl px-8 mx-auto sm:px-16" id="projects">
      <motion.h2 
      animate={{ x: 100 }}
      transition={{
        duration: 3,
        repeat: 1,
      repeatType: "reverse",
        
      }}
      className="text-3xl font-semibold pb-5 font-pt pt-4 pl-4 dark:text-red-400 dark:font-bold text-gray-800 md:text-center shadow:md shadow:gray-400">PROJECTS</motion.h2>
        <hr/>
       
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        
        
        <Projects/>
          </div>
          </div>
      <br/><br/><br/>
      
      
        <Resume  className="items-center"/>

     
      <br/><br/>
      <br/><br/>

        

     <br/><br/>
     <br/><br/>
      
      <Contact />
     
      <br/><br/>
      </div>
      <Footer/>
      </>
      )}
      
    </div>
  )
}
