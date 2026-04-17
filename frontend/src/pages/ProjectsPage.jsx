import './Pages.css'

const PROJECT_CARDS = [
  {
    title: 'Página web del capítulo IEEE CS UNAM',
    description:
      'Desarrollo y mantenimiento del sitio oficial del capítulo para publicar actividades, convocatorias y recursos para estudiantes.',
    imageSrc: '/img/web.png',
    imageAlt: 'Proyecto web del capítulo IEEE CS UNAM',
  },
  {
    title: 'Bot de información de servicios de la facultad',
    description:
      'Asistente que responde preguntas frecuentes sobre trámites, horarios, ubicaciones y servicios disponibles en la facultad.',
    imageSrc: '/img/bot.png',
    imageAlt: 'Proyecto bot de información de servicios',
  },
  {
    title: 'Estación meteorológica para CU',
    description:
      'Sistema para consultar el clima en Ciudad Universitaria: temperatura, humedad y alertas de lluvia en tiempo real.',
    imageSrc: '/img/met.png',
    imageAlt: 'Proyecto de estación meteorológica',
  },
]

export default function ProjectsPage() {
  return (
    <main className="section page-shell" id="proyectos">
      <div className="container">
        <p className="page-label">Proyectos</p>
        <h1 className="section-title">Proyectos IEEE CS UNAM</h1>
        <p className="section-subtitle">
          Estos son los tres proyectos activos del capítulo.
        </p>

        <div className="projects-list">
          {PROJECT_CARDS.map((project) => (
            <article key={project.title} className="project-row">
              <div className="project-image-placeholder">
                <img src={project.imageSrc} alt={project.imageAlt} className="project-image" />
              </div>
              <div className="page-card project-card-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button type="button" className="btn btn-outline project-btn">Ver más</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
