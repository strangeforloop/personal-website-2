import './Homepage.css'
import selfPortrait from '../assets/Self_Portrait_Illustration.png'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src={selfPortrait}
              alt="Anna Agoha"
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Anna Agoha</h1>
            <p className="hero-subtitle">
                Creative Software Engineer building reliable, human-centered systems at scale.
            </p>
            <div className="hero-icons">
            <a 
  href="https://linkedin.com/in/anna-agoha" 
  target="_blank" 
  rel="noopener noreferrer"
  className="icon-link"
  aria-label="LinkedIn"
>
  <img
    src={linkedinIcon}
    alt="LinkedIn"
    className="icon-svg"
  />
</a>

<a 
  href="https://github.com/strangeforloop" 
  target="_blank" 
  rel="noopener noreferrer"
  className="icon-link"
  aria-label="GitHub"
>
  <img
    src={githubIcon}
    alt="GitHub"
    className="icon-svg"
  />
</a>

            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Anna, a full-stack engineer who loves building scalable systems.
          One of my early roles was in digital health, where I helped build the first wave of digital therapeutics at Pear Therapeutics, including an FDA-regulated digital therapeutic for major depressive disorder and insomnia. That work ingrained in me a user-centered approach to engineering and a commitment to building products that are reliable at scale.

          <br></br><br></br>
          That conviction followed me most recently into platform engineering at Wells Fargo, where I designed and maintained foundational services that over 40 internal application teams depended on.          
          <br></br><br></br>
          Across my roles, I've consistently owned products from concept to deployment, bridging backend architecture, frontend work, and real user needs. Whether I'm building for end users or internal engineering teams, I care about the same things: making products that hold up, are genuinely helpful, and make a big difference.
        </p>
      </section>

      <section className="content-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Homepage

