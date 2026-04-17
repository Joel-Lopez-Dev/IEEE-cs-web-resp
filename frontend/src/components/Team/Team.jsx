import './Team.css'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

export default function Team() {
  return (
    <AnimatedSection id="equipo" className="team">
      <div className="container">
        <p className="team-label">Nuestro equipo</p>
        <h2 className="section-title">Conoce nuestro equipo</h2>
        <p className="section-subtitle">
          Somos un grupo de estudiantes apasionados por la computación, dedicados a impulsar
          la innovación y la colaboración dentro de la IEEE Computer Society UNAM.
        </p>

        <div className="team-image-wrapper">
          <img
            src="/img/foto-rama.jpeg"
            alt="Equipo de IEEE Computer Society UNAM"
            className="team-image"
          />
        </div>

        <p className="team-description">
          Nuestro equipo está conformado por estudiantes de diversas carreras relacionadas con ciencias
          de la computación. Trabajamos juntos en proyectos, eventos y actividades de capacitación
          para fortalecer la comunidad técnica en la Universidad Nacional Autónoma de México.
        </p>
      </div>
    </AnimatedSection>
  )
}
