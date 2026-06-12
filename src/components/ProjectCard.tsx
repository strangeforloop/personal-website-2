import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import type { Project } from '../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, thumbnail, githubUrl, liveUrl, slideDeckUrl, technologies } = project

  return (
    <article className="project-card">
      <div className="project-thumbnail">
        <img src={thumbnail} alt={`${title} thumbnail`} />
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <div className="project-links">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`${title} on GitHub`}
              >
                <FaGithub />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Visit ${title} website`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <p className="project-description">{description}</p>

        {slideDeckUrl && (
          <a
            href={slideDeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-slide-deck"
          >
            View Slide Deck ↗
          </a>
        )}

        {technologies.length > 0 && (
          <ul className="project-tech">
            {technologies.map(({ name, Icon }) => (
              <li key={name} className="project-tech-item" title={name} aria-label={name}>
                <Icon />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
