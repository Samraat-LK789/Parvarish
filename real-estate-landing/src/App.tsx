import './App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
