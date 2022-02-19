import './App.css';
import Navbar from './components/navbar'
import About from './components/about';
import Projects from './components/projectGallery'
import Hero from './components/hero';
import Navigation from "./components/Navigation";
import AltHero from "./components/altHero"
import Stack from './components/stack';
function App() {
  return (
    <main className=''>
      {/* <Navbar /> */}
      <Navigation />
      <AltHero />
      <Stack />
      {/* <Hero /> */}
      <About />
      <Projects />

    </main>


  )
}

export default App;
