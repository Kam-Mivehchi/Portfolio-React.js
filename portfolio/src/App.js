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
      <Navigation />
      <AltHero />
      <Stack />
      {/* <Hero /> */}
      <About />
      <Projects />
      <Footer />
    </main>


  )
}

export default App;
