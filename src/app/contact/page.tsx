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
      intro="Tell me what you’re trying to achieve, where your operation is getting stuck, and roughly what kind of budget you have in mind. I work best on product, workflow, automation, AI, and integration problems where repetitive work can be removed, speed matters, and production still needs to behave."
    >
      <div className="max-w-3xl">
        <ContactForm />
      </div>
    </SimpleLayout>
  )
}
