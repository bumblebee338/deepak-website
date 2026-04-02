import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Awards from './components/Awards'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { isDark } = useTheme()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950 text-slate-100'
          : 'bg-white text-slate-900'
      }`}>
        <Navbar />
        <Hero />
        <About />
        <PracticeAreas />
        <Experience />
        <Achievements />
        <Awards />
        <Testimonials />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
