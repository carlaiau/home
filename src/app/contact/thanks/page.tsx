import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Message sent',
  description: 'Thanks for getting in touch.',
}

export default function ContactThanks() {
  return (
    <SimpleLayout
      title="Thanks for getting in touch."
      intro="Your message has been sent. I will get back to you as soon as I can."
    />
  )
}
