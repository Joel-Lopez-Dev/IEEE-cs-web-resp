import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Capacitación', href: '/capacitacion' },
  { label: 'IEEEXtreme', href: '/ieeextreme' },
  { label: 'Difusión', href: '/difusion' },
]

const CONOCE_MAS_LINKS = [
  { label: 'Membresía', href: '/#membresia' },
  { label: 'Preguntas', href: '/#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')
  const dropdownRef = useRef(null)

  const handleGoTop = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const handleCloseMenus = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>IEEE Computer Society UNAM</p>
          <div className="topbar-links">
            <a href="/capacitacion">Capacitación</a>
            <a href="/#membresia">Membresía</a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScaULyoo4en7Lqr9B0KJNZ-myNZE5SpUMSnebmtLmfdywNXtg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container navbar-inner">
          <a className="navbar-logo" href="/" onClick={handleGoTop} aria-label="Ir al inicio">
            <img src="/img/ieee.png" alt="IEEE Computer Society" className="navbar-logo-img navbar-logo-img--light" />
            <img src="/img/ieee-noche.png" alt="IEEE Computer Society" className="navbar-logo-img navbar-logo-img--dark" />
            <span className="navbar-logo-text">IEEE CS UNAM</span>
          </a>

          <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={link.label === 'Inicio' ? handleGoTop : handleCloseMenus}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="navbar-dropdown" ref={dropdownRef}>
              <button
                className="navbar-dropdown-btn"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Conoce más <span className="dropdown-arrow">▾</span>
              </button>
              {dropdownOpen && (
                <ul className="navbar-dropdown-menu">
                  {CONOCE_MAS_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => {
                          setDropdownOpen(false)
                          setMenuOpen(false)
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="navbar-cta-group">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScaULyoo4en7Lqr9B0KJNZ-myNZE5SpUMSnebmtLmfdywNXtg/viewform?usp=header"
                className="btn-nav btn-nav-orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscribirse
              </a>
              <button
                className="theme-toggle"
                type="button"
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Cambiar tema entre día y noche"
              >
                <span className="theme-toggle-icon" aria-hidden="true">
                  {darkMode ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <circle cx="12" cy="12" r="4.5" />
                      <path d="M12 2.75v2.1M12 19.15v2.1M4.84 4.84l1.48 1.48M17.68 17.68l1.48 1.48M2.75 12h2.1M19.15 12h2.1M4.84 19.16l1.48-1.48M17.68 6.32l1.48-1.48" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.8 6.8 0 1 0 10.2 10.2Z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>

            <button
              className="navbar-toggle"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
            >
              <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
