import './Areas.css'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

const AREAS = [
  {
    title: 'Capacitación',
    subtitle: 'Aprende y crece con nuestros talleres y cursos especializados.',
    description:
      'Ofrecemos una variedad de programas diseñados para desarrollar tus habilidades técnicas y profesionales.',
    cta: 'Descubre',
    href: '/capacitacion',
  },
  {
    title: 'Proyectos',
    subtitle: 'Participa en iniciativas innovadoras y mejora tu experiencia práctica.',
    description:
      'Únete a nuestros equipos de proyecto y contribuye a soluciones tecnológicas con impacto real.',
    cta: 'Únete',
    href: '/proyectos',
  },
  {
    title: 'Difusión',
    subtitle: 'Desarrolla iniciativas de difusión y participa en eventos de la comunidad.',
    description:
      'Conecta con otros estudiantes y profesionales a través de eventos, conferencias y actividades de divulgación.',
    cta: 'Participa',
    href: '/difusion',
  },
  {
    title: 'IEEEXtreme',
    subtitle: 'Entrena para la competencia mundial de programación de IEEE.',
    description:
      'Conoce la participación del capítulo y prepárate para futuras ediciones con retos de alto nivel.',
    cta: 'Explora',
    href: '/ieeextreme',
  },
]

export default function Areas() {
  return (
    <AnimatedSection id="areas" className="areas">
      <div className="container">
        <p className="areas-label">Nuestras áreas</p>
        <h2 className="section-title areas-title">
          Explora nuestras cuatro áreas clave para tu desarrollo profesional.
        </h2>
        <p className="section-subtitle areas-subtitle">
          Descubre oportunidades para capacitarte, participar en proyectos y fortalecer la
          difusión de conocimiento dentro y fuera de la universidad.
        </p>

        <div className="areas-grid">
          {AREAS.map((area) => (
            <div key={area.title} className="area-card">
              <h3 className="area-card-title">{area.title}</h3>
              <p className="area-card-subtitle">{area.subtitle}</p>
              <p className="area-card-desc">{area.description}</p>
              <a href={area.href} className="area-card-link">
                {area.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
