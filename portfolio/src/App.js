import './App.css';
import About from './components/about';
import Projects from './components/projectGallery'
import { useState } from 'react';
import Navigation from "./components/Navigation";
import AltHero from "./components/altHero"
import Stack from './components/stack';
import Footer from './components/footer';
import Resume from './components/resume';
import Contact from './components/contact';
import { CSSTransitionGroup } from 'react-transition-group';

function App() {
  const [currentPage, setCurrentPage] = useState('altHero')

  function renderPage(state) {
    if (state === 'altHero') {
      return (<AltHero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue/75 hover:bg-light-blue/25  ' buttonColor2='bg-accentd/60 hover:bg-accentd/25' animateColor='text-accentd' setCurrentPage={setCurrentPage} />
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
    <main className='bg-wave bg-cover '>

      <Navigation textColor='text-accentd ' setCurrentPage={setCurrentPage} />

      {renderPage(currentPage)}


      <Footer background='bg-primaryd opacity ' iconColor='text-accentd/50' />
    </main>
    /* <AltHero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue/75' buttonColor2='bg-accentd/60 ' animateColor='text-accentd' />
    <Stack background='bg-stacked-wave bg-cover' textColor='text-primaryd' tileStyle='bg-light-blue text-light-blue' />
    <About background='bg-primaryd' titleColor='text-accentd' paragraphStyle='text-light-blue' />
    <Projects title="text-accentd" pageBackground='bg-blurry bg-cover' cardBG='bg-secondaryd' buttonColor1='bg-light-blue/75' buttonColor2='bg-accentd ' projTitle='text-accentd' descColor='text-light-blue' /> */


  )
}

export default App;
