import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Bienvenido a la IEEE Computer Society UNAM
        </h1>
        <p className="hero-description">
          La IEEE Computer Society (UNAM) es una comunidad abierta dedicada a la formación y el
          desarrollo de estudiantes en el área de la computación. Únete a nosotros para explorar
          proyectos innovadores, participar en eventos enriquecedores y potenciar tu carrera profesional.
        </p>
        <div className="hero-buttons">
          <a href="#areas" className="btn btn-dark">Unirte</a>
          <a href="#bienvenidos" className="btn btn-outline">Saber más</a>
        </div>
      </div>
    </section>
  )
}
