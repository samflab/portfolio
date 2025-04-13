import React from 'react'
import {
  SiHtml5,
  SiReact,
  SiJavascript,
  SiFirebase,
  SiStorybook,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
} from 'react-icons/si'
import { IoLogoSass, IoLogoCss3 } from 'react-icons/io'
import { DiGit } from 'react-icons/di'

export const SkillData = [
  {
    id: 1,
    icon: <SiHtml5 />,
    name: 'HTML',
  },
  {
    id: 2,
    icon: <SiJavascript />,
    name: 'JavaScript',
  },

  {
    id: 3,
    icon: <IoLogoCss3 />,
    name: 'CSS',
  },
  {
    id: 4,
    icon: <IoLogoSass />,
    name: 'Sass',
  },
  {
    id: 5,
    icon: <SiTailwindcss />,
    name: 'Tailwind',
  },

  {
    id: 6,
    icon: <SiReact />,
    name: 'React JS',
  },

  {
    id: 7,
    icon: <SiFirebase />,
    name: 'Firebase',
  },

  {
    id: 8,
    icon: <SiMysql />,
    name: 'MySQL',
  },
  {
    id: 9,
    icon: <SiNodedotjs />,
    name: 'Node JS',
  },
  {
    id: 10,
    icon: <DiGit />,
    name: 'Git',
  },

  {
    id: 11,
    icon: <SiStorybook />,
    name: 'Storybook',
  },
]
