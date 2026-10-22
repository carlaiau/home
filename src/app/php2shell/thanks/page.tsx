import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'PHP support enquiry sent',
  description: 'Your PHP upgrade support enquiry has been sent to Carl Aiau.',
  robots: { index: false, follow: false },
}

export default function PhpSupportThanks() {
  return (
    <SimpleLayout
      title="Your enquiry is sent."
      intro="Thanks for getting in touch. I'll review your details and respond ASAP to confirm availability and next steps. Your enquiry is not a confirmed booking; no work or billing starts until we agree to proceed."
    >
    </SimpleLayout>
  )
}
