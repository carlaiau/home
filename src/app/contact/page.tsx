import { type Metadata } from 'next'

import { ContactForm } from '@/app/contact/ContactForm'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Carl Aiau about software, agentic systems, and product engineering work.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Let’s build something useful."
      intro="Tell me what you’re working on, what you’re trying to achieve, and roughly what kind of budget you have in mind. I work best on product, workflow, automation and integration problems where speed matters, but production still needs to behave."
    >
      <div className="max-w-3xl">
        <ContactForm />
      </div>
    </SimpleLayout>
  )
}
