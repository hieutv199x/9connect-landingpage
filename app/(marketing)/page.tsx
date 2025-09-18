'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: '9Connect Landing Page',
  description:
    '9Connect is the operations hub for multi-channel sellers. Connect Amazon & TikTok Shop to manage products, orders, fulfillment, finance, and support from one place.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Run your
                <Br /> Amazon, TikTok Shop & more from <Em>one place</Em>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                9Connect centralizes your day-to-day commerce operations — products,
                orders, fulfillment, finance, and customer service — across marketplaces.
                <Br /> Work faster, stay in sync, and scale confidently.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://app.9connect.dev/signup">
                  Sign up free
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://9tikconnector.vercel.app/"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in 9Connect Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Multi-channel by default',
            icon: FiSmile,
            description: 'Connect Amazon, TikTok Shop, and more — see everything in one place.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Products & inventory',
            icon: FiSliders,
            description: 'Centralize product data and keep stock in sync across channels.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Orders & fulfillment',
            icon: FiGrid,
            description: 'Track orders, split packages, add tracking, and ship faster.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Built for teams',
            icon: FiThumbsUp,
            description: 'Role-based access, i18n (en/vi), toasts, themes, and more.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Your multi-channel hub">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Connect your Amazon, TikTok Shop, and other channels to manage products,
            orders, and customers in one place. Powerful filters, server-driven
            pagination, and insights keep teams productive.
          </Text>

        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          Built with modern tooling (Next.js, Chakra UI, TypeScript) so your team
          can move fast without reinventing the wheel.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “9Connect helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Scale your ops two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We handle your operational basics so you can focus on growth: auth,
          navigation, CRUD, layouts, billing, and more.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading lineHeight="short" fontSize={['2xl', null, '4xl']} textAlign="left" as="p">
          Your commerce command center.
        </Heading>
      }
      description={
        <>
          9Connect brings products, orders, fulfillment, finance and customer
          service together for multi-channel sellers. Connect shops, automate
          workflows, and get clear insights — all in one place.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Orders & fulfillment',
          icon: FiBox,
          description: 'Split orders into packages, add tracking per provider, and sync updates.',
          variant: 'inline',
        },
        {
          title: 'Products & listings',
          icon: FiLock,
          description: 'Centralize product data and publish updates across channels with confidence.',
          variant: 'inline',
        },
        {
          title: 'Search & filters',
          icon: FiSearch,
          description: 'Server-driven pagination, advanced filters, and keyword search that scales.',
          variant: 'inline',
        },
        {
          title: 'Customer service',
          icon: FiUserPlus,
          description: 'Keep conversations and order context together for faster resolutions.',
          variant: 'inline',
        },
        {
          title: 'Feature flags',
          icon: FiFlag,
          description: 'Toggle features per plan and environment as your team grows.',
          variant: 'inline',
        },
        {
          title: 'Insights',
          icon: FiTrendingUp,
          description: 'Status cards and metrics that summarize what needs attention.',
          variant: 'inline',
        },
        {
          title: 'Themes & i18n',
          icon: FiToggleLeft,
          description: 'Multiple themes and internationalization out of the box (en/vi).',
          variant: 'inline',
        },
        {
          title: 'CLI & generators',
          icon: FiTerminal,
          description: 'Extend safely with generators to keep consistency and speed.',
          variant: 'inline',
        },
        {
          title: 'API-first',
          icon: FiCode,
          description: (
            <>
              Vercel-friendly caching (s-maxage, SWR) and clean APIs to integrate with your stack.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home;
        