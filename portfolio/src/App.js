import './App.css';
import Navbar from './components/navbar'
import About from './components/about';
import Projects from './components/projectGallery'
import Hero from './components/hero';



function App() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
      <About />
      <Projects />

    </main>


  )
}

export default App;
