import './App.css';
import About from './components/about';
import Projects from './components/projectGallery'

import Navigation from "./components/Navigation";
import AltHero from "./components/altHero"
import Stack from './components/stack';
import Footer from './components/footer';



function App() {
  return (
    <main className='bg-blue-100'>
      {/* <Navbar /> */}
      <Navigation textColor='text-accentd' divbg='bg-secondaryd' />

      <AltHero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue/75' buttonColor2='bg-accentd/60 ' animateColor='text-accentd' />
      <Stack background='bg-stacked-wave bg-cover' textColor='text-primaryd' tileStyle='bg-light-blue text-light-blue' />
      {/* <Hero /> */}
      <About background='bg-primaryd' titleColor='text-accentd' paragraphStyle='text-light-blue' />
      <Projects title="text-accentd" pageBackground='bg-blurry bg-cover' cardBG='bg-secondaryd' buttonColor1='bg-light-blue/75' buttonColor2='bg-accentd ' projTitle='text-accentd' descColor='text-light-blue' />
      <Footer background='bg-tertiaryd ' />
    </main>


  )
}

export default App;
