export default function Footer() {
  return (
    <footer className="footer footer-center gap-3 border-t border-base-300 bg-base-200 p-6 text-base-content">
      <nav className="grid grid-flow-col gap-6">
        <a
          className="link link-hover inline-flex items-center gap-2"
          href="https://github.com/Kelvin0v0"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24 0-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.37 1.12 2.95.85.1-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.71 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.67.95.67 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.28 10.28 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a
          className="link link-hover inline-flex items-center gap-2"
          href="https://www.linkedin.com/in/kelvin-lau-38a15317b"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12zM5.6 9.75h2.7V18H5.6V9.75zm4.26 0h2.58v1.13h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.24 1.85 3.24 4.26V18h-2.7v-3.78c0-.9-.02-2.06-1.23-2.06-1.23 0-1.42.99-1.42 2V18h-2.7V9.75z" />
            <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 2v14h16V5H4z" />
          </svg>
          LinkedIn
        </a>
        {/* <a
          className="link link-hover inline-flex items-center gap-2"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z" />
            <path d="M12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4zm0 1.8A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zm5.05-2.46a1.08 1.08 0 1 1-1.08 1.08 1.08 1.08 0 0 1 1.08-1.08z" />
          </svg>
          Instagram
        </a> */}
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} Kelvin Lau. Built with React + DaisyUI.</p>
      </aside>
    </footer>
  )
}
