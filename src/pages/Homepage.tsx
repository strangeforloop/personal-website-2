import './Homepage.css'
import selfPortrait from '../assets/Self_Portrait_Illustration.png'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'

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
                Creative Platform Engineer building reliable, human-centered systems at scale.
            </p>
            <div className="hero-icons">
              <a 
                href="https://linkedin.com/in/anna-agoha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <div 
                  className="icon-svg" 
                  style={{ 
                    WebkitMaskImage: `url(${linkedinIcon})`,
                    maskImage: `url(${linkedinIcon})`,
                    backgroundColor: 'var(--accent-color)'
                  }}
                  role="img"
                  aria-label="LinkedIn"
                />
              </a>
              <a 
                href="https://github.com/strangeforloop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-link"
                aria-label="GitHub"
              >
                <div 
                  className="icon-svg" 
                  style={{ 
                    WebkitMaskImage: `url(${githubIcon})`,
                    maskImage: `url(${githubIcon})`,
                    backgroundColor: 'var(--accent-color)'
                  }}
                  role="img"
                  aria-label="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>About Me</h2>
        <p>
        Hi, I’m Anna — a full-stack and platform engineer who loves building scalable systems end-to-end.
One of my early roles was in digital health, where I helped build the first wave of digital therapeutics at Pear Therapeutics, including an FDA-regulated digital therapeutic for major depressive disorder. There, I built scalable frontend and backend features using React, React Native, TypeScript, GraphQL, and event-driven architecture to deliver scalable, user-centered experiences. That experience taught me to approach engineering with both scale and intention and to build systems that are technically sound, product-driven, and aligned with real user needs.

<br></br><br></br>
Today, I’m a Platform Engineer at Wells Fargo, designing and maintaining foundation-level services used across 40+ internal applications. My work spans everything from backend architecture and data flows to the frontend dashboards engineers rely on 
<br></br><br></br>
Across my roles, I’ve consistently owned products from concept to deployment, bridging design, infrastructure, and user needs to build systems that scale and make positive impacts on the world.

        </p>
      </section>

      <section className="content-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <a 
            href="https://github.com/strangeforloop/react-mulitplayer-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card project-card-link"
          >
            <h3>React Multiplayer AI</h3>
            <p>The AI uses the Minimax Algorithm that will always find the best move in this multiplayer Tic-Tac-To game.</p>
          </a>
          <a
            href="https://github.com/strangeforloop/Spotify-Recommended-Playlist"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-card-link"
          >
            <h3>AI-driven Spotify Playlist Builder</h3>
            <p>An AI-driven Spotify playlist builder using Node.js, Express, and Last.fm, converting user mood descriptions and seed tracks into fully generated Spotify playlists.</p>
          </a>
          <a
            href="https://github.com/strangeforloop/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-card-link"
          >
            <h3>Personal Website</h3>
            <p>Personal Website built by scratch in a React framework used to generate fast static sites for blog posts.</p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Homepage

