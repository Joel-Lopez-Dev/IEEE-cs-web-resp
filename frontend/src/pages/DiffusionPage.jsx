import './Pages.css'

const DIFFUSION_LINES = [
  {
    title: 'Eventos de divulgación',
    description: 'Publica aquí calendario de charlas, ferias y actividades abiertas para la comunidad.',
  },
  {
    title: 'Contenido y redes',
    description: 'Centraliza piezas de comunicación, publicaciones, campañas y materiales visuales.',
  },
  {
    title: 'Vinculación externa',
    description: 'Documenta alianzas con otras ramas, facultades e instituciones para ampliar impacto.',
  },
]

export default function DiffusionPage() {
  return (
    <main className="section page-shell" id="difusion">
      <div className="container">
        <p className="page-label">Difusión</p>
        <h1 className="section-title">Área de difusión IEEE CS UNAM</h1>
        <p className="section-subtitle">
          Esta sección está lista para organizar iniciativas de difusión, comunicación y
          presencia del capítulo dentro y fuera de la universidad.
        </p>

        <div className="page-grid">
          {DIFFUSION_LINES.map((item) => (
            <article key={item.title} className="page-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="/#faq" className="btn btn-outline">Contactar equipo</a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
