import { useEffect, useRef, useState } from 'react'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import MediaPro2 from './images/MediaPro.png'
import fyp from './images/fyp.png'
import icon from './images/icon.jpeg'
import upcomingImage from './images/upcoming.svg'

const workExperiences = [
  {
    company: 'Metricell Limited',
    role: 'Junior Software Developer',
    period: '02/2025 - Present',
    highlights: [
      'Developed new features for MCMC web application using C# (.NET Framework/.NET Core) and React with TypeScript.',
      'Applied Domain-Driven Design to align services with core business domains.',
      'Optimized SQL Server queries to improve geolocation search and filtering performance.',
    ],
    technologies: 'C#, .NET Framework, .NET Core, React, TypeScript, SQL Server, GitLab, Jira',
  },
  {
    company: 'The Hongkong Electric Co. Ltd.',
    role: 'Solutions Analyst',
    period: '06/2021 - 08/2024',
    highlights: [
      'Designed and developed RESTful APIs for corporate mobile applications, including payment integration.',
      'Enhanced Account-On-Line website workflows and user experience.',
      'Revamped corporate website services with focus on scalability and cross-browser compatibility.',
    ],
    technologies: 'JavaScript, TypeScript, React, AngularJS, C#, .NET, SQL Server, Azure DevOps, WCF, Sitecore',
  },
  {
    company: 'The Hongkong Electric Co. Ltd.',
    role: 'Placement Trainee',
    period: '09/2019 - 05/2020',
    highlights: [
      'Designed field-worker mobile app features for meter replacement and collection workflows.',
      'Developed OCR data transfer scripts that reduced manual processing time by 30%.',
      'Collaborated on usability improvements and field reliability for React Native app.',
    ],
    technologies: 'React Native, SQL Server',
  },
]

const projects = [
  {
    title: 'Media Processor',
    brief: 'An application for handling images and videos.',
    detail:
      'Image and Video processing application with features like format conversion, resizing, and metadata extraction. Built with a React frontend and .NET backend, it provides a user-friendly interface for managing media files efficiently.',
    coverImage: MediaPro2,
    images: [],
  },
  {
    title: 'VibPay',
    brief: 'Mobile Peer-to-Peer Payment System based on Vibration.',
    detail:
      'The built-in vibrator and accelerometer on the phone are used to send and receive the information. The communication ensures the payment is conducted at a close distance. \n',
    link: "https://ieeexplore.ieee.org/document/9589526",
    coverImage: fyp,
    images: [],
  },
  {
    title: 'MyAdventures',
    brief: 'Travel management and blog website',
    detail:
      'Upcoming project to build a travel management and blog website using React and .NET. The platform will allow users to share their travel experiences, manage itineraries, and connect with fellow travelers.',
    coverImage: upcomingImage,
    images: [],
  },
]

