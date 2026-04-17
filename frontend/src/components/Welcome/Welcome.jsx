import './Welcome.css'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

export default function Welcome() {
  return (
    <AnimatedSection id="bienvenidos" className="welcome">
      <div className="container welcome-content">
        <div className="welcome-copy">
          <p className="welcome-label">Bienvenidos a IEEE</p>
          <h2 className="welcome-title">Bienvenidos a IEEE</h2>
          <p className="welcome-text">
            La IEEE Computer Society UNAM es una comunidad dedicada a impulsar
            la colaboración y la innovación a través de proyectos y eventos enriquecedores.
            Fomentamos el aprendizaje, la colaboración y la innovación entre estudiantes
            de ciencias o ingeniería en computación y carreras afines, proporcionando un espacio
            para el desarrollo profesional y académico.
          </p>
          <a
            href="https://ieee.org.mx/"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE Sección México
          </a>
        </div>

        <div className="welcome-highlights">
          <article>
            <strong>1 Millón+</strong>
            <span>Artículos de investigación en la Biblioteca Digital</span>
          </article>
          <article>
            <strong>302</strong>
            <span>Estándares técnicos activos</span>
          </article>
          <article>
            <strong>182</strong>
            <span>Conferencias en todo el mundo</span>
          </article>
        </div>
      </div>
    </AnimatedSection>
  )
}
