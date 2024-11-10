import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiDocker,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiRails,
  SiGo,
  SiPython,
  SiJava,
  SiAmazonaws,
  SiTerraform,
  SiTailwindcss,
  SiSass,
  SiAzuredevops,
  SiAngular,
  SiOpenaccess,
  SiTensorflow,
  SiFacebook,
  SiOpengl,
  SiNvidia,
  SiElasticsearch,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'
  | 'ai ml'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Ruby on Rails',
      icon: SiRails,
    },
    {
      name: 'Node',
      icon: SiNodeDotJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Golang',
      icon: SiGo,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Java',
      icon: SiJava,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextDotJs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Angular',
      icon: SiAngular,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MsSQL',
      icon: SiMicrosoftsqlserver,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Redis',
      icon: SiRedis,
    },
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
    {
      name: 'Dynamo DB',
      icon: SiAmazonaws,
    },
    {
      name: 'Elasticsearch',
      icon: SiElasticsearch,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'Terraform',
      icon: SiTerraform,
    },
    {
      name: 'Aws',
      icon: SiAmazonaws,
    },
    {
      name: 'Azure',
      icon: SiAzuredevops,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
    {
      name: 'Tailwind',
      icon: SiTailwindcss,
    },
    {
      name: 'Sass',
      icon: SiSass,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialUi,
    }
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
  'ai ml' : [
    {
      name: 'Tensorflow',
      icon: SiTensorflow,
    },
    {
      name: 'Llama',
      icon: SiFacebook,
    },
    {
      name: 'ChatGPT',
      icon: SiOpenaccess,
    },
    {
      name: 'ChatRTX',
      icon: SiNvidia,
    },
  ]
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
