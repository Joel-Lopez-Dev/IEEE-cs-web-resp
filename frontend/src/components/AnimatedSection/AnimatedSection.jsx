import { useRef, useEffect, useState } from 'react'

export default function AnimatedSection({ children, className = '', ...props }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const sectionClassName = `section animate-ready ${className} ${isVisible ? 'animate' : ''}`.trim()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -12% 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={sectionClassName}
      {...props}
    >
      {children}
    </section>
  )
}
