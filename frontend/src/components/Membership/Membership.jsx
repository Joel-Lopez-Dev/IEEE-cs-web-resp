import './Membership.css'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

export default function Membership() {
  return (
    <AnimatedSection id="membresia" className="membership">
      <div className="container">
        <p className="membership-label">Membresía</p>
        <h2 className="section-title">
          Descubre las ventajas de ser miembro
        </h2>
        <p className="section-subtitle membership-desc">
          Únete a la IEEE Computer Society UNAM y ten acceso a una red de estudiantes
          apasionados por la computación. Experimenta oportunidades de aprendizaje,
          desarrollo profesional y colaboración en proyectos innovadores.
        </p>

        <div className="membership-grid">
          <div className="membership-card">
            <h3 className="membership-card-title">Crecimiento Personal</h3>
            <p className="membership-card-desc">
              Desarrolla tus habilidades técnicas y blandas con
              herramientas para el futuro laboral.
            </p>
          </div>
          <div className="membership-card">
            <h3 className="membership-card-title">Red de Contactos</h3>
            <p className="membership-card-desc">
              Conecta con profesionales y estudiantes que
              comparten tus intereses en tecnología.
            </p>
          </div>
        </div>

        <div className="membership-actions">
          <a 
            href="https://youtu.be/mng2A1HgLUc"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial
          </a>
          <a
            href="https://www.ieee.org/membership/renew"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dónde comprar
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
