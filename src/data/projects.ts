import type { IconType } from 'react-icons'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'
import pearThumbnail from '../assets/Pear-Therapeutics-Thumbnail.webp'
import promptVaultHero from '../assets/Prompt_Library_Hero_Image.png'
import ticTacToeThumbnail from '../assets/Tic-Tac-Toe-Thumbnail.png'
import bauhausthumbnail from '../assets/Responsive-Bauhaus-Thumbnail.png'
import tazThumbnail from '../assets/TAZ-Thumbnail.png'

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
    id: 1,
    title: 'Pear Therapeutics',
    description:
      'Built the first FDA-regulated mobile apps for major depressive disorder and insomnia at Pear Therapeutics, turning clinically-backed therapies into treatment patients can access every day. I also helped build the underlying platform and provider-facing clinical dashboards that let doctors track patient progress in real time.',
    thumbnail: pearThumbnail,
    technologies: [
      { name: 'React Native', Icon: SiReact },
      { name: 'JavaScript', Icon: SiJavascript },
    ],
  },
  {
    id: 2,
    title: 'Prompt Vault',
    description:
      'A prompt management tool for saving, organizing, and evaluating prompts across LLMs. Prompts support variables and get grouped into collections, with a browser extension for injecting them directly from any chat window and an ability to share prompts and collections with others.',
    thumbnail: promptVaultHero,
    githubUrl: 'https://github.com/strangeforloop/Prompt-Manager',
    technologies: [
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'React', Icon: SiReact },
      { name: 'Supabase', Icon: SiSupabase },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    id: 3,
    title: 'Temporary Autonomous Zone',
    description:
      'Temporary Autonomous Zone is a localized system designed to facilitate community coordination during crises. It imagines how communities can coordinate mutual aid when traditional systems fail. For the AI for Good hackathon, I built The Common Fund: a resource for tracking survival resources, matching surplus with need, and helping neighbors coordinate food, medical support, supplies, and labor.',
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
    id: 5,
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
  }
]
