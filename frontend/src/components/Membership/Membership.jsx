import './Membership.css'

export default function Membership() {
  return (
    <section id="membresia" className="membership section">
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
          <a href="#" className="btn btn-dark">Unirte</a>
          <a href="#areas" className="btn btn-outline">Aprende más →</a>
        </div>
      </div>
    </section>
  )
}
