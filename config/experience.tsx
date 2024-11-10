import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'Hyperpure',
    longName: 'Hyperpure (By Zomato)',
    subDetail: '',
    url: 'https://www.hyperpure.com/',
    position: 'Software Development Engineer 2 (SDE 2)',
    duration: 'Jul 2022 - Aug 2024',
    logo: {
      light: '/worked_at_logos/hyperpureicon.jpg',
      dark: '/worked_at_logos/hyperpureicon.jpg',
    },
    roles: [
      <>
      Led a company-wide transition to server-side rendering with Next.js, optimizing SEO performance in line with Google’s Core Web Vitals (LCP, FID, CLS). Improved crawlability and performance metrics, driving an 87% increase in daily organic visits and boosting average search position from 45 to 15. Approximately 20% of total orders were attributed to organic search.
    </>,
    <>
      Integrated partners’ Point of Sale systems with Iframe, enabling seamless ordering through the Hyperpure platform directly via their POS apps. This integration contributed to a 1.2% increase in GMV, enhancing business growth.
    </>,
    <>
      Developed a ‘Mandi’ procurement system, allowing buyers to source supplies directly from the market and bypass warehousing. This strategic shift resulted in significant cost savings on warehousing for each order.
    </>,
    <>
      Enhanced product search functionality with AI-driven models like Spell Correction and Entity Recognition, integrated into Elasticsearch. These improvements increased search-to-cart actions by 10%, boosting user engagement and conversion rates.
    </>,    
    ],
  },
  SCG: {
    name: 'Zomato',
    longName: 'Zomato',
    subDetail: '',
    url: 'https://www.zomato.com/',
    position: 'Software Development Engineer (SDE)',
    duration: 'Oct 2020 - Jul 2022',
    logo: {
      light: '/worked_at_logos/zomatoicon.png',
      dark: '/worked_at_logos/zomatoicon.png',
    },
    roles: [
      <>
      Implemented an automated ticket request system, reducing manual effort by 74.2% on average monthly tickets. The system handles multiple ticket types, including refunds and discrepancies, using predefined rules and data for efficient processing.
    </>,
    <>
      Developed a Python-based Routing System that intelligently grouped orders, reducing daily routes by 15. This optimization improved delivery efficiency, decreased route times, and significantly lowered supply chain costs.
    </>,
    <>
      Introduced a Zone System to categorize outlets into specific zones, optimizing route planning and delivery operations. This enhancement increased On-Time Delivery (OTD) rates by 30%, ensuring timely fulfillment and higher customer satisfaction.
    </>,
    <>
      Created a robust Cash Management system to address discrepancies, reducing monthly losses by approximately ₹4 lakh. By establishing a daily cash reporting process for delivery partners, this solution improved accuracy, accountability, and minimized financial losses.
    </>,
    <>
      Led the redesign of the consumer website UI, integrating payment kits and maintaining the web repository. This effort enhanced the user experience, boosting customer satisfaction (CSAT) and platform engagement.
    </>,
    
    ],
  },
  Blotocol: {
    name: 'Joulewise',
    longName: 'Joulewise',
    subDetail: '',
    url: 'https://joulewise.com/',
    position: 'Software Engineer (Contract)',
    duration: 'Aug 2024 - Oct 2024',
    logo: {
      light: '/worked_at_logos/jouleWise.svg',
      dark: '/worked_at_logos/joulewise-white-logo.svg',
    },
    roles: [
      <>
       Led a team of five to build a platform for electricity forecasting and trading for DISCOMs and factories.
      </>,
      <>
      Developed backend with Azure Functions, Python, and Azure SQL, and a React-based frontend.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
