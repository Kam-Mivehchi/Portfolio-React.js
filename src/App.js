import './App.css';
import About from './components/about';
import Projects from './components/projects'
import { useState, useEffect } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/hero"
import Stack from './components/stack';
import Footer from './components/footer';
import Resume from './components/resume';
import Contact from './components/contact';



function App() {
  const [currentPage, setCurrentPage] = useState('hero')

  // useEffect(() => {
  //   document.getElementById('myDropdown').classList.add("hidden")
  //   setOpen = false
  // }, [currentPage])
  function renderPage(state) {
    if (state === 'hero') {
      return (<Hero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue/75 hover:bg-light-blue/25  ' buttonColor2='bg-accentd/60 hover:bg-accentd/25' animateColor='text-accentd' setCurrentPage={setCurrentPage} />
      )
    }
    if (state === 'about') {
      return (
        <>
          <About background='' titleColor='text-accentd' paragraphStyle='text-light-blue' />
          <Stack background='bg-stacked-wave bg-cover' textColor='text-accentd' tileStyle='bg-light-blue text-light-blue' />
        </>

      )
    }
    if (state === 'project') {
      return (
        <Projects title="text-accentd" pageBackground='' cardBG='bg-tertiaryd' buttonColor1='bg-light-blue/75' buttonColor2='bg-accentd ' projTitle='text-accentd' descColor='text-light-blue' />


      )
    }
    if (state === 'resume') {
      return (
        <Resume headingText='text-light-blue' skillText='text-light-blue font-bold text-xl' catText='text-accentd/75' resButtonColor='bg-accentd text-primaryd' />


      )
    }
    if (state === 'contact') {
      return (
        <Contact />


      )
    }
  }
  return (

    <main className=' '>

      <Navigation textColor='text-accentd ' divbg='bg-secondaryd' setCurrentPage={setCurrentPage} />
      <div className="bg-wave bg-cover ">
        {renderPage(currentPage)}
      </div>


      <Footer background='bg-primaryd opacity ' iconColor='text-accentd/50' />
    </main>
    /* <Hero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue/75' buttonColor2='bg-accentd/60 ' animateColor='text-accentd' />
    <Stack background='bg-stacked-wave bg-cover' textColor='text-primaryd' tileStyle='bg-light-blue text-light-blue' />
    <About background='bg-primaryd' titleColor='text-accentd' paragraphStyle='text-light-blue' />
    <Projects title="text-accentd" pageBackground='bg-blurry bg-cover' cardBG='bg-secondaryd' buttonColor1='bg-light-blue/75' buttonColor2='bg-accentd ' projTitle='text-accentd' descColor='text-light-blue' /> */


  )
}

export default App;
