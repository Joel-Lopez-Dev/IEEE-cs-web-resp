import { useState } from 'react'
import './FAQ.css'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

const QUESTIONS = [
  {
    question: '¿Qué es la IEEE?',
    answer:
      'La IEEE Computer Society (UNAM) es una sociedad estudiantil dedicada a la promoción de la computación. Nuestro objetivo es crear un entorno propicio para el desarrollo profesional y académico. Fomentamos el aprendizaje, la colaboración y la innovación entre estudiantes de ciencias de la computación y carreras afines.',
  },
  {
    question: '¿Cómo puedo unirme?',
    answer:
      'Únete es fácil. Solo necesitas llenar nuestro formulario de inscripción disponible en la sección "Únete". Ahí te pedirán algunos datos personales sobre tu carrera y semestre.',
  },
  {
    question: '¿Cuáles son los beneficios?',
    answer:
      'Los miembros disfrutan de acceso exclusivo a talleres, conferencias y proyectos. Además, tendrás la oportunidad de conectar con profesionales del sector. Nuestro programa también incluye mentorías y recursos exclusivos de aprendizaje.',
  },
  {
    question: '¿Qué tipo de eventos organizan?',
    answer:
      'Organizamos talleres, charlas y hackatones a lo largo del año. Estos eventos están diseñados para mejorar tus habilidades y actualizarte en las últimas tendencias tecnológicas. También ofrecemos oportunidades para que los estudiantes presenten sus propios proyectos.',
  },
  {
    question: '¿Dónde se encuentran?',
    answer:
      'Nuestra sede es en la Universidad Nacional Autónoma de México. También estamos activos en redes sociales donde compartimos novedades y eventos.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <AnimatedSection id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Preguntas</h2>
        <p className="section-subtitle">
          Aquí encontrarás respuestas a las preguntas más comunes sobre nuestra comunidad estudiantil.
        </p>

        <div className="faq-list">
          {QUESTIONS.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                aria-hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p className="faq-cta-text">¿Aún tienes dudas?</p>
          <p className="faq-cta-sub">Escríbenos aquí para ayudarte.</p>
          <a href="#" className="btn btn-orange">Contacto</a>
        </div>
      </div>
    </AnimatedSection>
  )
}
