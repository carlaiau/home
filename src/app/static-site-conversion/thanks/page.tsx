import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Static site conversion enquiry sent',
  description:
    'Your static site conversion enquiry has been sent to Carl Aiau.',
  robots: { index: false, follow: false },
}

export default function StaticSiteThanks() {
  return (
    <SimpleLayout
      title="Your conversion enquiry is sent."
      intro="Thanks for getting in touch. I’ll review your website and respond about suitability, the features you need to keep, and the scope of a conversion. No work or billing starts until we agree to proceed."
    >
      <Button href="/static-site-conversion">
        Back to static site conversion
      </Button>
    </SimpleLayout>
  )
}
