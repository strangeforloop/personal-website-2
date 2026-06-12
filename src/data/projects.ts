import type { IconType } from 'react-icons'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import ticTacToeThumbnail from '../assets/Tic-Tac-Toe-Thumbnail.png'
import bauhausthumbnail from '../assets/Responsive-Bauhaus-Thumbnail.png'
import tazThumbnail from '../assets/TAZ-Thumbnail.png'
import portfolioThumbnail from '../assets/Portfolio-Thumbnail.png'

export interface Tech {
  name: string
  Icon: IconType
}

export interface Project {
  id: number
  title: string
  description: string
  thumbnail: string
  githubUrl?: string
  liveUrl?: string
  slideDeckUrl?: string
  technologies: Tech[]
}

export const projects: Project[] = [
  {
    id: 1 ,
    title: 'Responsive Bauhaus',
    description:
      'An experiment of what Bauhaus design looks like on the responsive web using CSS Grid. The design is inspired by the Bauhaus movement’s emphasis on geometric forms, primary colors, and functional aesthetics, reimagined for a modern, responsive web experience.',
    thumbnail: bauhausthumbnail,
    githubUrl: 'https://github.com/strangeforloop/Responsive-Bauhaus',
    liveUrl: 'https://strangeforloop.github.io/Responsive-Bauhaus/',
    technologies: [
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
    ],
  },
  {
    id: 2,
    title: 'React Multiplayer AI',
    description:
      'A React Tic-Tac-Toe game with an AI opponent that uses my own implementation of the Minimax algorithm. The AI recursively evaluates future game states to choose the optimal move, turning a classic game into a hands-on demonstration of decision trees and algorithmic problem-solving.',
    thumbnail: ticTacToeThumbnail,
    githubUrl: 'https://github.com/strangeforloop/react-mulitplayer-ai',
    liveUrl: 'https://strangeforloop.github.io/react-mulitplayer-ai/',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'JavaScript', Icon: SiJavascript },
    ],
  },
  {
    id: 3,
    title: 'Temporary Autonomous Zone',
    description:
      'TAZ OS is a localized, lightweight operating system designed to run on an offline, solar-powered Raspberry Pi mesh network. It imagines how communities can coordinate mutual aid when traditional systems fail. For the AI for Good hackathon, I built The Common Fund: a resource and logistics layer for tracking survival resources, matching surplus with need, and helping neighbors coordinate food, medical support, supplies, and labor.',
    thumbnail: tazThumbnail,
    githubUrl: 'https://github.com/strangeforloop/personal-website',
    slideDeckUrl: 'https://www.canva.com/design/DAHMULLTzfQ/z4VfPM_T-AT-lWRgMXqYSA/edit',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'JavaScript', Icon: SiJavascript },
    ],
  },
  {
    id: 4,
    title: 'Personal Website',
    description:
      'Personal Website built from scratch in Gatsby, a React framework used to generate fast static sites for blog posts.',
    thumbnail: portfolioThumbnail,
    githubUrl: 'https://github.com/strangeforloop/personal-website',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'JavaScript', Icon: SiJavascript },
    ],
  },
]
