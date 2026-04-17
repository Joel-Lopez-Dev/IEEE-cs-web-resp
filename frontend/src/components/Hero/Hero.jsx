import { useState, useRef, useEffect } from 'react'
import './Hero.css'

const VIDEOS = [
  '/img/video-codigo-1.mp4',
  '/img/video-codigo-3.mp4',
  '/img/video-codigo-4.mp4',
]

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Fuerza silencio total aunque el archivo de video tenga pista de audio.
    videoEl.defaultMuted = true
    videoEl.muted = true
    videoEl.volume = 0

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length)
    }

    // Reiniciar el video y reproducir
    videoEl.currentTime = 0
    const playPromise = videoEl.play()
    
    if (playPromise !== undefined) {
      playPromise.catch(err => console.log('Autoplay prevented:', err))
    }

    videoEl.addEventListener('ended', handleVideoEnd)
    
    return () => {
      videoEl.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex])

  return (
    <section id="inicio" className="hero">
      <video 
        key={currentVideoIndex}
        ref={videoRef} 
        className="hero-video" 
        autoPlay 
        muted 
        playsInline
        preload="auto"
      >
        <source src={VIDEOS[currentVideoIndex]} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-shell">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenido al IEEE Computer Society UNAM
          </h1>
          <p className="hero-description">
            La IEEE Computer Society (UNAM) es una comunidad abierta dedicada a la formación y el
            desarrollo de estudiantes en el área de la computación. Únete a nosotros para explorar
            proyectos innovadores, participar en eventos enriquecedores y potenciar tu carrera profesional.
          </p>
          <div className="hero-buttons">
            <a href="#areas" className="btn btn-dark">Explora</a>
            <a href="#equipo" className="btn btn-outline">Sobre nosotros</a>
          </div>
        </div>
      </div>
    </section>
  )
}
