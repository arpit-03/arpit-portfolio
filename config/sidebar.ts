import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
  FaGlobe,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arpit_03/',
    icon: FaInstagram,
  },
  {
    
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arpit-sachdeva-98154b136',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/arpit-03',
    icon: FaGithub,
  },
  {
    label: 'Company',
    href: 'https://chargenx.com',
    icon: FaGlobe,
  },
]
