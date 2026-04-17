import { useEffect, useState } from 'react'
import './Pages.css'

const SLIDE_DURATION_MS = 4200

const XTREME_HIGHLIGHTS = [
  {
    title: 'Patrocinadores',
    description: '',
    images: [],
    sponsors: [
      {
        name: 'GitHub',
        lightSrc: '/img/patrocinadores/github-dia.png',
        darkSrc: '/img/patrocinadores/github-noche.png',
      },
      {
        name: 'IEEE',
        sharedSrc: '/img/patrocinadores/ieee-dia.png',
      },
      {
        name: 'Notion',
        sharedSrc: '/img/patrocinadores/notion-dia-noche.png',
      },
    ],
  },
  {
    title: 'Competencia mundial',
    description:
      'IEEEXtreme es una competencia global de programación en la que equipos de estudiantes resuelven problemas algorítmicos durante 24 horas continuas.',
    images: [
      '/img/IEEEXTREME/sec-01-01.jpg',
      '/img/IEEEXTREME/sec-01-02.jpg',
    ],
  },
  {
    title: 'IEEEXTREME 19',
    description:
      'El año pasado se realizó la edición 19, consolidando a IEEEXtreme como uno de los retos más importantes para ramas estudiantiles IEEE.',
    images: [
      '/img/IEEEXTREME/sec-02-01.JPG',
      '/img/IEEEXTREME/sec-02-02.JPG',
      '/img/IEEEXTREME/sec-02-03.JPG',
    ],
  },
  {
    title: 'Ganadores de la edición 19',
    description:
      'Los ganadores de esta edición de IEEEXtreme, que demostraron dedicación y esfuerzo para obtener el primer lugar de la sección México, recibieron regalos de nuestros patrocinadores.',
    images: [
      '/img/IEEEXTREME/sec-03-01.JPG',
    ],
  },
  {
    title: 'Sede',
    description:
      'Se realizó en el edificio X de la Facultad de Ingeniería de la UNAM, en el CIA (Centro de Ingeniería Avanzada).',
    images: [
      '/img/IEEEXTREME/sec-04-01.jpg',
    ],
  },
  {
    title: 'Networking',
    description:
      'Este año participaron capítulos de IEEE de la Universidad de Chapingo y de la UPIITA del IPN, fortaleciendo la convivencia y el intercambio entre universidades.',
    images: [
      '/img/IEEEXTREME/sec-05-01.JPG',
      '/img/IEEEXTREME/sec-05-02.JPG',
      '/img/IEEEXTREME/sec-05-03.JPG',
      '/img/IEEEXTREME/sec-05-04.JPG',
    ],
  },
]

function XtremeCarousel({ title, images }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, SLIDE_DURATION_MS)

    return () => window.clearInterval(timerId)
  }, [images])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="xtreme-carousel" role="region" aria-label={`Galería de ${title}`}>
      <div className="xtreme-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt={title}
            className="xtreme-carousel-image"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="xtreme-carousel-dots" aria-hidden="true">
          {images.map((_, index) => (
            <span
              key={`${title}-${index}`}
              className={`xtreme-carousel-dot ${index === activeIndex ? 'xtreme-carousel-dot--active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function SponsorsGallery({ sponsors }) {
  if (!sponsors || sponsors.length === 0) {
    return null
  }

  return (
    <div className="xtreme-sponsors" role="group" aria-label="Patrocinadores del evento">
      {sponsors.map((sponsor) => (
        <article key={sponsor.name} className="xtreme-sponsor-card">
          {sponsor.sharedSrc ? (
            <img src={sponsor.sharedSrc} alt={sponsor.name} className="xtreme-sponsor-logo" loading="lazy" />
          ) : (
            <>
              <img
                src={sponsor.lightSrc}
                alt={sponsor.name}
                className="xtreme-sponsor-logo xtreme-sponsor-logo--light"
                loading="lazy"
              />
              <img
                src={sponsor.darkSrc}
                alt={sponsor.name}
                className="xtreme-sponsor-logo xtreme-sponsor-logo--dark"
                loading="lazy"
              />
            </>
          )}
        </article>
      ))}
    </div>
  )
}

export default function IEEEXtremePage() {
  return (
    <main className="section page-shell" id="ieeextreme">
      <div className="container">
        <p className="page-label">IEEEXtreme</p>
        <h1 className="section-title">IEEEXtreme: competencia mundial de programación</h1>
        <p className="section-subtitle">
          Espacio dedicado a la participación del capítulo en IEEEXtreme. Aquí puedes
          centralizar convocatorias, entrenamientos y resultados de cada edición.
        </p>

        <div className="xtreme-top-action">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScfJffsksnoYzwVdf7f3Tm-U6oipFF3p-py-FA-q3ba7U_jHA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-orange"
          >
            Quiero participar
          </a>
        </div>

        <div className="xtreme-list">
          {XTREME_HIGHLIGHTS.map((item) => (
            <article key={item.title} className="xtreme-item">
              <h2 className="xtreme-item-title">{item.title}</h2>
              <SponsorsGallery sponsors={item.sponsors} />
              <XtremeCarousel title={item.title} images={item.images} />
              {item.description && <p className="xtreme-item-description">{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
