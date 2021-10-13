import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import portfolios from '../data/projects';

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
        <div className="flex">
        <h2 className="text-3xl font-semibold pb-5 font-inter pt-4 pl-4 ">Education</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg></div>
        <About/>
          
        </section>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">

        {projectData?.map((item)=>(
            <Projects key={item.img} img={item.image} title={item.title} text={item.text} link1={item.link1} link2={item.link2}/>
          ))}
      </section>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16 ">

      {/*<Projects/>*/}
      
      <Contact/></section>
      {/*<LargeCard/>*/}
      <br/><br/>
      <Footer/>

      
    </div>
  )
}
export async function getStaticProps(){
  
  
  const projectData=await fetch('/portfolios').then((res)=>res.json());
  return {
    props: {
      
      projectData:projectData,
    }
  }
}