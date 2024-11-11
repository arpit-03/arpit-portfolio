import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Hyperpure"
            src="/works/hp.jpg"
            description="Making the lives of our partner restaurants better, as part of
the ‘Hyperpure’ team that helps provide fresh and high-quality ingredients and supplies to restaurants."
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://hyperpure.com/"
            objectPosition="left 0%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Hyperpure Routing"
            description="Developed a Python-based Routing System to intelligently group orders, resulting in a 15-route reduction per day. This optimization
enhanced delivery efficiency, minimized route times, and effectively lowered supply chain management costs."
            src="/works/zomato.jpg"
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            isMobile={isMobile}
            ctaUrl=""
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Joulewise ErgCon"
            description="Built a platform for electricity forecasting and trading for DISCOMs and factories."
            src="/works/jw.jpg"
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://joulewise.com"
            objectPosition="left 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Borehole Seismic"
            description="At Borehole Seismic LLC, worked on borehole, surface, and shallow-buried-array microseismic projects. Delivered precise and unbiased results, surpassing those provided by larger service companies."
            src="/works/bh.jpg"
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.boreholeseismic.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="Collaboration Room AI"
            description="Developed a WebRTC-based video conferencing app using MediaSoup Library, with React.js frontend and Node.js backend."
            src="/works/collab.jpg"
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://collaborationroom.ai/"
            objectPosition="left 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="USAID (CPAT)"
            description="Developed and deployed a tool for USAID to monitor organizations' adherence to security protocols. Built the backend with Python and MySQL, and the frontend with React."
            src="/works/usaid.jpg"
            height={{ base: '110px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.usaid.gov/"
                objectPosition="left 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
