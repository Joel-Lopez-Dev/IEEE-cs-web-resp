import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Welcome from './components/Welcome/Welcome'
import Team from './components/Team/Team'
import Areas from './components/Areas/Areas'
import Membership from './components/Membership/Membership'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import ProjectsPage from './pages/ProjectsPage'
import TrainingPage from './pages/TrainingPage'
import DiffusionPage from './pages/DiffusionPage'
import IEEEXtremePage from './pages/IEEEXtremePage'

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Team />
      <Areas />
      <Membership />
      <FAQ />
    </>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/capacitacion" element={<TrainingPage />} />
        <Route path="/ieeextreme" element={<IEEEXtremePage />} />
        <Route path="/difusion" element={<DiffusionPage />} />
      </Routes>
      <Footer />
    </>
  )
}
