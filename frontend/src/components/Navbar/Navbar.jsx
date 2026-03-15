import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Capacitación', href: '#areas' },
  { label: 'Difusión', href: '#bienvenidos' },
]

const CONOCE_MAS_LINKS = [
  { label: 'Membresía', href: '#membresia' },
  { label: 'Preguntas', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

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
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#inicio" className="navbar-logo">
          <img src="/img/ieee.jpg" alt="IEEE Computer Society" className="navbar-logo-img" />
        </a>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar-dropdown" ref={dropdownRef}>
            <button
              className="navbar-dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Conoce más <span className="dropdown-arrow">▾</span>
            </button>
            {dropdownOpen && (
              <ul className="navbar-dropdown-menu">
                {CONOCE_MAS_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Cambiar tema"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <a href="#bienvenidos" className="btn-nav btn-nav-outline">Ver</a>
          <a href="#membresia" className="btn-nav btn-nav-orange">Inscribirse</a>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}
