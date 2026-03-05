import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

const THEME_STORAGE_KEY = 'kelvin-portfolio-theme'

export default function Header() {
  const [isNight, setIsNight] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const normalizedSavedTheme =
      savedTheme === 'night' ? 'dark' : savedTheme
    const initialTheme = normalizedSavedTheme ?? (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', initialTheme)
    localStorage.setItem(THEME_STORAGE_KEY, initialTheme)
    setIsNight(initialTheme === 'dark')
  }, [])

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextTheme = event.target.checked ? 'dark' : 'light'
    setIsNight(event.target.checked)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }

  return (
    <header className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 px-4 backdrop-blur md:px-8">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-black">Kelvin Lau</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <a href="#about">About</a>
          </li>
            <li>
            <a href="#workExperience">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
       <label className="mr-5 toggle text-base-content">
        <input
          type="checkbox"
          checked={isNight}
          onChange={handleThemeChange}
          aria-label="Toggle night mode"
        />

        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

        </label>
        <a href="#contact" className="btn btn-primary btn-sm">
          Hire Me
        </a>
      </div>
    </header>
  )
}
