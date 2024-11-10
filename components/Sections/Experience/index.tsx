import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Places i’ve worked.
    </Heading>
    <Text variant="description">
    Since 2020, I’ve had the opportunity to work with diverse companies, enhancing my expertise as a full-stack software developer. These collaborations have been instrumental in shaping my career and hold a special place in my journey.

    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
