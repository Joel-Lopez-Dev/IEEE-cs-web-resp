import './Welcome.css'

export default function Welcome() {
  return (
    <section id="bienvenidos" className="welcome">
      <div className="container welcome-content">
        <h2 className="welcome-title">Bienvenidos a IEEE</h2>
        <p className="welcome-text">
          La IEEE Computer Society UNAM es una comunidad dedicada a impulsar
          la colaboración y la innovación a través de proyectos y eventos enriquecedores.
          Fomentamos el aprendizaje, la colaboración y la innovación entre estudiantes
          de ciencias de la computación y carreras afines, proporcionando un espacio
          para el desarrollo profesional y académico.
        </p>
      </div>
    </section>
  )
}