export default function App() {
  const [started, setStarted] = useState(false)
  const [activeExperience, setActiveExperience] = useState<number | null>(null)
  const contentRef = useRef<HTMLElement | null>(null)
  const experienceRefs = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const updateActiveByPosition = () => {
      const containerRect = container.getBoundingClientRect()
      const triggerY = containerRect.top + container.clientHeight * 0.38
      let nextActive: number | null = null
      let bestDistance = Number.POSITIVE_INFINITY

      experienceRefs.current.forEach((element, index) => {
        if (!element) return
        const rect = element.getBoundingClientRect()
        const distance = Math.abs(rect.top - triggerY)

        if (distance < bestDistance) {
          bestDistance = distance
          nextActive = index
        }
      })

      setActiveExperience((prev) => (prev === nextActive ? prev : nextActive))
    }

    container.addEventListener('scroll', updateActiveByPosition, { passive: true })
    window.addEventListener('resize', updateActiveByPosition)
    updateActiveByPosition()

    return () => {
      container.removeEventListener('scroll', updateActiveByPosition)
      window.removeEventListener('resize', updateActiveByPosition)
    }
  }, [])

  useEffect(() => {
    if (!started) return
    const container = contentRef.current
    if (!container) return
    const timer = window.setTimeout(() => {
      container.dispatchEvent(new Event('scroll'))
    }, 220)
    return () => window.clearTimeout(timer)
  }, [started])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-base-100 text-base-content">
      <section
        className="hero min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300"
        aria-hidden={started}
      >
        <div className="hero-content text-center">
          <div className="max-w-2xl space-y-6">
          
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hello, I&apos;m Kelvin.
              <br />
              Software Engineer
              <br />
              React + .NET + SQL
            </h1>
            <p className="text-lg opacity-80">
             4 years of experience in frontend development with React, TypeScript, and modern UI frameworks.
             Backend experience with .Net and SQL.
             Lets's start our journey together!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="btn btn-primary btn-lg min-w-40" onClick={() => setStarted(true)}>
                My Portfolio
              </button>
              <a
                className="btn btn-outline btn-lg min-w-40"
                href="/Resume_Kelvin.pdf"
                download="Kelvin_Lau_Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contentRef}
        className={`absolute left-0 top-full h-screen w-full overflow-y-auto bg-base-100 transition-transform duration-700 ease-in-out ${
          started ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <AppHeader />

        <main className="mx-auto w-full max-w-6xl space-y-16 px-6 py-12 md:px-10">
          <section id="about" className="scroll-mt-24 grid items-start gap-6 md:grid-cols-2">
            <article className="card bg-base-200 shadow-md">
              <div className="avatar m-6">
                <div className="w-32 rounded-full">
                  <img src={icon} />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title text-3xl">About Me</h2>
                <p>
                 Dynamic and results-driven Software Engineer with over 4 years
                  of experience in full-stack development for scalable web and
                  mobile applications. Proficient in .NET, SQL, and React with
                  expertise in API development, debugging, performance
                  optimization, and agile delivery.
                </p>
              </div>
            </article>
            <article className="card bg-base-200 shadow-md">
              <div className="card-body gap-4">
                <h2 className="card-title text-3xl">Skills</h2>

                <div>
                  <h3 className="mb-2 font-semibold">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary">C#</span>
                    <span className="badge badge-secondary">TypeScript</span>
                    <span className="badge badge-accent">JavaScript</span>
                    <span className="badge badge-info">HTML5/CSS3</span>
                    <span className="badge badge-success">SQL</span>
                    <span className="badge badge-warning">Python</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Frameworks/Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary">.NET/.NET Core</span>
                    <span className="badge badge-secondary">React</span>
                    <span className="badge badge-accent">React Native</span>
                    <span className="badge badge-info">Redux</span>
                    <span className="badge badge-success">AngularJS</span>
                    <span className="badge badge-warning">Laravel</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary">Git/GitHub/GitLab</span>
                    <span className="badge badge-secondary">Azure DevOps</span>
                    <span className="badge badge-accent">Jira</span>
                    <span className="badge badge-info">SQL Server</span>
                    <span className="badge badge-success">Visual Studio</span>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section id="workExperience" className="scroll-mt-24">
            <h2 className="mb-6 text-3xl font-bold">Work Experience</h2>
            <div className="rounded-2xl border border-base-300 bg-base-200/70 p-4 md:p-6">
              <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical w-full">
                {workExperiences.map((item, index) => {
                  const isExpanded = activeExperience === index
                  const isFirst = index === 0
                  const isLast = index === workExperiences.length - 1
                  return (
                    <li
                      key={`${item.company}-${item.period}`}
                      ref={(element) => {
                        experienceRefs.current[index] = element
                      }}
                      data-exp-index={index}
                      className="w-full"
                    >
                      {!isFirst ? <hr /> : null}
                      <div className="timeline-start text-xs font-semibold uppercase tracking-wide opacity-70">
                        {item.period}
                      </div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`h-5 w-5 ${
                            isExpanded ? 'text-primary' : 'text-base-content/40'
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`timeline-end timeline-box my-4 w-full rounded-xl border p-4 text-left transition-all ${
                          isExpanded
                            ? 'border-primary/40 bg-base-100 shadow-md'
                            : 'border-base-300 bg-base-100/70'
                        }`}
                        onClick={() => setActiveExperience(index)}
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide opacity-70">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
                        <p className="text-sm opacity-80">{item.company}</p>

                        <div
                          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded
                              ? 'mt-4 grid-rows-[1fr] border-t border-base-300 pt-4 opacity-100'
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="space-y-3 overflow-hidden">
                            <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
                              {item.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                             <div className="rounded-lg border border-base-300 bg-base-200/60 p-3">
                              <p className="text-sm font-semibold">Tech Stack</p>
                              <p className="text-sm opacity-80">{item.technologies}</p>
                            </div>
                            {/* <div className="grid gap-3 md:grid-cols-2">
                              {item.images.map((image, imageIndex) => (
                                <img
                                  key={`${item.role}-image-${imageIndex + 1}`}
                                  src={image}
                                  alt={`${item.role} screenshot ${imageIndex + 1}`}
                                  className={`h-56 w-full rounded-xl object-cover ${
                                    image === hke1Image ? 'object-[50%_82%]' : ''
                                  }`}
                                />
                              ))}
                            </div> */}
                           
                          </div>
                        </div>
                        {!isExpanded ? (
                          <p className="mt-3 text-sm text-primary">Expands at scroll position</p>
                        ) : null}
                      </div>
                      {!isLast ? <hr /> : null}
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
          <section id="projects" className="scroll-mt-24">
            <h2 className="mb-6 text-3xl font-bold">Featured Projects</h2>
            <div className="space-y-5">
              {projects.map((project) => {
                return (
                  <article
                    key={project.title}
                    className="card bg-base-200 shadow-md"
                  >
                    <div className="card-body">
                      <div className="flex flex-col gap-4 md:flex-row">
                        <img
                          src={project.coverImage}
                          alt={`${project.title} preview`}
                          className="h-48 w-full rounded-xl object-cover md:h-40 md:w-64"
                        />
                        <div className="flex-1">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="mt-1 text-sm opacity-80">{project.brief}</p>
                          <div className="mt-3 space-y-3">
                            <p className="text-sm">{project.detail}</p>
                            <a className='text-sm underline underline-offset-2 hover:text-blue-5' href={project.link} target="_blank">{project.link}</a>
                            <div className="grid gap-3 sm:grid-cols-2">
                              {project.images.map((image, imageIndex) => (
                                <img
                                  key={`${project.title}-detail-${imageIndex + 1}`}
                                  src={image}
                                  alt={`${project.title} detail ${imageIndex + 1}`}
                                  className="h-40 w-full rounded-lg object-cover"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            
          </section>

          <section id="contact" className="scroll-mt-24 card bg-primary text-primary-content shadow-md">
            <div className="card-body">
              <h2 className="card-title text-3xl">Let&apos;s Work Together</h2>
              <p>
               Open to software engineering opportunities. I’m interested in full-time roles, freelance work, and collaborative projects. Let’s connect and build something impactful.
              </p>
              <div className="card-actions">
                <a className="btn" href="mailto:k@psi.tv">
                  Contact Me
                </a>
                <a className="btn" href="/Resume_Kelvin.pdf" download="Kelvin_Lau_Resume.pdf">
                  Download Resume
                </a>
              </div>
               
            </div>
          </section>
        </main>

        <AppFooter />
      </section>
      {/* <ChatWidget /> */}
    </div>
  )
}
