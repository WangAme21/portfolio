import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Calculator from './components/projects/Calculator'
import TaskManager from './components/projects/TaskManager'
import FitnessTracker from './components/projects/FitnessTracker'
import AIChatAssistant from './components/projects/AIChatAssistant'
import ChatWidget from './components/ChatWidget'
import './App.css'

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('about')
  const location = useLocation()

  useEffect(() => {
    // Only handle scroll for main portfolio page
    if (location.pathname === '/' || location.pathname === '') {
      const handleScroll = () => {
        const sections = ['about', 'projects', 'skills', 'experiences', 'contact']
        const scrollPosition = window.scrollY + 200

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  return (
    <div className="App">
      {(location.pathname === '/' || location.pathname === '') && (
        <Navbar activeSection={activeSection} />
      )}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Projects />
                <Skills />
                <Experiences />
                <Contact />
              </>
            }
          />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/fitness-tracker" element={<FitnessTracker />} />
          <Route path="/ai-chat" element={<AIChatAssistant />} />
        </Routes>
      </main>
      {/* Floating Chat Widget - Available on all pages */}
      <ChatWidget />
    </div>
  )
}

function App() {
  return (
    <Router>
      <PortfolioContent />
    </Router>
  )
}

export default App

