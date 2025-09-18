import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing tailored for every seller',
  description: 'Choose a plan that grows with your multi-channel business.',
  plans: [
    {
      id: 'oss',
      title: 'Open Source',
      description: 'Basic components, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication (Clerk/Supabase/Magic)',
        },
        {
          title: 'Form (react-hook-form)',
        },
        {
          title: 'Modals manager',
        },
        {
          title: 'Hotkeys',
        },
        {
          title: 'Web3 components',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: 'https://9tikconnector.vercel.app/',
      },
    },
    {
      id: 'bootstrap',
      title: 'Bootstrap',
      description:
        'Essential tools for single shops and small teams: products, orders, basic insights.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One project',
        },
        {
          title: 'One developer',
        },
        {
          title: 'Advanced components',
        },
        {
          title: 'Multiple themes',
        },
        {
          title: 'Next.js and Electron boilerplates',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://9tikconnector.vercel.app/',
      },
    },
    {
      id: 'startup',
      title: 'Startup',
      description:
        'Unlimited license for growing teams: multiple shops, advanced insights, and priority support.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Unlimited developers',
        },
        {
          title: '1 year of updates',
        },
        {
          title: 'Everything from Bootstrap',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://9tikconnector.vercel.app/',
      },
    },
  ],
}
