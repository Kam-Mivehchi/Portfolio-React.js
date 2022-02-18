import './App.css';
import Navbar from './components/navbar'
import About from './components/about';
import Projects from './components/projectGallery'
import Hero from './components/hero';
import Navigation from "./components/Navigation";
import AltHero from "./components/altHero"

function App() {
  return (
    <main className=''>
      {/* <Navbar /> */}
      <Navigation />
      <AltHero />
      {/* <Hero /> */}
      <About />
      <Projects />

    </main>


  )
}

export default App;
